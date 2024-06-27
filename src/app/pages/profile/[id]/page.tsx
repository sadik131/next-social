import Feeds from "@/app/components/Feeds"
import LeftMenu from "@/app/components/LeftMenu"
import RightMenu from "@/app/components/RightMenu"
import UserProfile from "@/app/components/UserProfile"


const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu /></div>
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <UserProfile />
        <Feeds />
      </div>
      <div className="hidden lg:block w-[30%]"><RightMenu userId="asupto" /></div>
    </div>
  )
}

export default ProfilePage