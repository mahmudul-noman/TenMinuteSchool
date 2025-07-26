import { User } from "lucide-react"

interface InstructorCardProps {
  name: string
  designation?: string
  image?: string
  description?: string
}

export default function InstructorCard({ name, designation, image, description }: InstructorCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0">
        {image ? (
          <img src={image || "/placeholder.svg"} alt={name} className="w-16 h-16 rounded-full object-cover" />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-8 h-8 text-gray-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-gray-900">{name}</h4>
        {designation && <p className="text-sm text-gray-600 mb-2">{designation}</p>}
        {description && <p className="text-sm text-gray-700">{description}</p>}
      </div>
    </div>
  )
}
