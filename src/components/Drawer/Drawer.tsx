import React from 'react'
import { DrawerProps, UserRole } from 'types'
import IconButton from 'components/Buttons/IconButton'
import TextButton from 'components/Buttons/TextButton'
import { NavLink, useNavigate } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import Button from 'components/Buttons/Button'
import { useAppSelector } from 'hooks/redux'
import { images } from 'assets'
import { BiFlag, BiFolder, BiMessageSquare, BiRightArrowAlt, BiVideo } from 'react-icons/bi'
import { FiLifeBuoy, FiUsers } from 'react-icons/fi'
import { IoLogOutOutline } from 'react-icons/io5'
import Accordion from 'components/Accordian/Accordion'
import { logoutUser } from 'utils/firebase/functions'
import { ResourcesSubMenu } from 'utils/config/ui'

const Drawer: React.FC<DrawerProps> = (props) => {
  const { handleDrawer, openDrawer } = props

  const navigate = useNavigate()

  const { isAuthenticate, currentUser, userDetails } = useAppSelector((state) => state.userReducer)

  const handleLogout = async () => {
    await handleDrawer()
    await logoutUser()
  }

  return (
    <div
      className={`lg:hidden top-0 right-0 bottom-0 w-full bg-white fixed h-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] z-50 transition-all ease-in-out duration-500 ${
        openDrawer ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex flex-col gap-7 md:gap-10 px-6 flex-1 relative overflow-y-auto'>
        <div className='flex felx-row items-center justify-between pt-5'>
          <img
            src={images.Logo}
            alt=''
            className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer'
          />
          <IconButton Icon={<GrClose size={18} />} onClick={handleDrawer} />
        </div>
        {isAuthenticate ? (
          <div className='flex flex-col gap-4'>
            <div className='w-full h-14 flex flex-row items-center justify-between'>
              <div className='flex flex-row gap-3 items-start'>
                <div className='w-12 h-12 object-cover bg-black text-white text-2xl flex justify-center items-center'>
                  {!!currentUser && !!currentUser.displayName && currentUser?.displayName[0]}
                </div>
                <div>
                  <div className='text-lg font-semibold'>{currentUser?.displayName}</div>
                  <div className='text-xs'>{currentUser?.email}</div>
                </div>
              </div>
              <IconButton Icon={<IoLogOutOutline size={22} />} onClick={handleLogout} />
            </div>
            {userDetails?.userRole === UserRole.ADMIN && (
              <Button
                text='Admin Dashboard'
                Icon={<BiRightArrowAlt />}
                onClick={() => navigate('/admin')}
              />
            )}
          </div>
        ) : (
          <div className='flex flex-row w-full gap-3 md:gap-4'>
            <NavLink to='/signup' className='flex-1'>
              <Button
                text='Signup'
                onClick={() => handleDrawer()}
                className='bg-black text-white w-full border-black hover:border-black'
              />
            </NavLink>
            <NavLink to='/login' className='flex-1'>
              <Button
                text='Login'
                className='border-gray-400 w-full'
                onClick={() => handleDrawer()}
              />
            </NavLink>
          </div>
        )}
        <NavLink to='/'>
          <TextButton className='font-medium' text='Home' onClick={() => handleDrawer()} />
        </NavLink>
        {isAuthenticate && (
          <NavLink to='/profile'>
            <TextButton className='font-medium' text='Profile' onClick={() => handleDrawer()} />
          </NavLink>
        )}
        <NavLink to='/airdrops'>
          <TextButton className='font-medium' text='Airdrops' onClick={() => handleDrawer()} />
        </NavLink>
        <Accordion title='Resources'>
          <div className='flex flex-col gap-6 py-6'>
            {ResourcesSubMenu.map((subMenu) => {
              return (
                <NavLink
                  key={subMenu.id}
                  className='flex flex-row gap-4 items-start'
                  to={subMenu.navigate}
                >
                  <div className='p-3 border rounded-xl'>
                    {subMenu.name === 'About us' ? (
                      <BiFlag size={20} />
                    ) : subMenu.name === 'Press' ? (
                      <BiMessageSquare size={20} />
                    ) : subMenu.name === 'Carrers' ? (
                      <FiUsers size={20} />
                    ) : subMenu.name === 'Legal' ? (
                      <BiFolder size={20} />
                    ) : subMenu.name === 'Video tutorials' ? (
                      <BiVideo size={20} />
                    ) : (
                      <FiLifeBuoy size={20} />
                    )}
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='text-base font-medium'>{subMenu.name}</div>
                    <div className='text-sm'>{subMenu.description}</div>
                  </div>
                </NavLink>
              )
            })}
          </div>
        </Accordion>
        <Accordion title='Blogs'>
          <div className='flex flex-col py-2 gap-5'>
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div key={item} className='p-2 flex flex-col gap-6 w-full'>
                  <img
                    src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Graphic_Designer_Salary_in_Canada.jpg'
                    className='w-full aspect-video cursor-pointer'
                    alt=''
                  />
                  <div className='flex flex-col'>
                    <div className='font-semibold text-base'>Auto-layout explained</div>
                    <div className='text-sm'>
                      Jump right in — get an overview of the basics and...
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Accordion>
        <div className='py-1 mb-8'>
          <img
            src='https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            className='w-full h-auto aspect-video mb-3'
            alt=''
          />
          <div className='text-base font-semibold mb-1 mx-1'>We've just released an update!</div>
          <div className='text-sm mx-1'>
            Check out the all new dashboard view. Pages and exports now load faster.{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
