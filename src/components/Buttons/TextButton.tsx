import React from "react"
import { TextButtonProps } from "types"

const TextButton: React.FC<TextButtonProps> = (props) => {
  const { text, onClick, className, Icon } = props

  return (
    <div className={`cursor-pointer flex flex-row gap-3 items-center text-black ${className}`} onClick={onClick}>
      {Icon}
      {text}
    </div>
  )
}

export default TextButton
