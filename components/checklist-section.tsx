interface ChecklistItem {
  id: string
  text: string
  icon: string
}

interface ChecklistSectionProps {
  checklist: ChecklistItem[]
  currentLang: "en" | "bn"
}

export default function ChecklistSection({ checklist, currentLang }: ChecklistSectionProps) {
  if (!checklist || checklist.length === 0) {
    return null
  }

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#000000] mb-4 sm:mb-6 lg:mb-8">
        {currentLang === "en" ? "What You'll Get" : "যা যা পাবেন"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {checklist.map((item) => (
          <div key={item.id} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex-shrink-0 mt-0.5">
              <img src={item.icon || "/placeholder.svg"} alt="" className="w-5 h-5 object-contain" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-[#000000] text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
