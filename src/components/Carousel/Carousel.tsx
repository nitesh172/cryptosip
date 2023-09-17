import IconButton from "components/Buttons/IconButton"
import TextButton from "components/Buttons/TextButton"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { useSnapCarousel } from "react-snap-carousel"
import { CarouselProps } from "types"

const Carousel = (props: CarouselProps) => {
  const { title, data, renderItem, className } = props
  const { scrollRef, pages, activePageIndex, next, prev, snapPointIndexes } = useSnapCarousel()

  return (
    <div className={`flex flex-col gap-10 mx-6 md:mx-16 lg:mx-20 xl:mx-24 ${className}`}>
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg md:text-xl lg:text-2xl font-medium">{title}</div>
        <div className="flex flex-row gap-4">
          <TextButton text="See all" className="text-lg" />
          <div className="hidden md:flex flex-row gap-3">
            <IconButton
              Icon={<BiLeftArrowAlt size={24} />}
              onClick={() => (activePageIndex === 0 ? null : prev())}
              className={`${
                activePageIndex === 0
                  ? "opacity-50 cursor-not-allowed hover:border-gray-300 bg-white"
                  : "cursor-pointer hover:border-black text-white  bg-black"
              } p-1.5 border  `}
            />
            <IconButton
              Icon={<BiRightArrowAlt size={24} />}
              onClick={() => (activePageIndex === pages.length - 1 ? null : next())}
              className={`${
                activePageIndex === pages.length - 1
                  ? "opacity-50 cursor-not-allowed hover:border-gray-300 bg-white"
                  : "cursor-pointer hover:border-black text-white  bg-black"
              } p-1.5 border `}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-row overflow-x-auto scroll-smooth transition-all ease-linear duration-300 overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-x relative gap-6"
        ref={scrollRef}
      >
        {!!data &&
          !!data.length &&
          data.map((item, index) => (
              renderItem(item, index, snapPointIndexes.has(index))
          ))}
      </div>
    </div>
  )
}

export default Carousel
