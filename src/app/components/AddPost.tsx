"use client"
import { auth } from '@clerk/nextjs/server'
// import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'


function AddPost() {
    const [desc, setDesc] = useState("")
    const handelFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch("/api/post", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ desc, userId: "669dd776c8ec10b7d4452ceb" })
            })
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <div className='bg-white shadow-lg  gap-2 justify-between items-center my-5 rounded-md p-4'>
                <div className='flex items-center justify-center gap-2'>
                    <Image src="/Australia.jpg" alt='user' height={64} width={64} className='h-16 w-16 rounded-full' />
                    <div className="flex-1">
                        <form onSubmit={(e) => handelFormSubmit(e)} className='flex gap-4'>
                            <textarea onChange={(e) => setDesc(e.target.value)} name='desc' className='bg-slate-100 p-1 w-full' placeholder="What's on your mind"></textarea>
                            <Image src="/emoji.png" alt='emoji' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                            <button>send</button>
                        </form>
                    </div>
                </div>
                <div className='flex items-center  mt-2 text-sm gap-2'>
                    <div className='flex items-center gap-2'>
                        <Image src="/addimage.png" alt="image" height={20} width={20} />
                        <span>Photo</span>
                    </div>
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
            </div>
        </>
    )
}

export default AddPost