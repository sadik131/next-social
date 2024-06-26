import Image from 'next/image'
import React from 'react'

function AddPost() {
    return (
        <>
            <div className='bg-white shadow-lg  gap-2 justify-between items-center my-5 rounded-md p-4'>
                <div className='flex items-center justify-center gap-2'> 
                <Image src="/Australia.jpg" alt='user' height={64} width={64} className='h-16 w-16 rounded-full' />
                <div className="flex-1">
                    <div className='flex gap-4'>
                        <textarea className='bg-slate-100 w-full' placeholder="What's on your mind"></textarea>
                        <Image src="/emoji.png" alt='emoji' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                    </div>
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