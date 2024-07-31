"use server"
import { z } from "zod";
import prisma from "./client";
import { auth } from "@clerk/nextjs/server";

export async function handleFollowToggle(userId: string, currentId: string) {
    try {
        // check if the user already follow
        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentId,
                followingId: userId
            }
        })
        // console.log(existingFollow, "chek the user")
        // if follow so unflow 
        if (existingFollow) {
            await prisma.follower.delete({
                where: { id: existingFollow.id }
            })
        } else {
            // now cheack if the user already follow
            const existingFollowReq = await prisma.followRequest.findFirst({
                where: {
                    receiverId: userId,
                    senderId: currentId
                }
            })
            console.log(existingFollowReq, "cheack the flowing request send")
            // if he follow then unflow the user
            if (existingFollowReq) {
                await prisma.followRequest.delete({
                    where: { id: existingFollowReq.id }
                })
            } else {
                // if he doesn't flow him so make a flowing request
                await prisma.followRequest.create({
                    data: {
                        receiverId: userId,
                        senderId: currentId
                    }
                })
            }
        }
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
    }
}

export async function handleBlockToggle(userId: string, currentId: string) {
    try {
        const existingBlock = await prisma.block.findFirst({
            where: {
                blockerId: currentId,
                blockedId: userId
            }
        })

        if (existingBlock) {
            await prisma.block.delete({
                where: { id: existingBlock.id }
            })
        } else {
            await prisma.block.create({
                data: {
                    blockerId: currentId,
                    blockedId: userId
                }
            })
        }
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
    }
}

export async function handleFriendReq(userId: string, currentId: string) {
    try {
        console.log(userId, currentId)
        const existFriend = await prisma.followRequest.findFirst({
            where: {
                receiverId: currentId,
                senderId: userId
            }
        })
        if (existFriend) {
            await prisma.followRequest.delete({
                where: { id: existFriend.id }
            })

            await prisma.follower.create({
                data: {
                    followerId: currentId,
                    followingId: userId
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export async function handleFriendReqCencle(userId: string, currentId: string) {
    try {
        const existFriend = await prisma.followRequest.findFirst({
            where: {
                receiverId: currentId,
                senderId: userId
            }
        })
        console.log(existFriend)
        if (existFriend) {
            await prisma.followRequest.delete({
                where: { id: existFriend.id }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

export async function handelUpdate(formData: FormData, cover: string) {
    const fields = Object.fromEntries(formData);
    console.log(cover)

    const filteredFields = Object.fromEntries(
        Object.entries(fields).filter(([_, value]) => value !== "")
    );

    const Profile = z.object({
        cover: z.string().optional(),
        name: z.string().max(60).optional(),
        surname: z.string().max(60).optional(),
        description: z.string().max(255).optional(),
        city: z.string().max(60).optional(),
        school: z.string().max(60).optional(),
        work: z.string().max(60).optional(),
        website: z.string().max(60).optional(),
    });

    const validatedFields = Profile.safeParse({ cover, ...filteredFields });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return { success: false, error: true };
    }

    const { userId } = auth()
    if (!userId) throw new Error("user not authenticated")
    try {
        await prisma.user.update({
            where: { clerkId: userId },
            data: validatedFields.data
        })
        return { success: true, error: false }
    } catch (error) {
        console.log(error)
        return { success: false, error: true };
    }
}

export async function handelLikeToggle({ userId, postId }: { userId: string, postId: string }) {
    const existLike = await prisma.like.findFirst({
        where: { postId, userId }
    })
    if (existLike) {
        await prisma.like.delete({
            where: { id: existLike.id }
        })
    } else {
        await prisma.like.create({
            data: {
                postId, userId
            }
        })
    }
}