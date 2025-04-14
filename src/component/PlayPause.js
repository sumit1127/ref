import { useState, useRef, useEffect } from "react";

const PlayPause = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const VideoPlayer = () => {
    const ref = useRef(null);

    useEffect(() => {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }, [isPlaying]);
    return (
      <video
        ref={ref}
        src={
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        }
      />
    );
  };

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "pause" : "play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
};

export default PlayPause;
