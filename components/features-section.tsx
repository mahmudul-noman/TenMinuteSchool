interface Feature {
  icon: string
  title: string
  subtitle: string
}

interface FeaturesSectionProps {
  features: Feature[]
  currentLang: "en" | "bn"
}

export default function FeaturesSection({ features, currentLang }: FeaturesSectionProps) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000]">
        {currentLang === "en" ? "How the Course is Laid Out" : "কোর্স কীভাবে সাজানো হয়েছে"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 sm:p-5 rounded-xl border-2 border-gray-100 hover:border-[#E14434] hover:shadow-lg transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <img
                src={feature.icon || "/placeholder.svg"}
                alt={feature.title}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#000000] mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
