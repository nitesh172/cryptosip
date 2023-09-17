import { TextAreaProps } from 'types'

const TextArea = (props: TextAreaProps) => {
    const { label, className, error, isDisabled, ...otherProps } = props

    return (
      <div className={`flex flex-col gap-1.5 relative ${className}`}>
        {label && <div className='text-sm font-medium'>{label}</div>}
        <textarea
          {...otherProps}
          disabled={isDisabled}
          className={`border border-gray-200 outline-none text-base py-2.5 px-3.5 resize-none ${
            !isDisabled && 'hover:border-black'
          } ${isDisabled && 'text-gray-500'} focus-within:border-black ${
            error && error !== '' && 'border-[#F04438]'
          }`}
        />
        {error && error !== '' ? <span className='text-xs text-[#F04438] block'>{error}</span> : null}
      </div>
    )
};

export default TextArea;
