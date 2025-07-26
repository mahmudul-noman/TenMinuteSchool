import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
            <div className="hidden md:flex space-x-6">
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Skeleton */}
            <Card>
              <CardContent className="p-6">
                <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4"></div>
              </CardContent>
            </Card>

            {/* Description Skeleton */}
            <Card>
              <CardContent className="p-6">
                <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </CardContent>
            </Card>

            {/* Additional sections skeleton */}
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column Skeleton */}
          <div className="space-y-6">
            {/* Trailer Skeleton */}
            <Card>
              <CardContent className="p-6">
                <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="w-full aspect-video bg-gray-200 rounded animate-pulse"></div>
              </CardContent>
            </Card>

            {/* CTA Skeleton */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
                  <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Skeleton */}
            <Card>
              <CardContent className="p-6">
                <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-gray-100 rounded-lg">
                      <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse mt-0.5"></div>
                      <div className="flex-1">
                        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
