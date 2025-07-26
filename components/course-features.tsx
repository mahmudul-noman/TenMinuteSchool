import { BookOpen, Video, FileText, Users, Award, Clock } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "৪টি মডিউল কভার",
    description: "Reading, Writing, Listening, Speaking",
    color: "bg-red-50 text-[#E14434] border-red-100",
  },
  {
    icon: Video,
    title: "লাইভ ক্লাস",
    description: "ইন্টারঅ্যাক্টিভ লাইভ সেশন",
    color: "bg-gray-50 text-[#000000] border-gray-100",
  },
  {
    icon: FileText,
    title: "প্র্যাকটিস টেস্ট",
    description: "নিয়মিত মক টেস্ট",
    color: "bg-red-50 text-[#E14434] border-red-100",
  },
  {
    icon: Users,
    title: "গ্রুপ স্টাডি",
    description: "সহপাঠীদের সাথে আলোচনা",
    color: "bg-gray-50 text-[#000000] border-gray-100",
  },
  {
    icon: Award,
    title: "সার্টিফিকেট",
    description: "কোর্স সম্পূর্ণের সার্টিফিকেট",
    color: "bg-red-50 text-[#E14434] border-red-100",
  },
  {
    icon: Clock,
    title: "ফ্লেক্সিবল টাইম",
    description: "নিজের সুবিধামত সময়ে",
    color: "bg-gray-50 text-[#000000] border-gray-100",
  },
]

export default function CourseFeatures() {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">কোর্সের বিশেষত্ব</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className={`flex items-start space-x-3 sm:space-x-4 p-4 sm:p-5 rounded-xl border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 ${feature.color}`}
            >
              <div className="flex-shrink-0">
                <div className="p-2 sm:p-3 rounded-lg bg-white shadow-sm">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 leading-tight">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
