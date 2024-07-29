import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import UserIntraction from './UserIntraction'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lip/client'
import UpdateInfo from './UpdateInfo'

async function UserCardInfo({ data }: { data: User }) {

  const { userId: currentUser } = auth()
  if (!currentUser) {
    throw new Error("unauthorize")
  }

  const user = await prisma.user.findFirst({
    where: { clerkId: currentUser }
  })

  if (!user) throw new Error("unAuthorize user")

  let blockUser;
  let follwerUser;
  let follwingUserReq;

  const blockRes = await prisma.block.findFirst({
    where: {
      blockerId: user?.id,
      blockedId: data.id
    }
  })
  const followRes = await prisma.follower.findFirst({
    where: {
      followerId: data.id,
      followingId: user?.id
    }
  })
  const FollowReqRes = await prisma.followRequest.findFirst({
    where: {
      receiverId: data.id,
      senderId: user?.id
    }
  })


  blockRes ? (blockUser = true) : (blockUser = false)
  followRes ? (follwerUser = true) : (follwerUser = false)
  FollowReqRes ? (follwingUserReq = true) : (follwingUserReq = false)


  const date = new Date(data.createdAt)
  const formattedData = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className='cardContainer flex flex-col gap-3'>
      <div className='text-sm font-semibold flex justify-between items-center'>
        <h1 className='text-gray-500'>User information</h1>
        {data.id === user.id ? (<UpdateInfo />) : (
          <button className='bg-transparent border-none text-blue-500'>See all</button>
        )}
      </div>
      <div className='flex items-center gap-5'>
        <h1 className='text-gray-500'>
          {data.name && data.surname ? `${data.name} ${data.surname} ` : data.username}
        </h1>
        <h1 className='text-gray-500'>@suptoDev</h1>
      </div>
      {data.description && <p className='text-sm'>{data.description}</p>}
      {data.city && <div className='flex text-sm items-center gap-4'>
        <Image src="/map.png" alt='location' height={20} width={20} />
        <h1>Living in {data.city}</h1>
      </div>}
      {data.school && <div className='flex text-sm items-center gap-4'>
        <Image src="/school.png" alt='school' height={20} width={20} />
        <h1>{data.school}</h1>
      </div>}
      {data.work && <div className='flex text-sm items-center gap-4'>
        <Image src="/work.png" alt='work' height={20} width={20} />
        <h1>{data.work}</h1>
      </div>}
      <div className='flex text-sm items-center justify-between gap-4'>
        {data.website && <div className='flex items-center gap-1'>
          <Image src="/link.png" alt='link' height={20} width={20} />
          <h1 className='text-blue-500'>{data.website}</h1>
        </div>}
        <div className='flex items-center gap-1'>
          <Image src="/date.png" alt='date' height={20} width={20} />
          <h1 className='text-sm'>Joined {formattedData}</h1>
        </div>
      </div>
      {data.id !== user.id && <UserIntraction userId={data.id} blockUser={blockUser} follwerUser={follwerUser} follwingUserReq={follwingUserReq} currentUserId={user?.id} />}
    </div>
  )
}

export default UserCardInfo