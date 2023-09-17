import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules"
import { useRef } from "react"

import "swiper/css/bundle"
import "./Swiper.css"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi"

const CarouselSwiper = (props) => {
  const { className, sliderClassName, renderItem, data } = props
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <div className={`group w-full px-6 md:px-16 lg:px-20 xl:px-24 relative ${className}`}>
      <div
        ref={prevRef}
        className="absolute group-hover:md:flex top-[40%] hidden cursor-pointer left-10 lg:left-14 xl:left-20 z-10 bg-black text-4xl text-white w-12 h-12 items-center justify-center"
      >
        <BiLeftArrowAlt />
      </div>
      <Swiper
        modules={[EffectCoverflow, Autoplay, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          720: {
            slidesPerView: 2,
          },
        }}
      >
        {!!data &&
          !!data.length &&
          data.map((item, index) => (
            <SwiperSlide key={index} className={sliderClassName}>
              {renderItem(item, index)}
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        ref={nextRef}
        className="absolute top-[40%] group-hover:md:flex cursor-pointer right-10 lg:right-14 xl:right-20 z-10 bg-black text-4xl text-white w-12 h-12 hidden items-center justify-center"
      >
        <BiRightArrowAlt />
      </div>
    </div>
  )
}

export default CarouselSwiper
