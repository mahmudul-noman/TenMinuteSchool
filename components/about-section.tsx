"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface AboutItem {
  title: string
  description: string
}

interface AboutSectionProps {
  aboutItems: AboutItem[]
  currentLang: "en" | "bn"
}

export default function AboutSection({ aboutItems, currentLang }: AboutSectionProps) {
  const [expandedItem, setExpandedItem] = useState<number | null>(0)

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">
        {currentLang === "en" ? "Course Details" : "কোর্সের বিস্তারিত"}
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#E14434] transition-colors"
          >
            <button
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedItem(expandedItem === index ? null : index)}
            >
              <div className="flex-1">
                <h3
                  className="font-bold text-base sm:text-lg text-[#000000] leading-tight"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#E14434] transition-transform duration-300 flex-shrink-0 ml-4 ${
                  expandedItem === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedItem === index && (
              <div className="border-t border-gray-100 bg-gray-50 p-4 sm:p-5">
                <div
                  className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
