import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, Download, Share2, Heart } from "lucide-react"
import YouTubePlayer from "./youtube-player"

interface CourseSidebarProps {
  price: number
  originalPrice?: number
  duration: string
  students: number
  certificate: boolean
  currentLang: "en" | "bn"
  trailerVideo?: {
    resource_value: string
    thumbnail?: string
  }
  courseTitle: string
  ctaText: string
  checklist: Array<{ text: string; icon: string }>
}

export default function CourseSidebar({
  price,
  originalPrice,
  duration,
  students,
  certificate,
  currentLang,
  trailerVideo,
  courseTitle,
  ctaText,
  checklist,
}: CourseSidebarProps) {
  const content = {
    en: {
      coursePreview: "Course Preview",
      seeDetails: "See course details",
      oneTimePayment: "One-time payment, lifetime access",
      enroll: ctaText || "Enroll Now",
      wishlist: "Wishlist",
      share: "Share",
      courseDuration: "Course Duration",
      totalStudents: "Total Students",
      certificate: "Certificate",
      download: "Download",
      available: "Available",
      yes: "Yes",
      no: "No",
      whatYouGet: "What You'll Get",
    },
    bn: {
      coursePreview: "কোর্স প্রিভিউ",
      seeDetails: "কোর্সের বিস্তারিত দেখুন",
      oneTimePayment: "একবার পেমেন্ট, লাইফটাইম এক্সেস",
      enroll: ctaText || "এনরোল করুন",
      wishlist: "পছন্দ",
      share: "শেয়ার",
      courseDuration: "কোর্সের সময়কাল",
      totalStudents: "মোট শিক্ষার্থী",
      certificate: "সার্টিফিকেট",
      download: "ডাউনলোড",
      available: "উপলব্ধ",
      yes: "হ্যাঁ",
      no: "না",
      whatYouGet: "যা যা পাবেন",
    },
  }

  const t = content[currentLang]

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Video Preview */}
      <Card className="overflow-hidden shadow-lg border border-gray-100">
        <CardContent className="p-0">
          {trailerVideo ? (
            <div>
              <YouTubePlayer
                videoId={trailerVideo.resource_value}
                thumbnail={
                  trailerVideo.thumbnail ||
                  `https://img.youtube.com/vi/${trailerVideo.resource_value}/maxresdefault.jpg`
                }
                title={courseTitle}
              />
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-base sm:text-lg text-[#000000] mb-2">{t.coursePreview}</h3>
                <p className="text-sm text-gray-600">{t.seeDetails}</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="aspect-video bg-gray-900 relative overflow-hidden">
                <img
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  alt="Course Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E14434] rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-white border-t-[6px] sm:border-t-[8px] border-t-transparent border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-base sm:text-lg text-[#000000] mb-2">{t.coursePreview}</h3>
                <p className="text-sm text-gray-600">{t.seeDetails}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="shadow-lg border border-gray-100">
        <CardContent className="p-4 sm:p-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000000]">
                ৳{price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-base sm:text-lg text-gray-500 line-through">
                  ৳{originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600">{t.oneTimePayment}</p>
          </div>

          <Button className="w-full bg-[#E14434] hover:bg-red-600 text-white py-3 sm:py-4 text-base sm:text-lg font-bold mb-4 transition-all duration-300 hover:shadow-lg">
            {t.enroll}
          </Button>

          <div className="grid grid-cols-2 gap-2 mb-6">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {t.wishlist}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-gray-300 hover:bg-gray-50 text-xs sm:text-sm"
            >
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {t.share}
            </Button>
          </div>

          <div className="space-y-3 sm:space-y-4 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{t.courseDuration}</span>
              </div>
              <span className="font-semibold text-[#000000]">{duration}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{t.totalStudents}</span>
              </div>
              <span className="font-semibold text-[#000000]">{students.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{t.certificate}</span>
              </div>
              <span className="font-semibold text-[#E14434]">{certificate ? t.yes : t.no}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{t.download}</span>
              </div>
              <span className="font-semibold text-[#E14434]">{t.available}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What you'll get - Real checklist from API */}
      <Card className="shadow-lg border border-gray-100">
        <CardContent className="p-4 sm:p-6">
          <h3 className="font-bold text-base sm:text-lg text-[#000000] mb-4">{t.whatYouGet}</h3>
          <div className="space-y-3">
            {checklist.slice(0, 6).map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <img
                  src={item.icon || "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"}
                  alt=""
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png"
                  }}
                />
                <span className="text-sm text-gray-700 leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
