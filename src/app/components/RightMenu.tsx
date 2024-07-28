import React from 'react'
import Friends from './Friends'
import Birthday from './Birthday'
import Ads from './Ads'
import UserMediaCard from './UserMediaCard'
import UserCardInfo from './UserCardInfo'
import prisma from '@/lip/client'

async function RightMenu({ userId }: { userId?: string }) {
  const data = await prisma.user.findFirst({
    where: { id: userId }
  })
  if (!data) return null
  return (
    <div className='flex flex-col gap-6 '>
      {userId ? <>
        <UserCardInfo data={data} />
        <UserMediaCard data={data} />
        {/* <Friends userId={data.id} /> */}
      </> :
        <>
          <Friends userId={data.id} />
          <Birthday />
          <Ads size='md' />
        </>}

    </div>
  )
}

export default RightMenu