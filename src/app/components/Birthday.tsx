import Image from 'next/image'
import React from 'react'

function Birthday() {
    return (
        <div className='cardContainer'>
            <h1 className='text-gray-500'>Birthday</h1>
            <div className='mt-2 flex justify-between items-center'>
                <Image src="https://plus.unsplash.com/premium_photo-1719060852424-e8400d1bbb4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt='user' height={40} width={40} className='h-10 w-10h-10 rounded-full' />
                <p>Wazib hasan</p>
                <button className=' bg-blue-500 rounded-md text-white px-2 py-1'>Celebrate</button>
            </div>
            <div className='flex items-center gap-2 bg-slate-300 p-2 mt-4 rounded-lg'>
                <Image src="/gift.png" alt='gift' height={40} width={40} className='h-10 w-10' />
                <div className='text-sm'>
                    <h1>Upcoming Birthdays</h1>
                    <h1 className='text-slate-700'>See other 16 have upcoming birthday</h1>
                </div>
            </div>
        </div>
    )
}

export default Birthday