import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

function UserProfile({ data, post, followers, following }: { data: User, post?: number, followers?: number, following?: number }) {
    return (
        <div>
            <div className='relative h-60 w-full'>
                <Image src={data.cover || "/noAvater.png"} alt='banner' fill />
                <Image src={data.avatar || "/noCover.jpg"} alt='profile' height={128} width={128} className='rounded-full h-32 w-32 m-auto left-0 right-0 bottom-[-60px] absolute' />
            </div>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <h1 className='font-medium text-lg mt-16'>{data.name && data.surname ? `${data.surname} ${data.name} ` : data.username}</h1>
                <div className='flex gap-4'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>{post}</h1>
                        <h1>Posts</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>{followers}</h1>
                        <h1>Folowers</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>{following}</h1>
                        <h1>Folowing</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile