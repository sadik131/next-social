import Image from 'next/image'
import React from 'react'

function Comment() {
    return (
        <div className='my-5'>
            <div className="flex my-5">
                <Image src={"/kasmir.jpg"} alt='user' height={40} width={40} className='h-10 w-10 mr-2 rounded-full' />
                <div className='flex flex-1 justify-between items-center px-2 bg-slate-200 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <input type="text" placeholder='Write a comment' className='bg-transparent outline-none' />
                    </div>
                    <Image src={"/emoji.png"} alt='user' height={20} width={20} className='h-5 w-5' />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <div className='flex gap-2 items-center'>
                        <Image src={"/kasmir.jpg"} alt='user' height={32} width={32} className='h-8 w-8 rounded-full' />
                        <p className='font-semibold text-sm'>Sadik Supto</p>
                    </div>
                    <Image src={"/more.png"} alt='more' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                </div>
                <p className='text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempora ut et placeat ducimus fuga odit, illum assumenda voluptatum nesciunt fugit dignissimos consectetur quisquam iusto illo inventore corporis molestias soluta.</p>
                <div className='flex items-center text-sm gap-x-2 text-gray-600'>
                    <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                        <Image src="/like.png" alt='like' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                        <span className='mx-2'> | </span>
                        <span>123 <span className='hidden md:inline-block'>Likes</span></span>
                    </div>
                    <p>Reply</p>
                </div>
            </div>
        </div>
    )
}

export default Comment