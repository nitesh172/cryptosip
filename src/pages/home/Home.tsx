import { images, data } from 'assets'
import { Carousel, AirdropCard, CarouselSwiper } from 'components'
import IconButton from 'components/Buttons/IconButton'
import { useAppSelector } from 'hooks/redux'
import { BiSolidQuoteRight } from 'react-icons/bi'
import { GoArrowUpRight } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { isAuthenticate } = useAppSelector((state) => state.userReducer)

  return (
    <div className=''>
      <section className='w-full h-fit mb-8 md:mb-14 lg:mb-20'>
        <div className='w-full flex flex-col items-center px-8 pt-14 md:pt-20'>
          <div className='text-black text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-center'>
            Welcome to
          </div>
          <div className='text-black text-4xl md:text-6xl lg:text-7xl font-bold mb-8'>
            Crypto<span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500'>dash.</span>
          </div>
          <div className='text-sm md:text-lg lg:text-lg text-center text-gray-400 break-words md:w-2/3 lg:w-1/2 mb-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate ipsum eaque
            beatae facere aliquid accusantium laboriosam
          </div>
          {isAuthenticate !== null && !isAuthenticate && (
            <IconButton
              Icon={<GoArrowUpRight size={32} />}
              className='bg-black text-white p-2'
              onClick={() => navigate('/signup')}
            />
          )}
        </div>
      </section>
      <CarouselSwiper
        className='mb-20 lg:mb-24 xl:mb-28'
        data={[
          'https://cdn.galxe.com/tooljet/1691067523893-image%20(10).png',
          'https://cdn.galxe.com/tooljet/1692329554780-image_2023-08-17_19-26-08.png',
          'https://cdn.galxe.com/tooljet/1691975677499-Galxe%20Carousel%201600x900.png',
          'https://cdn.galxe.com/tooljet/1692027462384-Manta%20x%20Web3GO.jpg',
        ]}
        renderItem={(item: any, index: number) => {
          return (
            <div className='w-full border bg-white flex flex-col p-3 gap-3 cursor-pointer'>
              <img src={item} alt='' className='w-full h-auto aspect-video' />
              <div className='flex flex-row gap-2 items-end'>
                <img
                  src='https://crew3-production.s3.eu-west-3.amazonaws.com/public/fp-joks46hu6vopq6jgo-dg9rsiu1is_-logo.png'
                  alt=''
                  className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'
                />
                <div className='text-sm md:text-base lg:text-lg font-semibold'>Bitconin</div>
              </div>
              <div className='text-xs md:text-sm line-clamp-1'>
                Lorem, ipsum dolor sit amet consecteturss dd adipisicing elit. Minus
              </div>
            </div>
          )
        }}
      />
      <Carousel
        title='New Airdrops'
        className='mb-20 lg:mb-28'
        data={data.newAirdrop}
        renderItem={(airdrop, i, isSnapPoint) => (
          <AirdropCard key={i} airdrop={airdrop} index={i} isSnapPoint={isSnapPoint} />
        )}
      />
      <Carousel
        title='Popular Airdrops'
        className='mb-20 lg:mb-28'
        data={data.newAirdrop}
        renderItem={(airdrop, i, isSnapPoint) => (
          <AirdropCard key={i} airdrop={airdrop} index={i} isSnapPoint={isSnapPoint} />
        )}
      />
      <div className='mx-6 md:mx-16 lg:mx-20 xl:mx-24 py-10 px-10 flex flex-col gap-8 bg-black mb-20 lg:mb-28 text-white items-center'>
        <div className='p-3 bg-[#212124]'>
          <BiSolidQuoteRight />
        </div>
        <div className='text-xl md:text-3xl font-medium text-center'>
          Library show that they know <br className='hidden lg:block' /> the art of subtely.
        </div>
        <img
          src={images.Logo2}
          alt='log'
          className='h-8 sm:h-8 md:h-9 lg:h-10 w-fit cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Home
