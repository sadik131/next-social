"use client"
import { handleFriendReq, handleFriendReqCencle } from '@/lip/action';
import { FollowRequest, User } from '@prisma/client';
import Image from 'next/image';
import React, { useOptimistic, useState } from 'react'

type RequestWithUser = FollowRequest & {
    sender: User;
};


function FriendList({ friendReq, userId }: { friendReq: RequestWithUser[], userId: string }) {
    const [requestState, setRequestState] = useState(friendReq)

    const sendRequest = async (userId: string, currentId: string) => {
        try {
            await handleFriendReq(userId, currentId)
            setRequestState(prv => prv.filter((req) => req.senderId !== userId))
        } catch (error) {
            console.log(error)
        }

    }

    const rejectRequest = async (userId: string, currentId: string) => {
        removeOptimistic(userId)
        try {
            await handleFriendReqCencle(userId, currentId)
            setRequestState(prv => prv.filter((req) => req.senderId !== userId))
        } catch (error) {
            console.log(error)
        }
    }

    const [optimisticReq, removeOptimistic] = useOptimistic(requestState, (state, value) => (state.filter(req => req.id !== value)))

    return (
        <div>
            {optimisticReq.length === 0 && <><h1>No friend Request</h1></>}
            {optimisticReq.length !== 0 && (optimisticReq.map(req => (
                <div key={req.id} className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src={req.sender.avatar!} alt='user' height={48} width={48} className='h-12 w-12 rounded-full' />
                        <p> {req.sender.name && req.sender.surname
                            ? `${req.sender.name} ${req.sender.surname}`
                            : req.sender.username}</p>
                    </div>
                    <div className='flex gap-2'>
                        <form action={() => sendRequest(req.senderId, userId)}>
                            <button>
                                <Image src="/accept.png" alt='accept' height={16} width={16} className='h-4 w-4 rounded-full' />
                            </button>
                        </form>
                        <form action={() => rejectRequest(req.senderId, userId)}>
                            <button>
                                <Image src="/reject.png" alt='reject' height={16} width={16} className='h-4 w-4 rounded-full' />
                            </button>
                        </form>
                    </div>
                </div>
            )))}
        </div>
    )
}

export default FriendList