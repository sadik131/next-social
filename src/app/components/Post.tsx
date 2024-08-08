import Image from 'next/image'
import React from 'react'
import Comment from './Comment'
import { PostProp } from '@/lip/typs'
import PostIntaration from './PostIntaration'
import prisma from '@/lip/client'
import { auth } from '@clerk/nextjs/server'
import PostMore from './PostMore'
import Link from 'next/link'

async function Post({ post }: { post: PostProp }) {
    const { userId } = auth()
    if (!userId) throw new Error("user is not authenticates")

    const user = await prisma.user.findFirst({ where: { clerkId: userId } })
    if (!user) {
        throw new Error("user not authenticated")
    }
    return (
        <div className='bg-white rounded-lg  my-5 p-5'>
            <div className='flex justify-between mb-5 items-center '>
                <div className='flex items-center gap-x-2'>
                    <Image src={post.user.avatar || "/noAvatar.png"} alt='' height={40} width={40} className='h-10 w-10 rounded-full' />
                    <Link href={`/pages/profile/${post.user.username}`}>
                        {post.user.name && post.user.surname ? `${post.user.name} ${post.user.surname} ` : post.user.username}
                    </Link>
                </div>
                {post.userId === user.id && <PostMore id={post.id} />}
            </div>
            <div>
                {post.img && <div className='h-96 w-full relative'>
                    <Image src={post.img} alt='more' fill sizes='(max-width: 768px) 100vw, 500px' className='rounded-md object-cover' />
                </div>}
                {post.desc && <p className='my-5'>{post.desc}</p>}
            </div>
            <PostIntaration userId={user.id} postId={post.id} comments={post._count.comment} likes={post.likes.map(like => like.userId)} />
            <Comment postId={post.id} user={user} />
        </div>
    )
}

export default Post