"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface YouTubePlayerProps {
  videoId: string
  thumbnail?: string
  title: string
}

export default function YouTubePlayer({ videoId, thumbnail, title }: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
        <div className="bg-[#E14434] rounded-full p-4 group-hover:scale-110 transition-transform shadow-lg">
          <Play className="w-8 h-8 text-white fill-current ml-1" />
        </div>
      </div>
    </div>
  )
}
