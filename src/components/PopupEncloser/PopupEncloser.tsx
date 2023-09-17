import { PopupEncloserProps } from 'types'

const PopupEncloser = (props: PopupEncloserProps) => {
  const { children, close, show } = props

  const handleClose = () => close(false)

  document.body.style.overflow = show ? 'hidden' : 'auto'

  return show ? (
    <div
      className='z-50 fixed left-0 right-0 top-0 bottom-0 w-[100vw] h-[100vh] grid place-items-center bg-black bg-opacity-75 inset-0 overflow-hidden'
      onClick={handleClose}
    >
      <div className='relative max-w-[90%]' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
}

export default PopupEncloser
