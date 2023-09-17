import { cookieLinks } from 'utils/config/ui'

const Cookies = () => {
  return (
    <div className='mx-6 md:mx-16 lg:mx-20 xl:mx-24 py-12 flex flex-col'>
      <div className='self-center font-medium mb-1 md:mb-2'>Cookie Policy</div>
      <div className='self-center font-medium text-3xl md:text-4xl mb-2 md:mb-5'>
        We use cookies
      </div>
      <div className='self-center text-center md:px-[8%] lg:px-[12%] xl:px-[18%] mb-8 md:mb-16 text-gray-600'>
        A cookie is a small text file which we save on your computer to keep track of what is
        happening during your visit and to recognize you between visits.
      </div>
      <div className='font-medium text-lg mb-2'>Cookies and use of website</div>
      <p className='mb-6 text-gray-600'>
        When you are using our website, we collect and process several information. This will happen
        during normal access to content or if you fill in any forms.
      </p>
      <div className='font-medium text-lg mb-2'>
        We typically collect and process the following information
      </div>
      <p className='mb-6 text-gray-600'>
        Unique ID
        <br />
        Our pages which you click on and how long your visit is.
        <br />
        <br />
        Technical information on your computer, tablet, or mobile phone like:
        <br />
        <span className='text-sm'>Geographical location</span>
        <br />
        <span className='text-sm'>You device type which type of browser you use.</span>
      </p>
      <div className='font-medium text-lg mb-2'>
        To the extent that you give explicit consent to this yourself and enter the information
        yourself, the following is also processed:
      </div>
      <p className='mb-6 text-gray-600'>
        Name, phone number, email, address. This will typocally be in connection with filling in a
        contact form.
      </p>
      <div className='font-medium text-lg mb-2'>
        Information collected on the website are used for the following purposes
      </div>
      <p className='mb-6 text-gray-600'>
        Optimization and operation of the website content Processing your inquiry about products and
        services.
        <br />
        <br />
        This information is collected if you consent to it and is completely voluntary.
        <br />
        <br />
        You can withdraw your consent at any time by contacting us.
        <br />
        <br />
        Use the contact information if you want more information, or read the section ”Use of
        cookies” below.
      </p>
      <div className='font-medium text-lg mb-2'>Us of cookies</div>
      <p className='mb-6 text-gray-600'>
        When you visit our website, information is collected about you, which is used to customize
        and improve our content. If you do not want information to be collected, you should delete
        your cookies and refrain from consenting to the use of cookies while you are on the website.
        Below we have elaborated on which information is collected, its purpose and to what extent
        third parties have access to it.
      </p>
      <p className='mb-6 text-gray-600'>
        Cookies are saved on your computer, mobile and the like with the purpose of recognizing it,
        remember settings, performing statistics and improve user experience. Cookies cannot contain
        harmful code such as virus.
      </p>
      <p className='mb-6 text-gray-600'>
        If you delete or block cookies, you may risk that the website does not function optimally
        and that there is content that you cannot access.
      </p>
      <div className='font-medium text-lg mb-2'>How to reject or delete your cookies</div>
      <p className='mb-6 text-gray-600'>
        You can always reject cookies on your computer by changing settings in your Internet
        browser. Where you find the settings depends on which browser you use. However, you should
        be aware that if you do not allow cookies, you might not be able to use your service.
      </p>
      <p className='mb-2 text-gray-600'>
        Cookies that you have previously accepted can be easily deleted afterwards. If you use a
        PC/computer with a newer Internet browser, you can delete your cookies by using the shortcut
        keys:
      </p>
      <p className='mb-6 text-gray-600 text-sm'>
        CTRL + SHIFT + Delete. If the hotkeys do not work and/or you are using a MAC, you must start
        by finding out which browser you are using and then click on the relevant link:
        <ul style={{ listStyleType: 'square' }} className='p-4'>
          {cookieLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-base underline text-blue-600 hover:text-blue-800 cursor-pointer'
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </p>
      <div className='font-medium text-lg mb-4'>Third party cookies</div>
      <p className='mb-6 text-gray-600 text-base'>
        <span className='text-black font-medium text-lg'>Google Tag Manager</span>
        <br />
        We use Google Tag Manager to insert scripts on the site. Via this, Google Analytics is used
        to collect and analyze user visits for use in improving the user experience. Data is stored
        by Google and is not passed on to third parties.
      </p>
    </div>
  )
}

export default Cookies
