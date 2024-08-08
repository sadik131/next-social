"use client"
import { createPost } from '@/lip/action'
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import React, { useState } from 'react'


function AddPost({ user }: { user?: User }) {
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState<any>()


    return (
        <>
            <div className='bg-white shadow-lg  gap-2 justify-between items-center my-5 rounded-md p-4'>
                <div className='flex items-center justify-center gap-2'>
                    <Image src={user?.avatar || "noAvatar.png"} alt='user' height={64} width={64} className='h-16 w-16 rounded-full' />
                    <div className="flex-1">
                        <form action={() => {
                            createPost({ desc, img: img?.secure_url || "" })
                            setImg("")
                        }} className='flex gap-4'>
                            <textarea onChange={(e) => setDesc(e.target.value)} name='desc' className='bg-slate-100 p-1 w-full' placeholder="What's on your mind"></textarea>
                            <Image src="/emoji.png" alt='emoji' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                            <button>send</button>
                        </form>
                    </div>
                </div>
                <div className='flex items-center  mt-2 text-sm gap-2'>
                    <CldUploadWidget uploadPreset="socelMedia" onSuccess={(result) => setImg(result?.info)}>
                        {({ open }) => {
                            return (
                                <div onClick={() => open()} className='flex cursor-pointer items-center gap-2'>
                                    <Image src="/addimage.png" alt="image" height={20} width={20} />
                                    <span>Photo</span>
                                </div>

                            );
                        }}
                    </CldUploadWidget>
                    <div className='flex items-center gap-2'>
                        <Image src="/videos.png" alt="videos" height={20} width={20} />
                        <span>Video</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src="/events.png" alt="events" height={20} width={20} />
                        <span>Events</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src="/poll.png" alt="poll" height={20} width={20} />
                        <span>Poll</span>
                    </div>
                </div>
                {
                    img?.secure_url && <div className='w-full mt-4 h-[500px] relative'>
                        <Image src={img?.secure_url} fill sizes='(max-width: 768px) 100vw, 500px' alt='post' />
                    </div>
                }
            </div>
        </>
    )
}

export default AddPost