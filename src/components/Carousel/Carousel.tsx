import IconButton from "components/Buttons/IconButton"
import TextButton from "components/Buttons/TextButton"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"
import { useSnapCarousel } from "react-snap-carousel"
import { CarouselCardItemProps, CarouselProps } from "types"

const Carousel = (props: CarouselProps) => {
  const { title, data, renderItem } = props
  const { scrollRef, pages, activePageIndex, next, prev, snapPointIndexes } = useSnapCarousel()

  return (
    <div className="flex flex-col gap-10 mx-10 lg:mx-16 mt-10 md:mt-20 lg:mt-24 mb-10 md:mb-20 lg:mb-24">
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
                  ? "opacity-50 cursor-not-allowed hover:border-gray-300"
                  : "cursor-pointer hover:border-purple-700"
              } p-1.5 rounded-xl border-2 backdrop-blur-lg bg-white`}
            />
            <IconButton
              Icon={<BiRightArrowAlt size={24} />}
              onClick={() => (activePageIndex === pages.length - 1 ? null : next())}
              className={`${
                activePageIndex === pages.length - 1
                  ? "opacity-50 cursor-not-allowed hover:border-gray-300"
                  : "cursor-pointer hover:border-purple-700"
              } p-1.5 rounded-xl border-2 backdrop-blur-lg bg-white`}
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
            <CarouselCard key={index} isSnapPoint={snapPointIndexes.has(index)}>
              {renderItem(item, index)}
            </CarouselCard>
          ))}
      </div>
    </div>
  )
}

const CarouselCard = (props: CarouselCardItemProps) => {
  const { children, isSnapPoint } = props
  return <div className={`flex-shrink-0 ${isSnapPoint && "snap-start"}`}>{children}</div>
}

export default Carousel
