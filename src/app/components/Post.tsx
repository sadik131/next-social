import Image from 'next/image'
import React from 'react'
import Comment from './Comment'

function Post() {
    return (
        <div className='bg-white rounded-lg  my-5 p-5'>
            <div className='flex justify-between mb-5 items-center '>
                <div className='flex items-center gap-x-2'>
                    <Image src="/kasmir.jpg" alt='' height={40} width={40} className='h-10 w-10 rounded-full' />
                    <p>Salatus Sadik</p>
                </div>
                <Image src="/more.png" alt='more' height={16} width={16} className='h-4 w-4 cursor-pointer' />
            </div>
            <div>
                <div className='h-96 w-full relative'>
                    <Image src="/image.jpg" alt='more' fill className='rounded-md object-cover' />
                </div>
                <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque fugiat sed sunt pariatur odio voluptatem quidem quod eum aut laborum accusamus, libero consectetur laboriosam nostrum numquam vel nulla nemo inventore?</p>
            </div>
            <div className="flex justify-between">
                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                        <Image src="/like.png" alt='like' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                        <span className='mx-2'> | </span>
                        <span>123 <span className='hidden md:inline-block'>Likes</span></span>
                    </div>
                    <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                        <Image src="/comment.png" alt='comment' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                        <span className='mx-2'> | </span>
                        <span>13 <span className='hidden md:inline-block'>Comment</span></span>
                    </div>
                </div>
                    <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                        <Image src="/share.png" alt='share' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                        <span className='mx-2'> | </span>
                        <span>13 <span className='hidden md:inline-block'>Share</span></span>
                    </div>
            </div>
            <Comment />
        </div>
    )
}

export default Post