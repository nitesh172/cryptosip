import React, { useState } from 'react'
import { ButtonProps } from 'types'
import { CgSpinner } from 'react-icons/cg'

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className, onClick, Icon, type, submitLoading, small } = props

  const [isLoading, setLoading] = useState<boolean>(false)

  const handleOnClick = async () => {
    setLoading(true)
    onClick && (await onClick())
    setLoading(false)
  }

  return (
    <button
      type={type}
      className={`cursor-pointer transition duration-300 group/button flex flex-row gap-2 
      ${
        !Icon && 'justify-center'
      } items-center border font-semibold hover:scale-105 ${small ? 'px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm' : 'px-5 py-2.5 text-sm'} ${className}`}
      onClick={handleOnClick}
    >
      {type === 'button' ? (
        !isLoading ? (
          text
        ) : (
          <CgSpinner className='animate-spin' size={22} />
        )
      ) : !submitLoading ? (
        text
      ) : (
        <CgSpinner className='animate-spin' size={22} />
      )}
      {Icon && (
        <div className='group-hover/button:translate-x-1 transition-all duration-500'>{Icon}</div>
      )}
    </button>
  )
}

export default Button
