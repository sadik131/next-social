import { User } from '@prisma/client'
import React from 'react'
import CommentList from './CommentList'
import prisma from '@/lip/client'

async function Comment({ postId, user }: { postId: string, user: User }) {

    const comments = await prisma.comment.findMany({
        where: { postId: postId },
        include: { User: true }
    })
   
    return (
        <div className='my-5'>
            <CommentList postId={postId} user={user} comments={comments} />
        </div>
    )
}

export default Comment