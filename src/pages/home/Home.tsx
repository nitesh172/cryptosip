import { Button, Carousel, AirdropCard, VideoPlayer } from "components"
import { BiRightArrowAlt, BiSolidVideos } from "react-icons/bi"
import { MdFollowTheSigns } from "react-icons/md"

const Home = () => {
  const video = {
    sources: [
      {
        file: "https://vod-progressive.akamaized.net/exp=1692358090~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F680%2F12%2F303404131%2F1161809216.mp4~hmac=2e7ea8ebc7c0a8004672eb3c75bdc2e4a76603d4939c5f1dac946ceb2580560a/vimeo-prod-skyfire-std-us/01/680/12/303404131/1161809216.mp4?filename=file.mp4",
        label: "720p",
        type: "mp4",
      },
      {
        file: "https://vod-progressive.akamaized.net/exp=1692358083~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F680%2F12%2F303404131%2F1161809217.mp4~hmac=8090408ec794be116555c980ee4c925b5b3d3721b4c57e5f070e7c76a11aa734/vimeo-prod-skyfire-std-us/01/680/12/303404131/1161809217.mp4?filename=file.mp4",
        label: "1080p",
        type: "mp4",
      },
    ],
    // video: "https://vod-progressive.akamaized.net/exp=1692358083~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F680%2F12%2F303404131%2F1161809217.mp4~hmac=8090408ec794be116555c980ee4c925b5b3d3721b4c57e5f070e7c76a11aa734/vimeo-prod-skyfire-std-us/01/680/12/303404131/1161809217.mp4?filename=file.mp4",
    poster: "https://wallpapercave.com/wp/n9D8rLR.jpg",
    // sourceUrl: "https://vod-progressive.akamaized.net/exp=1692354836~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4497%2F6%2F172488192%2F556474945.mp4~hmac=44ad7a36152e73c28032280a4b2f8920a9d53a5575833bdec56c91179ded06b4/vimeo-prod-skyfire-std-us/01/4497/6/172488192/556474945.mp4?filename=file.mp4",
  }
  return (
    <div>
      <section className="w-full h-fit bg-gradient-to-t from-white to-[#E2E6EE]">
        <div className="py-24 p-8 md:p-14 lg:p-24 bg-no-repeat bg-cover w-full bg-[url('https://assets-global.website-files.com/5f15b50525745912903311ad/5f2c451f19f0f12cca46321c_Group%2074.svg')]">
          <div className="text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
            Welcome to
          </div>
          <div className="text-black text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Crypto<span className="text-purple-500">sip.</span>
          </div>
          <div className="text-base md:text-lg lg:text-lg text-gray-400 break-words md:w-2/3 lg:w-1/2 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate ipsum eaque
            beatae facere aliquid accusantium laboriosam, at quae adipisci repellendus sed? Rem non
            ipsum delectus nam dolorum facere provident!
          </div>
          <Button
            text="Get Started"
            Icon={<BiRightArrowAlt />}
            className="font-normal text-base md:text-xl w-fit bg-purple-500 text-white border-none"
          />
        </div>
      </section>
      <section className="py-3 px-8 lg:px-16 flex flex-col items-center bg-[#FCFCFC]">
        <div className="text-2xl font-semibold mb-8">How does it work?</div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-4 justify-center">
          <div className="bg-white shadow-md flex rounded-md p-6 items-center gap-3 w-full">
            <BiSolidVideos className="text-6xl text-[#8A3FFC]" />
            <div>
              <div className="text-lg font-medium">Watch Videos</div>
              <div className="text-sm">Learn about top & emerging crypto projects</div>
            </div>
          </div>
          <div className="bg-white shadow-md flex rounded-md p-6 items-center gap-3 w-full">
            <MdFollowTheSigns className="text-6xl text-[#23DCF5]" />
            <div>
              <div className="text-lg font-medium">Follow Steps</div>
              <div className="text-sm">Put your newfound knowledge and follow</div>
            </div>
          </div>
          <div className="bg-white shadow-md flex rounded-md p-6 items-center gap-3 w-full">
            <BiSolidVideos className="text-6xl text-[#3861FB]" />
            <div>
              <div className="text-lg font-medium">Earn Crypto</div>
              <div className="text-sm">Get rewarded in the crypto you learned about!</div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-8 lg:p-16">
        <VideoPlayer video={video} />
      </div>
      <Carousel
        title="New Airdrops"
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        renderItem={(airdrop, i) => <AirdropCard key={i} airdrop={airdrop} index={i} />}
      />
      {/* <Carousel
            title="Upcoming Airdrops"
            data={[1,2,3,4,5,6,7,8,9,10,11, 12, 13, 14, 15, 16, 17, 18]}
            renderItem={(item) => (
              <div className="h-60 w-80 border">{item}</div>
            )}
          /> */}
    </div>
  )
}

export default Home
