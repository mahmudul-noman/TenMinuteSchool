import { Star, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  rating: number
  totalStudents: number
  duration: string
  trailerVideo?: {
    resource_value: string
    thumbnail?: string
  }
}

export default function HeroSection({ title, rating, totalStudents, duration, trailerVideo }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-r from-[#E14434] to-[#000000] text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 lg:mb-8">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm sm:text-base">{rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{totalStudents.toLocaleString()} শিক্ষার্থী</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{duration}</span>
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed">
              IELTS এ ভালো স্কোর করার জন্য সম্পূর্ণ প্রস্তুতি নিন বিশেষজ্ঞ শিক্ষকদের সাথে
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#E14434] hover:bg-red-600 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-2 border-[#E14434] hover:border-red-600 transition-all">
                এনরোল করুন
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#000000] px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-transparent transition-all"
              >
                ফ্রি ট্রায়াল
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-2xl max-w-md mx-auto lg:max-w-none">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                {trailerVideo ? (
                  <>
                    <img
                      src={
                        trailerVideo.thumbnail ||
                        `https://img.youtube.com/vi/${trailerVideo.resource_value}/maxresdefault.jpg`
                      }
                      alt="Course Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E14434] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                        <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                      alt="Course Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E14434] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                        <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-[#000000] font-semibold text-base sm:text-lg">কোর্স ট্রেইলার</h3>
                <p className="text-gray-600 text-sm">কোর্সের বিস্তারিত জানুন</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
