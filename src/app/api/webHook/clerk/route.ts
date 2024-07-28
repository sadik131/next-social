import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import prisma from '@/lip/client'

export async function POST(req: Request) {

    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    // Get the body
    const payload = await req.json()
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    const { id } = evt.data;
    const eventType = evt.type;

    if (typeof id !== 'string') {
        return new Response('Invalid id', {
            status: 400
        });
    }
    console.log(eventType)

    if (eventType === "user.created") {
        console.log(JSON.parse(body).data.email_addresses[0].email_address)
        try {
            await prisma.user.create({
                data: {
                    clerkId: evt.data.id,
                    email: JSON.parse(body).data.email_addresses[0].email_address,
                    username: JSON.parse(body).data.username,
                    avatar: JSON.parse(body).data.image_url || "/noAvatar.png",
                    cover: "/noCover.jpg"
                }
            })
            return new Response("User has create", { status: 200 })
        } catch (error) {
            return new Response("User hasn't create", { status: 400 })
        }
    }
    if (eventType === "user.updated") {
        try {
            await prisma.user.update({
                where: { clerkId: evt.data.id },
                data: {
                    username: JSON.parse(body).data.username,
                    avatar: JSON.parse(body).data.image_url || "/noAvatar.png",
                    email: JSON.parse(body).data.email_addresses[0].email_address,
                    cover: "/noCover.jpg"
                }
            })
            return new Response("User has update", { status: 200 })
        } catch (error) {
            return new Response("User hasn't update", { status: 400 })
        }
    }

    return new Response('', { status: 200 })
}