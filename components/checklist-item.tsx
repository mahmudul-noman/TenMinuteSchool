import { Check } from "lucide-react"

interface ChecklistItemProps {
  title: string
  description?: string
}

export default function ChecklistItem({ title, description }: ChecklistItemProps) {
  return (
    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-3 h-3 text-white" />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{title}</h4>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  )
}
