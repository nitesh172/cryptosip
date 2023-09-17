import { images } from 'assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiAdminLine, RiMenu3Line } from 'react-icons/ri'
import { useScrollDirection } from 'hooks/useScrollDirection'
import TextButton from 'components/Buttons/TextButton'
import IconButton from 'components/Buttons/IconButton'
import Button from 'components/Buttons/Button'
import { useAppSelector } from 'hooks/redux'
import { NavbarProps, UserRole } from 'types'
import { IoLogOutOutline } from 'react-icons/io5'
import { BsPerson } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'
import { logoutUser } from 'utils/firebase/functions'
import BlogsMenu from 'components/Blocks/navbar/BlogsMenu'
import ResourcesMenu from 'components/Blocks/navbar/ResourcesMenu'
import { NavMenuList } from 'utils/config/ui'

const Navbar: React.FC<NavbarProps> = (props) => {
  const { toggleSidebar } = props

  const navigate = useNavigate()

  const { isAuthenticate, currentUser, userDetails } = useAppSelector((state) => state.userReducer)

  const scrollDirection = useScrollDirection()

  const handleLogout = async () => {
    await logoutUser()
  }

  return (
    <div
      className={`px-6 py-3 md:py-3 w-full sm:px-12 md:px-12 sticky z-40 bg-[#FAF9FA] flex flex-row items-center justify-between transition-all duration-500 ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      } `}
    >
      <div className='flex flex-row gap-8'>
        <img
          src={images.Logo}
          alt='log'
          onClick={() => navigate('/')}
          className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer z-20'
        />
        <div className='hidden lg:flex flex-row gap-8 items-center'>
          {NavMenuList.map((menu) => {
            return (
              <div
                key={menu.id}
                onClick={() => !menu.submenu && navigate(menu.navigate)}
                className={`flex flex-col overflow-hidden gap-0.5 peer/${menu.name}`}
              >
                <TextButton
                  className='text-base'
                  text={menu.name}
                  Icon={menu.submenu && <HiChevronDown />}
                  iconPosition='right'
                />
              </div>
            )
          })}
          <BlogsMenu />
          <ResourcesMenu />
        </div>
      </div>
      {isAuthenticate !== null ? (
        !isAuthenticate ? (
          <div className='hidden lg:flex flex-row gap-4'>
            <NavLink to='/login'>
              <Button text='Login' className='border-transparent hover:border-gray-200' />
            </NavLink>
            <NavLink to='/signup'>
              <Button
                text='Signup'
                className='bg-black text-white border-black hover:border-black'
              />
            </NavLink>
          </div>
        ) : (
          <div className='bg-black hidden lg:flex group/profile relative w-10 h-10 text-center items-center justify-center'>
            <div className='text-white capitalize'>
              {currentUser?.displayName && currentUser?.displayName[0]}
            </div>
            <div className='absolute top-10 flex-col items-start bg-white backdrop-blur-3xl border right-0 hidden group-hover/profile:flex'>
              <div className='p-2.5 flex flex-col items-start'>
                <div className='text-sm'>{currentUser?.displayName}</div>
                <div className='text-xs'>{currentUser?.email}</div>
              </div>
              <TextButton
                text='Profile'
                className='hover:bg-gray-100 p-2.5 w-full self-start text-start'
                Icon={<BsPerson size={22} />}
                onClick={() => navigate('/profile')}
              />
              {userDetails?.userRole === UserRole.ADMIN && (
                <TextButton
                  text='Admin panel'
                  className='hover:bg-gray-100 p-2.5 w-full self-start text-start'
                  Icon={<RiAdminLine size={22} />}
                  onClick={() => navigate('/admin')}
                />
              )}
              <TextButton
                text='Signout'
                className='hover:bg-gray-100 p-2.5 w-full self-start text-start'
                Icon={<IoLogOutOutline size={22} />}
                onClick={handleLogout}
              />
            </div>
          </div>
        )
      ) : null}
      <IconButton
        className='text-[16px] lg:hidden cursor-pointer'
        Icon={<RiMenu3Line size={24} />}
        onClick={toggleSidebar}
      />
    </div>
  )
}

export default Navbar
