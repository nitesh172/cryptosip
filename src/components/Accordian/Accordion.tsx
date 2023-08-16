import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { AccordionProps } from "types"

const Accordion = (props: AccordionProps) => {
  const { title, children, isOpen } = props
  const [show, setShow] = useState(isOpen ? true : false)
  const toggleAccordion = () => {
    setShow(!show)
  }
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between font-medium" onClick={toggleAccordion}>
        <div>{title}</div>
        <div className="font-light">
          {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div className={`transition-all ease-in-out duration-500 ${show ? "h-fit" : "h-0"}`}>{children}</div>
    </div>
  )
}

export default Accordion
