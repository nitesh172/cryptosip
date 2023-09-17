import { TextfieldProps } from 'types'

const Textfiled = (props: TextfieldProps) => {
  const { label, className, error, isDisabled, ...otherProps } = props

  return (
    <div className={`flex flex-col gap-1.5 relative ${className}`}>
      {label && <div className='text-sm font-medium'>{label}</div>}
      <input
        {...otherProps}
        disabled={isDisabled}
        className={`border w-full h-10 lg:h-auto text-sm md:text-base py-1.5 md:py-2.5 px-2 md:px-3.5 border-gray-200 outline-none  ${
          !isDisabled && 'hover:border-black'
        } ${isDisabled && 'text-gray-500'} focus-within:border-black ${
          error && error !== '' && 'border-[#F04438]'
        }`}
        autoComplete='off'
      />
      {error && error !== '' ? <span className='text-xs text-[#F04438] block'>{error}</span> : null}
    </div>
  )
}

export default Textfiled
