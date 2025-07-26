import { CheckCircle } from "lucide-react"

interface Pointer {
  text: string
}

interface PointersSectionProps {
  pointers: Pointer[]
  currentLang: "en" | "bn"
}

export default function PointersSection({ pointers, currentLang }: PointersSectionProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">
        {currentLang === "en" ? "What You Will Learn by Doing the Course" : "কোর্স করে আপনি যা শিখবেন"}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:gap-4">
        {pointers.map((pointer, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 sm:p-4 bg-green-50 rounded-lg border border-green-100"
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{pointer.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
