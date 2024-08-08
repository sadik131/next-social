import Image from 'next/image'
import React from 'react'
import Ads from './Ads'
import { auth } from '@clerk/nextjs/server'
import prisma from '@/lip/client'
import Link from 'next/link'

async function LeftMenu() {
  const { userId } = auth()
  if (!userId) throw new Error("user not authenticated")

  const user = await prisma.user.findFirst({
    where: { clerkId: userId },
    include: {
      _count: {
        select: {
          followers: true
        }
      }
    }
  })
  return (
    <>
      {user && <div className='cardContainer my-4'>
        <div className='relative w-full h-[100px]'>
          <Image src={user.cover || "/noCover.jpg"} fill sizes='(max-width: 768px) 100vw, 500px' alt='cover' />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='uppercase'>{user.username}</h1>
          <h1>Followers :{user._count.followers}</h1>
          <Link className='bg-blue-500 text-white rounded-md py-1 px-2' href={`/pages/profile/${user.username}`}>My Profile</Link>
        </div>
      </div>}
      <div className='cardContainer flex flex-col gap-4'>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/posts.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>My Posts</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/activity.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Activity</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/market.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Marketplace</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/events.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Events</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/albums.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Albums</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/videos.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Video</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/news.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>News</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/courses.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Courses</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/lists.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Lists</span>
        </div>
        <div className='flex items-center gap-x-4 cursor-pointer'>
          <Image src={"/settings.png"} height={20} width={20} alt='image' />
          <span className='text-sm'>Settings</span>
        </div>
      </div>
      <div className='mt-4'><Ads size='md' /></div>
    </>
  )
}

export default LeftMenu