"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='md:hidden flex flex-col gap-[4px] cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className={`w-6 h-1 rounded-md bg-blue-600 ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-200`} />
                <div className={`w-6 h-1 rounded-md bg-blue-600 ${isOpen ? "opacity-0" : ""}`} />
                <div className={`w-6 h-1 rounded-md bg-blue-600 ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-200`} />
            </div>
            {isOpen && <div className='absolute left-0 top-24 bg-white w-full flex flex-col text-xl font-medium items-center justify-center gap-5  h-[calc(100vh - 96px)] z-10'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Friends</Link>
                <Link href={"/"}>Groups</Link>
                <Link href={"/"}>Stories</Link>
                <Link href={"/"}>Login</Link>
            </div>}
        </>
    )
}

export default MobileMenu