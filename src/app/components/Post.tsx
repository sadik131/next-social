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
        <div className={`bg-white rounded-lg  my-5 p-5`}>
            <div className='flex justify-between mb-5 items-center '>
                {/* user */}
                <div className='flex items-center gap-x-2'>
                    <Image src={post.user.avatar || "/noAvatar.png"} alt='' height={40} width={40} className='h-10 w-10 rounded-full' />
                    <Link href={`/pages/profile/${post.user.username}`}>
                        {post.user.name && post.user.surname ? `${post.user.name} ${post.user.surname} ` : post.user.username}
                    </Link>
                    {post.status === "PENDING" && <h5 className='text-xs text-red-500 '>Pending</h5>}
                </div>
                {post.userId === user.id && <PostMore id={post.id} />}
            </div>
            {/* posts */}
            <div className={`${post.status === "PENDING" && "opacity-50"} mb-4`}>
                {post.desc && <p className='my-5'>{post.desc}</p>}
                {post.img && <div className='h-96 w-full relative'>
                    <Image src={post.img} alt='more' fill sizes='(max-width: 768px) 100vw, 500px' className='rounded-md object-cover' />
                </div>}
            </div>
            {/* post interaction */}
            {post.status === "APPROVED" && 
            <>
            <PostIntaration userId={user.id} postId={post.id} comments={post._count.comment} likes={post.likes.map(like => like.userId)} />
            <Comment postId={post.id} user={user} />
            </>
            }
        </div>
    )
}

export default Post