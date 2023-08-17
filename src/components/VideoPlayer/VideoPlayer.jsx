import { useEffect, useRef } from 'react';

const VideoPlayer = ({ video }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && typeof window !== "undefined") {
      window.jwplayer(playerRef.current).setup({
        file: video.sourceUrl,
        width: '100%',
        aspectratio: '16:9',
      });
    }
  }, [video]);

  return <div ref={playerRef}></div>;
};

export default VideoPlayer;