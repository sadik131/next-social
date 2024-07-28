import Image from 'next/image'
import React from 'react'

function Friends({ userId }: { userId: string }) {
    return (
        <div className="cardContainer flex flex-col gap-4">
            <div className='flex justify-between text-sm'>
                <h1 className='text-gray-500'>Friend Requests</h1>
                <span className='text-blue-500'>See all</span>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image src="https://plus.unsplash.com/premium_photo-1719060852424-e8400d1bbb4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt='user' height={48} width={48} className='h-12 w-12 rounded-full' />
                    <p>Wazib hasan</p>
                </div>
                <div className='flex gap-2'>
                    <Image src="/accept.png" alt='accept' height={16} width={16} className='h-4 w-4 rounded-full' />
                    <Image src="/reject.png" alt='reject' height={16} width={16} className='h-4 w-4 rounded-full' />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image src="https://plus.unsplash.com/premium_photo-1719060852424-e8400d1bbb4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt='user' height={48} width={48} className='h-12 w-12 rounded-full' />
                    <p>Wazib hasan</p>
                </div>
                <div className='flex gap-2'>
                    <Image src="/accept.png" alt='accept' height={16} width={16} className='h-4 w-4 rounded-full' />
                    <Image src="/reject.png" alt='reject' height={16} width={16} className='h-4 w-4 rounded-full' />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image src="https://plus.unsplash.com/premium_photo-1719060852424-e8400d1bbb4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt='user' height={48} width={48} className='h-12 w-12 rounded-full' />
                    <p>Wazib hasan</p>
                </div>
                <div className='flex gap-2'>
                    <Image src="/accept.png" alt='accept' height={16} width={16} className='h-4 w-4 rounded-full' />
                    <Image src="/reject.png" alt='reject' height={16} width={16} className='h-4 w-4 rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Friends