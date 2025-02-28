"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { MediaLoader } from "./media-loader"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => setIsLoading(false)
    video.addEventListener("loadeddata", handleLoadedData)

    return () => video.removeEventListener("loadeddata", handleLoadedData)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="video-container group relative">
      <MediaLoader>
        <video ref={videoRef} autoPlay loop muted={isMuted} playsInline className="w-full">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MediaLoader>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            className="text-white hover:text-uw-gold transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="text-white hover:text-uw-gold transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </motion.button>
        </div>
      </div>
    </div>
  )
}

