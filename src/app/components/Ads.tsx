import Image from 'next/image'
import React from 'react'

function Ads({ size }: { size: "sm" | "md" }) {
  return (
    <div className='flex flex-col gap-y-5 cardContainer text-sm'>
      <h1>Sponsored Ads</h1>
      <div className={`relative ${size === "sm" ? "h-36" : "h-44"} w-full rounded-lg`}>
        <Image src={"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYWNlfGVufDB8fDB8fHww"} alt='ads' className='object-cover' fill sizes='(max-width: 768px) 100vw, 500px' 
        />
      </div>
      <div className='flex items-center gap-2'>
        <Image src={"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYWNlfGVufDB8fDB8fHww"} alt='ads' height={32} width={32} className='h-8 w-8 rounded-full' />
        <span className='text-blue-500'>BigChef Lounge</span>
      </div>

      <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
        {size === "sm"
          ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus."
          : size === "md"
            ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit architecto voluptas adipisci"
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit impedit architecto voluptas adipisci a molestias animi commodi quibusdam ad eaque dicta sunt aspernatur esse,"}
      </p>
      <button className='px-4 py-2 bg-gray-300 rounded-md text-gray-600'>Learn More</button>
    </div>
  )
}

export default Ads