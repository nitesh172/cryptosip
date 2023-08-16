import React from "react"
import { IconButtonProps } from "types"

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { className, onClick, Icon } = props
  return (
    <div onClick={() => onClick()} className={className}>
      {Icon}
    </div>
  )
}

export default IconButton
