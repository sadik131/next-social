import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

function UserCardInfo({ data }: { data: User }) {
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
        <button className='bg-transparent border-none text-blue-500'>See all</button>
      </div>
      <div className='flex items-center gap-5'>
        <h1 className='text-gray-500'>
          {data.name && data.surname ? `${data.name} " "${data.surname} ` : data.username}
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
      <button className='bg-blue-500 py-1 text-white rounded-md'>Following</button>
      <button className='bg-transparent self-end text-sm border-none text-red-500'>Block User</button>

    </div>
  )
}

export default UserCardInfo