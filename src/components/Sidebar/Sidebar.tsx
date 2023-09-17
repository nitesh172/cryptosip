import { useAppSelector } from "hooks/redux"
import { useNavigate } from "react-router-dom"
import { SidebarProps } from "types"
import { logoutUser } from "utils/firebase/functions"

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { handleSidebar, openSidebar } = props

  const navigate = useNavigate()

  const { isAuthenticate, currentUser, userDetails } = useAppSelector((state) => state.userReducer)

  const handleLogout = async () => {
    await handleSidebar()
    await logoutUser()
  }

  return (
    <div
      className={`hidden top-0 right-0 bottom-0 w-1/2 bg-black fixed h-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] z-50 transition-all ease-in-out duration-500 ${
        openSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex flex-col gap-7 md:gap-10 px-6 flex-1 relative overflow-y-auto'></div>
    </div>
  )
}

export default Sidebar
