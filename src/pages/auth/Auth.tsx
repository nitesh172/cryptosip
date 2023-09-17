import { images } from 'assets'
import { useLocation, useNavigate } from 'react-router'
import { ForgotPassword, LoginForm, SignupForm } from 'components'
import { useAppSelector } from 'hooks/redux'
import { useEffect } from 'react'

const Auth = () => {
  const location = useLocation()

  const navigate = useNavigate()

  const { isAuthenticate, currentUser } = useAppSelector((state) => state.userReducer)

  const sucessRedirectUrl = location.state?.from?.path ?? '/'

  useEffect(() => {
    if (isAuthenticate !== null && !!isAuthenticate && currentUser?.uid) {
      navigate(sucessRedirectUrl, { replace: true })
    }
  },[isAuthenticate, currentUser])

  let Component = LoginForm

  switch (location.pathname) {
    case '/login':
      Component = LoginForm
      break
    case '/signup':
      Component = SignupForm
      break
    case '/forgot-password':
      Component = ForgotPassword
      break
    default:
      break
  }

  if(isAuthenticate === null || !!isAuthenticate) return <></>

  return (
    <div className='h-screen w-screen flex flex-row overflow-hidden'>
      <div className='hidden lg:flex lg:w-[45%] xl:w-1/2 p-10 bg-[#F2F4F8] flex-col justify-between'>
        <img
          src={images.Logo}
          alt=''
          className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer'
          onClick={() => navigate('/')}
        />
        <div className='flex flex-col gap-6'>
          <div className='text-lg lg:text-3xl font-semibold'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className='text-base text-gray-500'>
            Our regiteration process is quick and easy, taking no more than 10 minutes to complete
          </div>
        </div>
        <div>
          <div className='w-full h-56 border'>{/* Testmonials */}</div>
        </div>
      </div>
      <Component />
    </div>
  )
}

export default Auth
