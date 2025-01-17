import AddPost from "@/app/components/AddPost"
import Feeds from "@/app/components/Feeds"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import UserProfile from "@/app/components/UserProfile"
import prisma from "@/lip/client"
import { auth } from "@clerk/nextjs/server"


const Profile = async () => {
  const { userId } = auth()

  if (!userId) return null

  const data = await prisma.user.findFirst({
    where: { clerkId: userId },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          following: true
        }
      }
    },
  })

  if (!data) return null
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu /></div>
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <UserProfile post={data._count.posts} followers={data._count.followers} following={data._count.following} data={data} />
        <AddPost user={data}/>
        <Feeds />
      </div>
      <div className="hidden lg:block w-[30%]"><RightMenu userId={data.id} /></div>
    </div>
  )
}

export default Profile