"use client"
import { handleBlockToggle, handleFollowToggle } from "@/lip/action"
import { useOptimistic, useState } from "react"

async function UserIntraction({ userId, follwerUser, follwingUserReq, currentUserId, blockUser }:
    { userId: string, follwerUser: boolean, follwingUserReq: boolean, currentUserId: string, blockUser: boolean }) {

    const [userState, setUserState] = useState({
        following: follwerUser,
        block: blockUser,
        followingReq: follwingUserReq
    })

    const followToggle = async () => {
        setOptimisticState("follow")
        try {
            await handleFollowToggle(userId, currentUserId)
            setUserState(prv => ({
                ...prv,
                following: prv.following && false,
                followingReq: !prv.following && !prv.followingReq ? true : false
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const blockToggle = async () => {
        setOptimisticState("block")
        try {
            await handleBlockToggle(userId, currentUserId)
            setUserState((prv) => ({
                ...prv,
                block: !prv.block
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const [useOptimisticState, setOptimisticState] = useOptimistic(userState, (state, value: "follow" | "block") => (
        value === "follow" ? {
            ...state,
            following: state.following && false,
            followingReq: !state.following && !state.followingReq ? true : false
        } : {
            ...state,
            block: !state.block
        }
    ))

    return (
        <>
            <form action={followToggle}>
                <button className='bg-blue-500 py-1 w-full text-white rounded-md'>{useOptimisticState.following ? "Unfollow" : useOptimisticState.followingReq ? "Follow Req Send" : "Follow"}</button>
            </form>
            <form action={blockToggle}>
                <button className='bg-transparent self-end text-sm border-none text-red-500'>{useOptimisticState.block ? "UnBlock User" : "Block User"}</button>
            </form>
        </>
    )
}

export default UserIntraction