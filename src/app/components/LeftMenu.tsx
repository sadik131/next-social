import Image from 'next/image'
import React from 'react'
import Ads from './Ads'

function LeftMenu() {
  return (
    <>
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