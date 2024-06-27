import Image from 'next/image'
import React from 'react'

function Stories() {
  return (
    <div className='bg-white p-2 rounded-lg shadow-md overflow-x-scroll scrollBarHidden'>
      <div className='flex gap-6 items-center w-max '>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <Image src="/kasmir.jpg" alt='stories' width={80} height={80} className='w-20 h-20 rounded-full ring-2' />
          <p>Supto</p>
        </div>
      </div>
    </div>
  )
}

export default Stories