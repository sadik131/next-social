import React from 'react'
import Friends from './Friends'
import Birthday from './Birthday'
import Ads from './Ads'
import UserMediaCard from './UserMediaCard'
import UserCardInfo from './UserCardInfo'

function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className='flex flex-col gap-6 '>
      {userId ? <>
        <UserCardInfo />
        <UserMediaCard />
        <Friends />
      </> :
        <>
          <Friends />
          <Birthday />
          <Ads size='md'/>
        </>}

    </div>
  )
}

export default RightMenu