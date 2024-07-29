import prisma from '@/lip/client'
import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

async function UserMediaCard({ data }: { data: User }) {

  const mediaImg = await prisma.post.findMany({
    where: { userId: data.id },
    select: {
      img: true
    },
    take: 8
  })


  return (
    <div className='cardContainer'>
      <div className="flex items-center justify-between text-sm my-4">
        <h1 className='font-medium'>User Media</h1>
        <button className='bg-transparent border-none text-blue-500'>See all</button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {mediaImg.length !== 0 &&
          mediaImg.map((img, index) => (
            <div key={index} className='relative w-full h-24'>
              <Image src={img.img!} className='object-cover rounded-md' alt='media' fill />
            </div>
          ))
        }
      </div>
      {mediaImg.length === 0 && <><h1 className='text-sm'>No media found</h1></>}
    </div>
  )
}

export default UserMediaCard