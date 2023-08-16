import { images } from "assets"
import { NavLink } from "react-router-dom"
import { BiMenuAltRight } from "react-icons/bi"
import { useScrollDirection } from "customHooks/useScrollDirection"
import TextButton from "components/Buttons/TextButton"
import IconButton from "components/Buttons/IconButton"
import Button from "components/Buttons/Button"
import { useAppSelector } from "customHooks/redux"
import { NavbarProps } from "types"

const Navbar: React.FC<NavbarProps> = (props) => {
  const { toggleSidebar } = props

  const { isAuthenticate } = useAppSelector((state) => state.userReducer)

  const scrollDirection = useScrollDirection()

  return (
    <div
      className={`px-6 w-full sm:px-12 md:px-14 sticky z-40 bg-[#E2E6EE] backdrop-blur-lg flex flex-row items-center justify-between transition-all duration-500 ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } `}
    >
      <div className="flex flex-row gap-12">
        <img src={images.Logo} alt="log" className="h-14 sm:h-16 md:h-20 lg:h-22 w-fit" />
        <div className="hidden sm:flex flex-row gap-8 items-center">
          <NavLink to="/" className="group/Navlink flex flex-col overflow-hidden gap-0.5">
            <TextButton className="text-lg" text="Airdrops" />
            <div className="w-full -translate-x-full group-hover/Navlink:translate-x-0 border-b-2 border-purple-500 transition-all duration-500" />
          </NavLink>
          <NavLink to="/about" className="group/Navlink flex flex-col overflow-hidden gap-0.5">
            <TextButton className="text-lg" text="Company" />
            <div className="w-full -translate-x-full group-hover/Navlink:translate-x-0 border-b-2 border-purple-500 transition-all duration-500" />
          </NavLink>
          <NavLink to="/contact" className="group/Navlink flex flex-col overflow-hidden gap-0.5">
            <TextButton className="text-lg" text="Blogs" />
            <div className="w-full -translate-x-full group-hover/Navlink:translate-x-0 border-b-2 border-purple-500 transition-all duration-500" />
          </NavLink>
        </div>
      </div>
      {isAuthenticate !== null && !isAuthenticate && (
        <div className="hidden sm:flex flex-row gap-4">
          <NavLink to="/login">
            <Button text="Login" className="border-none" />
          </NavLink>
          <NavLink to="/signup">
            <Button
              text="Signup"
              className="bg-[#0578FF] text-white border-[#0578FF] hover:border-[#0578FF]"
            />
          </NavLink>
        </div>
      )}
      <div className="sm:hidden bg-[#0578FF] p-1 rounded-lg">
        <IconButton
          className="text-[16px text-white"
          Icon={<BiMenuAltRight size={24} />}
          onClick={toggleSidebar}
        />
      </div>
    </div>
  )
}

export default Navbar
