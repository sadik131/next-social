import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

function Navbar() {
    return (
        <div className='flex items-center justify-between h-24'>
            <div className='md:hidden lg:block'>
                <Link className='text-xl text-blue-600' href={"/"}>SupSocal</Link>
            </div>
            <div className='hidden md:flex gap-5'>
                <Link href={""} className='flex gap-x-1 text-gray-600 font-medium items-center justify-center'>
                    <Image src={"/home.png"} height={16} width={16} alt='home' />
                    <span>Home</span>
                </Link>
                <Link href={""} className='flex gap-x-1 text-gray-600 font-medium items-center justify-center'>
                    <Image src={"/friends.png"} height={16} width={16} alt='home' />
                    <span>Friends</span>
                </Link>
                <Link href={""} className='flex gap-x-1 text-gray-600 font-medium items-center justify-center'>
                    <Image src={"/stories.png"} height={16} width={16} alt='home' />
                    <span>Storys</span>
                </Link>
            </div>
            <div>
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar