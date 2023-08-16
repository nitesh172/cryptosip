import React from "react"
import { ButtonProps } from "types"

const Button: React.FC<ButtonProps> = (props) => {
  const { text, className, onClick, Icon } = props

  return (
    <div
      className={`cursor-pointer transition-transform duration-300 group/button flex flex-row gap-2 
      ${!Icon && "justify-center"} items-center px-5 py-2.5 rounded-xl border text-sm font-bold hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {text}
      {Icon && (
        <div className="group-hover/button:translate-x-1 transition-all duration-500">{Icon}</div>
      )}
    </div>
  )
}

export default Button
