import Image from 'next/image'
import React from 'react'
import Comment from './Comment'
import { PostProp } from '@/lip/typs'
import PostIntaration from './PostIntaration'
import prisma from '@/lip/client'
import { auth } from '@clerk/nextjs/server'

async function Post({ post }: { post: PostProp }) {
    const { userId } = auth()
    if (!userId) throw new Error("user is not authenticates")

    const user = await prisma.user.findFirst({ where: { clerkId: userId } })
    if(!user){
        throw new Error("user not authenticated")
    }
    return (
        <div className='bg-white rounded-lg  my-5 p-5'>
            <div className='flex justify-between mb-5 items-center '>
                <div className='flex items-center gap-x-2'>
                    <Image src={post.user.avatar || "/noAvatar.png"} alt='' height={40} width={40} className='h-10 w-10 rounded-full' />
                    <p>
                        {post.user.name && post.user.surname ? `${post.user.name} ${post.user.surname} ` : post.user.username}
                    </p>
                </div>
                <Image src="/more.png" alt='more' height={16} width={16} className='h-4 w-4 cursor-pointer' />
            </div>
            <div>
                {post.img && <div className='h-96 w-full relative'>
                    <Image src={post.img} alt='more' fill className='rounded-md object-cover' />
                </div>}
                {post.desc && <p className='my-5'>{post.desc}</p>}
            </div>
            <PostIntaration userId={user.id} postId={post.id} comments={post._count.comment} likes={post.likes.map(like => like.userId)} />
            <Comment />
        </div>
    )
}

export default Post