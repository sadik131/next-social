"use client"

import { handelComment } from "@/lip/action"
import { Comment, User } from "@prisma/client"
import Image from "next/image"
import { useOptimistic, useState } from "react"

type commentList = Comment & { User: User | null }

function CommentList({ postId, user, comments }: { postId: string, user: User, comments: commentList[] }) {
    const [comment, setComment] = useState(comments)
    const [des, setDes] = useState("")

    const submitComment = async () => {
        setOptimastic({
            id: "dfsd",
            des, createdAt: new Date(),
            updatedAt: new Date(),
            userId: user.id,
            postId: postId,
            User: {
                id: user.id,
                clerkId: user.clerkId,
                email: user.email,
                username: "Sending Please Wait...",
                avatar: user.avatar || "/noAvatar.png",
                cover: "",
                description: "",
                name: "",
                surname: "",
                city: "",
                work: "",
                school: "",
                website: "",
                updatedAt: new Date(),
                createdAt: new Date()
            },
        }
        )
        try {
            const createComment = await handelComment({ postId, des, userId: user.id })
            if (createComment) {
                setComment((prev) => [...prev, createComment]);
            }
        } catch (error) {
            console.log(error)
        }
    }
    const [optimastic, setOptimastic] = useOptimistic(comment, (state, value: commentList) => {
        if(value){
           return [value, ...state]
        }
        else{
            return state
        }
    })
    return (
        <div>
            {user && <div className="flex my-5">
                <Image src={user.avatar || "/noAvatar.png"} alt='user' height={40} width={40} className='h-10 w-10 mr-2 rounded-full' />
                <form action={submitComment} className='flex flex-1 justify-between items-center px-2 bg-slate-200 rounded-md'>
                    <div className='flex items-center gap-4'>
                        <input onChange={(e) => setDes(e.target.value)} type="text" placeholder='Write a comment' className='bg-transparent outline-none' />
                    </div>
                    <Image src={"/emoji.png"} alt='user' height={20} width={20} className='h-5 w-5' />
                </form>
            </div>}
            <div>
                {optimastic && optimastic.map(list => (
                    <div key={list.id} className="my-4">
                        <div className="flex items-center justify-between">
                            <div className='flex gap-2 items-center'>
                                <Image src={list.User?.avatar || "/noAvatar.png"} alt='user' height={32} width={32} className='h-8 w-8 rounded-full' />
                                <p className='font-semibold text-sm'>{list.User?.name && list.User?.surname ? list.User?.name + " " + list.User?.surname : list.User?.username}</p>
                            </div>
                            <Image src={"/more.png"} alt='more' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                        </div>
                        <p className='text-sm my-2'>{list.des}</p>
                        <div className='flex items-center text-sm gap-x-2 text-gray-600'>
                            <div className='flex items-center bg-slate-100 px-4 py-2 rounded-lg '>
                                <Image src="/like.png" alt='like' height={20} width={20} className='h-5 w-5 cursor-pointer' />
                                <span className='mx-2'> | </span>
                                <span>0<span className='hidden md:inline-block'>Likes</span></span>
                            </div>
                            <p>Reply</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentList