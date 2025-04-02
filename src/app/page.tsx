import Feeds from "./components/Feeds"
import AddPost from "./components/AddPost"
import Stories from "./components/Stories"
import LeftMenu from "./components/LeftMenu"
import RightMenu from "./components/RightMenu"
import { auth } from "@clerk/nextjs/server"
import prisma from "@/lip/client"

const Homepage = async () => {

  const { userId } = auth()

  let user;
  if (userId) {
    user = await prisma.user.findFirst({
      where: { clerkId: userId }
    })
  }

  if (!user) {
    return null
  }

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 flex gap-6 pt-6'>
      <div className="w-[20%]">
        <div className="hidden xl:block "><LeftMenu /></div>
      </div>
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <Stories />
        <AddPost user={user} />
        <Feeds />
      </div>
      <div className="hidden lg:block w-[30%]"><RightMenu currentId={user.id} /></div>
    </div>
  )
}

export default Homepage