import Feeds from "./components/Feeds"
import AddPost from "./components/AddPost"
import Stories from "./components/Stories"
import LeftMenu from "./components/LeftMenu"
import RightMenu from "./components/RightMenu"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]"><LeftMenu /></div>
      <div className="w-full lg:w-[70%] xl:w-1/2">
        <Stories />
        <AddPost />
        <Feeds />
      </div>
      <div className="hidden lg:block w-[30]"><RightMenu /></div>
    </div>
  )
}

export default Homepage