import Image from 'next/image'
import React from 'react'

function UserProfile() {
    return (
        <div>
            <div className='relative h-60 w-full'>
                <Image src="/banner.jpg" alt='banner' fill />
                <Image src="/banner2.jpg" alt='banner' height={128} width={128} className='rounded-full h-32 w-32 m-auto left-0 right-0 bottom-[-60px] absolute' />
            </div>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='font-medium text-lg mt-16'>Salatus Sadik</h1>
                <div className='flex gap-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>142</h1>
                        <h1>Posts</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>1.2k</h1>
                        <h1>Folowers</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>1.5k</h1>
                        <h1>Folowing</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile