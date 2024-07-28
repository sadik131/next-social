import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'

function UserMediaCard({data}:{data:User}) {
  return (
    <div className='cardContainer'>
      <div className="flex items-center justify-between text-sm my-4">
        <h1>User Media</h1>
        <button className='bg-transparent border-none text-blue-500'>See all</button>
      </div>
      <div className="flex flex-wrap gap-2">
        <div className='relative w-1/5 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww" className='object-cover rounded-md' alt='media' fill />
        </div>
      </div>
    </div>
  )
}

export default UserMediaCard