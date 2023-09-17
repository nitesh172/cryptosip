import TextButton from 'components/Buttons/TextButton'
import { IoArrowForward } from 'react-icons/io5'
import { useRef } from 'react'

const BlogsMenu = () => {
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
    <div ref={navRef} className='flex-col gap-8 w-full absolute bg-[#FAF9FA] shadow-md top-11 px-6 py-3 md:py-5 md:px-12 border-b left-0 peer-hover/Blogs:flex hover:flex hidden'>
      <div className='flex flex-row flex-wrap w-full'>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div key={item} className='p-5 flex flex-row gap-6 md:w-1/2 lg:w-1/3'>
              <img
                src='https://www.simplilearn.com/ice9/free_resources_article_thumb/Graphic_Designer_Salary_in_Canada.jpg'
                className='w-36 aspect-video cursor-pointer'
                alt=''
                onClick={handleNavExit}
              />
              <div className='flex flex-col'>
                <div className='font-semibold text-base'>Auto-layout explained</div>
                <div className='text-sm'>Jump right in — get an overview of the basics and...</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex flex-row items-center justify-center'>
        <TextButton text='View all blogs' iconPosition='right' Icon={<IoArrowForward />} />
      </div>
    </div>
  )
}

export default BlogsMenu
