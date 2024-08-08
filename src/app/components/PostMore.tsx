"use client"
import { deletePost } from '@/lip/action'
import Image from 'next/image'
import { useState } from 'react'

function PostMore({ id }: { id: string }) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='cursor-pointer ' onClick={() => setOpen(true)}>
                <Image src="/more.png" alt='more' height={16} width={16} className='h-4 w-4 cursor-pointer' />
            </div>
           {open && <div className=' top-4 right-0 bg-white w-16 shadow-md cursor-pointer'>
                <form action={() => deletePost(id)}>
                    <button className='text-red-500'>delete</button>
                </form>
            </div>}
        </div>
    )
}

export default PostMore