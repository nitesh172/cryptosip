import React from "react"
import { DrawerProps, UserRole } from "types"
import IconButton from "components/Buttons/IconButton"
import TextButton from "components/Buttons/TextButton"
import { NavLink, useNavigate } from "react-router-dom"
import { GrClose } from "react-icons/gr"
import Button from "components/Buttons/Button"
import { useAppSelector } from "customHooks/redux"
import { images } from "assets"
import { BiFlag, BiFolder, BiMessageSquare, BiRightArrowAlt, BiVideo } from "react-icons/bi"
import { FiLifeBuoy, FiUsers } from "react-icons/fi"
import { IoLogOutOutline } from "react-icons/io5"
import Accordion from "components/Accordian/Accordion"
import { logoutUser } from "utils/firebase/functions"

const Drawer: React.FC<DrawerProps> = (props) => {
  const { handleDrawer, openDrawer } = props

  const { isAuthenticate, currentUser } = useAppSelector((state) => state.userReducer)

  const navigate = useNavigate()

  const handleLogout = async () => {
    await handleDrawer()
    await logoutUser()
  }

  return (
    <div
      className={`top-0 right-0 bottom-0 w-full bg-white fixed h-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] z-50 transition-all ease-in-out duration-500 ${
        openDrawer ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-6 px-6 flex-1 relative overflow-y-auto">
        <div className="flex felx-row items-center justify-between">
          <img src={images.Logo} alt="" className="w-14 h-14" />
          <IconButton Icon={<GrClose size={16} />} onClick={handleDrawer} />
        </div>
        {isAuthenticate ? (
          <div className="flex flex-col gap-4">
            <div className="w-full h-14 flex flex-row items-center justify-between">
              <div className="flex flex-row gap-3 items-start">
                <div className="w-12 h-12 rounded-2xl object-cover bg-[#0578FF] text-white text-2xl flex justify-center items-center">
                  {currentUser?.name[0]}
                </div>
                <div>
                  <div className="text-lg font-semibold">{currentUser?.name}</div>
                  <div className="text-xs">{currentUser?.email}</div>
                </div>
              </div>
              <IconButton Icon={<IoLogOutOutline size={22} />} onClick={handleLogout} />
            </div>
            {currentUser?.userRole === UserRole.ADMIN && (
              <Button text="Admin Dashboard" Icon={<BiRightArrowAlt />} onClick={() => navigate("/admin")} />
            )}
          </div>
        ) : (
          <div className="flex flex-row w-full gap-2">
            <NavLink to="/signup" className="flex-1">
              <Button
                text="Signup"
                onClick={() => handleDrawer()}
                className="bg-[#0578FF] text-white border-[#0578FF] hover:border-[#0578FF]"
              />
            </NavLink>
            <NavLink to="/login" className="flex-1">
              <Button text="Login" className="border-gray-400" onClick={() => handleDrawer()} />
            </NavLink>
          </div>
        )}
        <NavLink to="/">
          <TextButton className="font-medium" text="Home" onClick={() => handleDrawer()} />
        </NavLink>
        <Accordion title="Airdrops"></Accordion>
        <Accordion title="Blogs"></Accordion>
        <Accordion title="Company">
          <div className="flex flex-col gap-6 py-6">
            <NavLink className="flex flex-row gap-4 items-start" to="/">
              <div className="p-3 border rounded-xl">
                <BiFlag size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium">About us</div>
                <div className="text-sm">Learn about our story and our mission statement.</div>
              </div>
            </NavLink>
            <NavLink className="flex flex-row gap-4 items-start" to="/">
              <div className="p-3 border rounded-xl">
                <BiMessageSquare size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium">Press</div>
                <div className="text-sm">News and writings, press releases, and resources.</div>
              </div>
            </NavLink>
            <NavLink className="flex flex-row gap-4 items-start" to="/">
              <div className="p-3 border rounded-xl">
                <FiUsers size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium">Careers</div>
                <div className="text-sm">We’re always looking for talented people. Join us!</div>
              </div>
            </NavLink>
            <NavLink className="flex flex-row gap-4 items-start" to="/">
              <div className="p-3 border rounded-xl">
                <BiFolder size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium">Legal</div>
                <div className="text-sm">
                  All the boring stuff that we Dan from legal made us add.
                </div>
              </div>
            </NavLink>
          </div>
        </Accordion>
        <Accordion title="Support">
          <div className="flex flex-col gap-6 py-6">
            <NavLink className="flex flex-row gap-4 items-start" to="/">
              <div className="p-3 border rounded-xl">
                <BiVideo size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium">Video tutorials</div>
                <div className="text-sm">Get up and running on new features and techniques.</div>
              </div>
            </NavLink>
            <NavLink className="flex flex-row gap-4 items-start" to="/">
              <div className="p-3 border rounded-xl">
                <FiLifeBuoy size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-medium">Help and support</div>
                <div className="text-sm">
                  Learn, fix a problem, and get answers to your questions.
                </div>
              </div>
            </NavLink>
          </div>
        </Accordion>
        <div className="py-1 mb-8">
          <img
            src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="object-cover w-full h-40 rounded-lg mb-3"
            alt=""
          />
          <div className="text-base font-semibold mb-1 mx-1">We've just released an update!</div>
          <div className="text-sm mx-1">
            Check out the all new dashboard view. Pages and exports now load faster.{" "}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
