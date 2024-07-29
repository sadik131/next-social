import prisma from '@/lip/client'
import React from 'react'
import FriendList from './FriendList'

async function Friends({ userId }: { userId: string }) {

    const friendReq = await prisma.followRequest.findMany({
        where: {
            receiverId: userId
        },
        include: { sender: true }
    })

    return (
        <div className="cardContainer flex flex-col gap-4">
            <div className='flex justify-between text-sm'>
                <h1 className='text-gray-500 font-medium'>Friend Requests</h1>
                <span className='text-blue-500'>See all</span>
            </div>
            <FriendList friendReq={friendReq} userId={userId} />
        </div>
    )
}

export default Friends

