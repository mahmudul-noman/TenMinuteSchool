import { Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const relatedCourses = [
  {
    id: 1,
    title: "IELTS Live Batch",
    instructor: "Munzereen Shahid",
    rating: 4.8,
    students: 1200,
    price: 3500,
    image: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
  },
  {
    id: 2,
    title: "TOEFL Preparation Course",
    instructor: "Munzereen Shahid",
    rating: 4.7,
    students: 800,
    price: 2800,
    image:
      "https://cdn.10minuteschool.com/images/thumbnails/skills/Advance_Spoken_English_by_Munzereen_Shahid_16x9.jpg",
  },
  {
    id: 3,
    title: "English Speaking Mastery",
    instructor: "Rafiul Alam Rahman",
    rating: 4.9,
    students: 2500,
    price: 1500,
    image: "https://cdn.10minuteschool.com/images/thumbnails/skills/Communicative-English/CE_Batch_4_16x9.jpg",
  },
  {
    id: 4,
    title: "Academic Writing Skills",
    instructor: "Munzereen Shahid",
    rating: 4.6,
    students: 600,
    price: 2000,
    image: "https://cdn.10minuteschool.com/images/thumbnails/skills/IELTS_Writing_16x9.jpg",
  },
]

export default function RelatedCourses() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">সম্পর্কিত কোর্স</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
        {relatedCourses.map((course) => (
          <div
            key={course.id}
            className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#E14434] hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full min-h-[380px]"
          >
            {/* Image Container - Fixed Height */}
            <div className="h-48 overflow-hidden flex-shrink-0">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                }}
              />
            </div>

            {/* Content Container - Flexible Height */}
            <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
              {/* Top Content */}
              <div className="flex-grow">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#000000] mb-2 leading-tight min-h-[3rem] flex items-start">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{course.instructor}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                    <span className="text-xs sm:text-sm font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                    <span className="text-xs sm:text-sm text-gray-600">{course.students}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Content - Price and Button */}
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-[#000000]">
                  ৳{course.price.toLocaleString()}
                </span>
                <Button
                  size="sm"
                  className="bg-[#E14434] hover:bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 flex-shrink-0"
                >
                  দেখুন
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
