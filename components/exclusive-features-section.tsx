interface ExclusiveFeature {
  title: string
  checklist: string[]
  file_url: string
}

interface ExclusiveFeaturesSectionProps {
  features: ExclusiveFeature[]
  currentLang: "en" | "bn"
}

export default function ExclusiveFeaturesSection({ features, currentLang }: ExclusiveFeaturesSectionProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">
        {currentLang === "en" ? "Course Exclusive Features" : "কোর্সের বিশেষ বৈশিষ্ট্য"}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 sm:p-6 border-2 border-red-100"
          >
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <img
                src={feature.file_url || "/placeholder.svg"}
                alt={feature.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#000000] text-center sm:text-left">{feature.title}</h3>
            </div>
            <div className="space-y-2">
              {feature.checklist.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#E14434] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
