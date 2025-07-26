import type { Section } from "@/types/product"
import InstructorCard from "./instructor-card"
import { BookOpen, Target, Star, Info, CheckCircle } from "lucide-react"

interface SectionRendererProps {
  section: Section
  currentLang: "en" | "bn"
}

export default function SectionRenderer({ section, currentLang }: SectionRendererProps) {
  // Add safety check
  if (!section || !section.content) {
    return null
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "instructor":
        return <Star className="w-5 h-5" />
      case "features":
        return <BookOpen className="w-5 h-5" />
      case "pointers":
        return <Target className="w-5 h-5" />
      case "about":
        return <Info className="w-5 h-5" />
      default:
        return <Info className="w-5 h-5" />
    }
  }

  const renderContent = () => {
    const content = section.content || {}

    switch (section.type) {
      case "instructor":
        const instructors = content.items || []
        return (
          <div className="space-y-4">
            {instructors.map((instructor) => (
              <InstructorCard
                key={instructor.id}
                name={instructor.title || "Instructor"}
                designation={instructor.designation}
                image={instructor.image}
                description={instructor.description}
              />
            ))}
          </div>
        )

      case "features":
        const features = content.items || []
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item) => (
              <div key={item.id} className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-100">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="w-5 h-5 text-[#E14434]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#000000] mb-1">{item.title || "Feature"}</h4>
                  {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )

      case "pointers":
        const pointers = content.items || []
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pointers.map((item) => (
              <div
                key={item.id}
                className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-100"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-[#000000]">{item.title || "Learning Point"}</h4>
                  {item.description && <p className="text-sm text-gray-600 mt-1">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        )

      case "about":
        return (
          <div className="prose prose-sm max-w-none">
            {content.description ? (
              <div dangerouslySetInnerHTML={{ __html: content.description }} />
            ) : (
              <p className="text-gray-700">
                {currentLang === "en" ? "Course details will be available soon." : "কোর্সের বিস্তারিত শীঘ্রই পাওয়া যাবে।"}
              </p>
            )}
          </div>
        )

      default:
        return (
          <div className="text-gray-500">
            {currentLang === "en" ? "Content not available for this section type." : "এই বিভাগের জন্য কন্টেন্ট উপলব্ধ নেই।"}
          </div>
        )
    }
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
        <div className="text-[#E14434]">{getIcon(section.type)}</div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000000]">{section.title || "Section"}</h3>
      </div>
      {renderContent()}
    </div>
  )
}
