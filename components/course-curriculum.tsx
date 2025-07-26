"use client"

import { ChevronDown, Play, FileText, Clock } from "lucide-react"
import { useState } from "react"

const curriculumData = [
  {
    title: "IELTS Reading Module",
    duration: "৮ ঘন্টা",
    lessons: [
      { title: "Reading Strategies", type: "video", duration: "45 মিনিট" },
      { title: "Skimming & Scanning", type: "video", duration: "30 মিনিট" },
      { title: "Practice Test 1", type: "quiz", duration: "60 মিনিট" },
    ],
  },
  {
    title: "IELTS Writing Module",
    duration: "১০ ঘন্টা",
    lessons: [
      { title: "Task 1 Overview", type: "video", duration: "40 মিনিট" },
      { title: "Task 2 Essay Writing", type: "video", duration: "50 মিনিট" },
      { title: "Writing Practice", type: "assignment", duration: "90 মিনিট" },
    ],
  },
  {
    title: "IELTS Listening Module",
    duration: "৬ ঘন্টা",
    lessons: [
      { title: "Listening Techniques", type: "video", duration: "35 মিনিট" },
      { title: "Note Taking Skills", type: "video", duration: "25 মিনিট" },
      { title: "Practice Test 2", type: "quiz", duration: "30 মিনিট" },
    ],
  },
  {
    title: "IELTS Speaking Module",
    duration: "৮ ঘন্টা",
    lessons: [
      { title: "Speaking Part 1", type: "video", duration: "40 মিনিট" },
      { title: "Speaking Part 2", type: "video", duration: "45 মিনিট" },
      { title: "Speaking Part 3", type: "video", duration: "40 মিনিট" },
    ],
  },
]

interface CourseCurriculumProps {
  currentLang?: "en" | "bn"
}

export default function CourseCurriculum({ currentLang = "bn" }: CourseCurriculumProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0)

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4 text-[#E14434]" />
      case "quiz":
        return <FileText className="w-4 h-4 text-[#E14434]" />
      case "assignment":
        return <FileText className="w-4 h-4 text-[#000000]" />
      default:
        return <FileText className="w-4 h-4 text-gray-600" />
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">
        {currentLang === "en" ? "Course Curriculum" : "কোর্স কারিকুলাম"}
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {curriculumData.map((module, index) => (
          <div
            key={index}
            className="border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#E14434] transition-colors"
          >
            <button
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedModule(expandedModule === index ? null : index)}
            >
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-[#000000] mb-1">{module.title}</h3>
                <p className="text-sm text-gray-600">
                  {module.lessons.length} টি লেসন • {module.duration}
                </p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#E14434] transition-transform duration-300 flex-shrink-0 ml-4 ${
                  expandedModule === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedModule === index && (
              <div className="border-t border-gray-100 bg-gray-50">
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className="flex items-center justify-between p-4 sm:p-5 hover:bg-white transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      {getIcon(lesson.type)}
                      <span className="text-sm sm:text-base text-gray-700">{lesson.title}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
