"use client"
import { handelLikeToggle } from '@/lip/action'
import Image from 'next/image'
import React, { useOptimistic, useState } from 'react'

function PostIntaration({ postId, comments, likes, userId }: { userId: string, postId: string, comments: number, likes: string[] }) {



    const [postLike, setPostLike] = useState({
        likeCount: likes.length,
        isLiked: userId ? likes.includes(userId) : false
    })

    const [optimasticLike, switchOptimasticLike] = useOptimistic(postLike, (state, value) => {
        return {
            likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
            isLiked: !state.isLiked
        }
    })

    const handelLike = async () => {
        switchOptimasticLike("")
        try {
            await handelLikeToggle({ userId, postId })
            setPostLike(prv => ({
                likeCount: prv.isLiked ? prv.likeCount - 1 : prv.likeCount + 1,
                isLiked: !prv.isLiked
            }))
        } catch (error) {

        }
    }

    return (
        <div className="flex justify-between">
            <div className='flex text-sm gap-x-2'>
                {/* likes */}
                <form action={handelLike}>
                    <button>
                        <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                            <Image src={optimasticLike.isLiked ? "/liked.png" : "/like.png"} alt='like' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                            <span className='mx-2'> | </span>
                            <span>{optimasticLike.likeCount} <span className='hidden md:inline-block'>Likes</span></span>
                        </div>
                    </button>
                </form>
                {/* comments */}
                <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                    <Image src="/comment.png" alt='comment' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                    <span className='mx-2'> | </span>
                    <span>{comments}<span className='hidden md:inline-block'>Comment</span></span>
                </div>
            </div>
            {/* share */}
            <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                <Image src="/share.png" alt='share' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                <span className='mx-2'> | </span>
                <span>13<span className='hidden md:inline-block'>Share</span></span>
            </div>
        </div>
    )
}

export default PostIntaration