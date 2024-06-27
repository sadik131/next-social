import AddPost from "@/app/components/AddPost"
import Feeds from "@/app/components/Feeds"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import Stories from "@/app/components/Stories"


const Profile = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu /></div>
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <Stories />
        <AddPost />
        <Feeds />
      </div>
      <div className="hidden lg:block w-[30%]"><RightMenu userId="asupto" /></div>
    </div>
  )
}

export default Profile