import React from "react"
import { TextButtonProps } from "types"

const TextButton: React.FC<TextButtonProps> = (props) => {
  const { text, onClick, className, Icon, iconPosition } = props

  return (
    <div className={`cursor-pointer flex gap-2 items-center text-black ${iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row' } ${className}`} onClick={onClick}>
      {Icon}
      {text}
    </div>
  )
}

export default TextButton
