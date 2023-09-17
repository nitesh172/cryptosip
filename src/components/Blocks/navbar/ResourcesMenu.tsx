import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { ResourcesSubMenu } from 'utils/config/ui'
import { BiFlag, BiFolder, BiMessageSquare, BiVideo } from 'react-icons/bi'
import { FiLifeBuoy, FiUsers } from 'react-icons/fi'

const ResourcesMenu = () => {
  const navRef = useRef<any>(null)

  const handleNavExit = () => {
    if (navRef && navRef.current) {
      navRef.current.classList.remove('hover:flex')
      setTimeout(() => {
        navRef.current.classList.add('hover:flex')
      }, 100)
    }
  }

  return (
    <div
      ref={navRef}
      className='flex-col gap-8 w-full transition-all ease-in-out duration-500 absolute bg-[#FAF9FA] shadow-md top-11 px-6 py-3 md:py-9 md:px-12 border-b left-0 peer-hover/Resources:flex hover:flex hidden'
    >
      <div className='flex flex-col'>
        <div className='text-base font-semibold'>Resources</div>
        <div className='text-sm text-gray-600'>Get started and learn more about our products.</div>
      </div>
      <div className='flex flex-row flex-wrap gap-y-8'>
        {ResourcesSubMenu.map((subMenu) => {
          return (
            <NavLink
              key={subMenu.id}
              className='flex flex-row gap-4 items-start w-1/3 lg:w-1/4'
              to={subMenu.navigate}
              onClick={handleNavExit}
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
    </div>
  )
}

export default ResourcesMenu
