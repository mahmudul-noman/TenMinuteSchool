import { Star, Award, Users } from "lucide-react"

interface InstructorProps {
  name: string
  title: string
  image: string
  description: string
  currentLang: "en" | "bn"
}

export default function InstructorSection({ name, title, image, description, currentLang }: InstructorProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-[#000000]">
        {currentLang === "en" ? "Course Instructor" : "কোর্স ইন্সট্রাক্টর"}
      </h2>

      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex-shrink-0 mx-auto sm:mx-0">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-[#E14434] shadow-lg"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#000000] mb-1">{name}</h3>
          <p className="text-[#E14434] font-semibold mb-3 text-sm sm:text-base">{title}</p>

          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
              <span className="font-medium">4.9 {currentLang === "en" ? "Rating" : "রেটিং"}</span>
            </div>
            <div className="flex items-center space-x-1 bg-blue-50 px-2 py-1 rounded-full">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="font-medium">
                {currentLang === "en" ? "8+ Years" : "৮+ বছর"} {currentLang === "en" ? "Experience" : "অভিজ্ঞতা"}
              </span>
            </div>
            <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
              <span className="font-medium">33,007 {currentLang === "en" ? "Students" : "শিক্ষার্থী"}</span>
            </div>
          </div>

          <div
            className="text-gray-700 text-sm sm:text-base leading-relaxed prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  )
}
