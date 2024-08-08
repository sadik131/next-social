import React, { Suspense } from 'react'
import Birthday from './Birthday'
import Ads from './Ads'
import UserMediaCard from './UserMediaCard'
import UserCardInfo from './UserCardInfo'
import prisma from '@/lip/client'
import Friends from './Friends'

async function RightMenu({ userId, currentId }: { userId?: string, currentId: string }) {
  console.log(currentId,"shimu")

  const data = await prisma.user.findFirst({
    where: { id: userId }
  })
  
  if (!data) return null

  return (
    <div className='flex flex-col gap-6 '>
      {userId ? <>
        <Suspense fallback={"loading..."}>
          <UserCardInfo data={data} />
        </Suspense>
        <Suspense fallback={"loading..."}>
          <UserMediaCard data={data} />
        </Suspense>
        {currentId === userId && <Friends userId={currentId} />}
      </> :
        <>
          <Friends userId={currentId} />
          <Birthday />
          <Ads size='md' />
        </>}

    </div>
  )
}

export default RightMenu