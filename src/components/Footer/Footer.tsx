import { images } from 'assets'
import IconButton from 'components/Buttons/IconButton'
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { FooterMenu } from 'utils/config/ui'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className='mx-6 md:mx-16 lg:mx-20 xl:mx-24'>
      <div className='border-y px-1 md:px-6 flex flex-col lg:flex-row gap-10 md:gap-12 py-14 lg:justify-between items-start'>
        <div className='flex flex-row w-full lg:w-0 justify-between lg:justify-normal lg:gap-16'>
          {FooterMenu.map((menuList, inx) => {
            return (
              <div key={`footer-menu-${inx}`} className='flex flex-col gap-4'>
                <div className='text-gray-500 font-medium'>{menuList.heading}</div>
                <div className='flex flex-col gap-2'>
                  {(menuList?.menus || []).map(({ link, title }, index) => {
                    return (
                      <div
                        key={`footer-sub-menu-${index}`}
                        className='text-base cursor-pointer'
                        onClick={() => navigate(link)}
                      >
                        {title}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-row gap-2 items-end'>
          <img
            src={images.LogoMini}
            alt='log'
            className='h-10 md:h-11 lg:h-12 w-fit cursor-pointer'
          />
          <div className='flex flex-col text-xs md:text-sm'>
            <div className='text-gray-500'>Collective</div>
            <div>© Cryptosip {new Date().getFullYear()} - in love with crypto</div>
          </div>
        </div>
      </div>
      <div className='flex flex-row py-6 gap-2 items-center justify-center'>
        <IconButton
          Icon={<BiLogoFacebook />}
          className='cursor-pointer bg-black text-white p-1 lg:p-2 text-2xl lg:3xl'
          onClick={() => {}}
        />
        <IconButton
          Icon={<BiLogoLinkedin />}
          className='cursor-pointer bg-black text-white p-1 lg:p-2 text-2xl lg:3xl'
          onClick={() => {}}
        />
        <IconButton
          Icon={<BiLogoTwitter />}
          className='cursor-pointer bg-black text-white p-1 lg:p-2 text-2xl lg:3xl'
          onClick={() => {}}
        />
        <IconButton
          Icon={<BiLogoTelegram />}
          className='cursor-pointer bg-black text-white p-1 lg:p-2 text-2xl lg:3xl'
          onClick={() => {}}
        />
        <IconButton
          Icon={<BiLogoInstagram />}
          className='cursor-pointer bg-black text-white p-1 lg:p-2 text-2xl lg:3xl'
          onClick={() => {}}
        />
        <IconButton
          Icon={<BiLogoYoutube />}
          className='cursor-pointer bg-black text-white p-1 lg:p-2 text-2xl lg:3xl'
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default Footer
