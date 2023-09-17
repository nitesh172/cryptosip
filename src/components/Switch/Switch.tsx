import { SwitchProps } from 'types'

const Switch = (props: SwitchProps) => {
  const { id, isDisabled, onChange, value } = props
  return (
    <div
      id={id}
      onClick={() => !isDisabled && onChange && onChange()}
      className={`w-14 h-7 flex items-center px-1 cursor-pointer bg-[#EAECF0]`}
    >
      <div
        className={`w-5 h-5 shadow-sm transform transition-transform ease-in-out duration-500 ${
          value ? 'translate-x-7' : 'translate-x-0'
        } ${isDisabled ? 'bg-gray-600' : 'bg-black'}`}
      />
    </div>
  )
}

export default Switch
