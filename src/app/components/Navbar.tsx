import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function Navbar() {
    return (
        <>
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
                    <ClerkLoading>
                        Loading
                    </ClerkLoading>
                    <ClerkLoaded>
                        <SignedIn>
                            {/* SignedIn */}
                            <div className='flex gap-2 items-center'>
                                <div className='cursor-pointer'>
                                    <Image src="/people.png" alt='people' height={20} width={20} />
                                </div>
                                <div className='cursor-pointer'>
                                    <Image src="/messages.png" alt='message' height={20} width={20} />
                                </div>
                                <div className='cursor-pointer'>
                                    <Image src="/notifications.png" alt='notification' height={20} width={20} />
                                </div>
                                <UserButton />
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <div className="flex items-center gap-2">
                                <Image src="/noAvatar.png" alt='login' height={20} width={20} />
                                <Link href="/sign-in">Login/Register</Link>
                            </div>
                        </SignedOut>
                    </ClerkLoaded>
                    <MobileMenu />
                </div>
            </div>
        </>
    )
}

export default Navbar