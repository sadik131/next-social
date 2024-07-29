"use server"
import prisma from "./client";

export async function handleFollowToggle(userId: string, currentId: string) {
    try {
        // check if the user already follow
        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentId,
                followingId: userId
            }
        })
        // console.log(existingFollow, "chek the user")
        // if follow so unflow 
        if (existingFollow) {
            await prisma.follower.delete({
                where: { id: existingFollow.id }
            })
        } else {
            // now cheack if the user already follow
            const existingFollowReq = await prisma.followRequest.findFirst({
                where: {
                    receiverId: userId,
                    senderId: currentId
                }
            })
            console.log(existingFollowReq, "cheack the flowing request send")
            // if he follow then unflow the user
            if (existingFollowReq) {
                await prisma.followRequest.delete({
                    where: { id: existingFollowReq.id }
                })
            } else {
                // if he doesn't flow him so make a flowing request
                await prisma.followRequest.create({
                    data: {
                        receiverId: userId,
                        senderId: currentId
                    }
                })
            }
        }
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
    }
}

export async function handleBlockToggle(userId: string, currentId: string) {
    try {
        const existingBlock = await prisma.block.findFirst({
            where: {
                blockerId: currentId,
                blockedId: userId
            }
        })

        if (existingBlock) {
            await prisma.block.delete({
                where: { id: existingBlock.id }
            })
        } else {
            await prisma.block.create({
                data: {
                    blockerId: currentId,
                    blockedId: userId
                }
            })
        }
    } catch (error) {
        console.log(error)
        throw new Error("something went wrong")
    }
}

export async function handleFriendReq(userId: string, currentId: string) {
    try {
        console.log(userId, currentId)
        const existFriend = await prisma.followRequest.findFirst({
            where: {
                receiverId: currentId,
                senderId: userId
            }
        })
        if (existFriend) {
            await prisma.followRequest.delete({
                where: { id: existFriend.id }
            })

            await prisma.follower.create({
                data: {
                    followerId: currentId,
                    followingId: userId
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}
export async function handleFriendReqCencle(userId: string, currentId: string) {
    try {
        const existFriend = await prisma.followRequest.findFirst({
            where: {
                receiverId: currentId,
                senderId: userId
            }
        })
        console.log(existFriend)
        if (existFriend) {
            await prisma.followRequest.delete({
                where: { id: existFriend.id }
            })
        }
    } catch (error) {
        console.log(error)
    }
}

