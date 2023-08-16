import { TextfieldProps } from "types"

const Textfiled = (props: TextfieldProps) => {
  const { label, type, value, onChange, className, placeholder, name } = props

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event)
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <div className="text-sm font-medium">{label}</div>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="border-2 border-gray-200 outline-none text-base py-2.5 px-3.5 rounded-xl hover:border-[#0578FF] focus-within:border-[#0578FF]"
      />
    </div>
  )
}

export default Textfiled
