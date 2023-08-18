import { useEffect, useRef } from "react"

const VideoPlayer = ({ video }) => {
  const playerRef = useRef(null)

  useEffect(() => {
    if (playerRef.current && typeof window !== "undefined") {
      window.jwplayer(playerRef.current).setup({
        sources: video.sources,
        file: video.sourceUrl,
        qualityLabels: { 2500: "High", 1000: "Medium" },
        width: "100%",
        aspectratio: "16:9",
        responsive: true,
        image: video.poster,
        video: video.video
      })
    }
  }, [video])

  return <div ref={playerRef}></div>
}

export default VideoPlayer
