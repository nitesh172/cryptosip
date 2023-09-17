import { AccountTab, AirdropTab, NotificationTab, SecurityTab } from 'components'
import { useAppSelector } from 'hooks/redux'
import { scrollToView } from 'hooks/scrollToView'
import { useRef } from 'react'
import { GoVerified } from 'react-icons/go'
import { CiUser } from 'react-icons/ci'
import { TbAirBalloon } from 'react-icons/tb'
import { GrShieldSecurity } from 'react-icons/gr'
import { BiNotification } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  const accountRef = useRef<any>()
  const airdropsRef = useRef<any>()
  const securityRef = useRef<any>()
  const notificationRef = useRef<any>()
  const { tab } = useParams()
  const navigate = useNavigate()

  const { currentUser } = useAppSelector((state) => state.userReducer)

  const AccountInformationFields = [
    { name: 'Account Info', ref: accountRef, Icon: CiUser, navigate: '/profile/account' },
    { name: 'My Airdrops', ref: airdropsRef, Icon: TbAirBalloon, navigate: '/profile/airdrops' },
    {
      name: 'Password & Security',
      ref: securityRef,
      Icon: GrShieldSecurity,
      navigate: '/profile/security',
    },
    {
      name: 'Notifications',
      ref: notificationRef,
      Icon: BiNotification,
      navigate: '/profile/notification',
    },
  ]

  const renderTab = () => {
    switch (tab) {
      case 'account':
        return <AccountTab accountRef={accountRef} />
      case 'airdrops':
        return <AirdropTab airdropRef={airdropsRef} />
      case 'security':
        return <SecurityTab securityRef={securityRef} />
      case 'notification':
        return <NotificationTab notificationRef={notificationRef} />
      default:
        return <AccountTab accountRef={accountRef} />
    }
  }

  return (
    <div className='px-4 md:px-12 lg:px-20 py-8 md:py-14 flex flex-col gap-12'>
      <div className='flex flex-row items-center gap-2'>
        <div className=' bg-black text-white w-12 aspect-square text-2xl flex flex-row items-center justify-center'>
          <div className='capitalize'>
            {!!currentUser && !!currentUser.displayName && currentUser.displayName[0]}
          </div>
        </div>
        <div className='flex flex-col '>
          <div className='flex flex-row items-center gap-2'>
            <div className='text-base'>{currentUser?.displayName}</div>
            <GoVerified />
          </div>
          <div className='text-sm'>{currentUser?.email}</div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-[35%] lg:w-[25%] flex flex-col'>
          {AccountInformationFields.map(({ Icon, ...field }, index: number) => {
            return (
              <div
                key={index}
                className={`p-2 cursor-pointer hover:bg-gray-100 border-l-2 flex flex-row gap-2 items-center ${
                  `/profile/${tab}` === field.navigate ? 'border-black' : 'border-transparent'
                }`}
                onTouchEnd={() => {
                  navigate(field.navigate)
                  setTimeout(() => {
                    scrollToView(field.ref)
                  }, 100)
                }}
                onClick={() => navigate(field.navigate)}
              >
                {Icon && <Icon />}
                {field.name}
              </div>
            )
          })}
        </div>
        {renderTab()}
      </div>
    </div>
  )
}

export default Profile
