"use client"
import { handelUpdate } from '@/lip/action'
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import React, { useState } from 'react'

function UpdateInfo({ data }: { data: User }) {

  const [open, setOpen] = useState(false)
  const [cover, setCover] = useState<any>()
  

  return (
    <div>
      <span className='text-blue-500 text-sm cursor-pointer' onClick={() => setOpen(true)}>update</span>
      {open && (
        <div className='flex items-center justify-center w-full h-screen absolute top-0 left-0 z-10'>
          <div className='fixed w-full h-full bg-black opacity-45'></div>
          <form action={(formData) => handelUpdate(formData, cover?.secure_url || "")} className='relative bg-white md:w-1/2 xl:w-1/3 p-4 z-20'>
            <div className='flex items-center justify-between mt-2 font-medium'>
              <h1>Update Profile</h1>
              <span className='cursor-pointer' onClick={() => setOpen(false)} >X</span>
            </div>
            <p className='text-sm my-4 text text-gray-500'>Use the navbar profile to change the avatar or username</p>
            {/* COVER */}
            <CldUploadWidget uploadPreset="socelMedia" onSuccess={(result) => setCover(result?.info)}>
              {({ open }) => {
                return (
                  <div className='flex flex-col gap-4 cursor-pointer' onClick={() => open()}>
                    <label className='font-medium'>Cover Picture</label>
                    <div className='flex gap-1 items-center'>
                      <Image src={cover?.secure_url || data.cover || "/noCover.jpg"} className='h-8 w-12 rounded-md' alt='cover' height={48} width={32} />
                      <span className='text-sm underline'>Change</span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>
            <div className='flex gap-2 flex-wrap mt-4'>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>First Name</label>
                <input className='ring text-xs  ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.name || "Sadik"} type="text" name='name' />
              </div>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>Surname</label>
                <input className='ring text-xs ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.surname || "Supto"} type="text" name='surname' />
              </div>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>Description</label>
                <input className='ring text-xs ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.description || "Write about your self"} type="text" name='description' />
              </div>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>City</label>
                <input className='ring text-xs ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.city || "Bangladesh"} type="text" name='city' />
              </div>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>School</label>
                <input className='ring text-xs ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.school || "GGI"} type="text" name='school' />
              </div>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>Work</label>
                <input className='ring text-xs ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.work || "apple"} type="text" name='work' />
              </div>
              {/* INPUT */}
              <div className="flex w-[45%] flex-col gap-2">
                <label className='text-xs text-gray-400'>WebSite</label>
                <input className='ring text-xs ring-gray-300 p-3 rounded-md placeholder:text-gray-300' placeholder={data.website || "www.google.com"} type="text" name='web' />
              </div>
            </div>
            <button className='bg-blue-500 text-white w-full py-2 my-2 rounded-md'>Update</button>
          </form>
        </div>

      )}
    </div>
  )
}

export default UpdateInfo