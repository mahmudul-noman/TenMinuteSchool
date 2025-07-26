"use client"

import { notFound } from "next/navigation"
import YouTubePlayer from "@/components/youtube-player"
import SectionRenderer from "@/components/section-renderer"
import ChecklistItem from "@/components/checklist-item"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { getProductData } from "@/lib/api"

interface PageProps {
  params: {
    slug: string
  }
  searchParams: {
    lang?: "en" | "bn"
  }
}

export default async function ProductClientPage({ params, searchParams }: PageProps) {
  try {
    const data = await getProductData(searchParams.lang)

    // Add defensive checks for data structure
    if (!data) {
      console.error("No data received from API")
      notFound()
    }

    console.log("API Response:", JSON.stringify(data, null, 2)) // Debug log

    // Safely access properties with fallbacks
    const media = data.media || []
    const sections = data.sections || []
    const checklist = data.checklist || []
    const ctaText = data.cta_text || { primary: "Enroll Now" }
    const seo = data.seo || { title: data.title || "IELTS Course", description: "Learn IELTS with expert instructors" }

    // Find trailer video safely
    const trailerVideo = media.find((media) => media.type === "video")

    // Separate sections by type safely
    const instructorSection = sections.find((s) => s.type === "instructor")
    const featuresSection = sections.find((s) => s.type === "features")
    const pointersSection = sections.find((s) => s.type === "pointers")
    const aboutSection = sections.find((s) => s.type === "about")

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header - Optional */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">10 Minute School</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Courses
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <Card>
                <CardContent className="p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.title || "IELTS Course"}</h1>
                </CardContent>
              </Card>

              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Description</h2>
                  {data.description ? (
                    <div
                      className="prose prose-sm max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  ) : (
                    <p className="text-gray-700">Course description will be available soon.</p>
                  )}
                </CardContent>
              </Card>

              {/* Instructors */}
              {instructorSection && <SectionRenderer section={instructorSection} />}

              {/* How the course is laid out */}
              {featuresSection && <SectionRenderer section={featuresSection} />}

              {/* What you will learn */}
              {pointersSection && <SectionRenderer section={pointersSection} />}

              {/* Course Exclusive Feature */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Exclusive Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Expert Instructors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Interactive Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Practice Tests</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Details */}
              {aboutSection && <SectionRenderer section={aboutSection} />}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Trailer */}
              {trailerVideo ? (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Trailer</h3>
                    <YouTubePlayer
                      videoUrl={trailerVideo.url}
                      thumbnail={trailerVideo.thumbnail}
                      title={data.title || "Course Trailer"}
                    />
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Preview</h3>
                    <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Course trailer coming soon</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">৳1,000</div>
                    <p className="text-gray-600 mb-4">One-time payment</p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                      {ctaText.primary}
                    </Button>
                    {ctaText.secondary && <p className="text-sm text-gray-500 mt-2">{ctaText.secondary}</p>}
                  </div>
                </CardContent>
              </Card>

              {/* Checklist */}
              {checklist.length > 0 ? (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get</h3>
                    <div className="space-y-3">
                      {checklist.map((item) => (
                        <ChecklistItem key={item.id} title={item.title} description={item.description} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get</h3>
                    <div className="space-y-3">
                      <ChecklistItem title="Comprehensive Course Materials" />
                      <ChecklistItem title="Expert Instructor Support" />
                      <ChecklistItem title="Practice Tests & Exercises" />
                      <ChecklistItem title="Certificate of Completion" />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </main>
      </div>
    )
  } catch (error) {
    console.error("Error loading product:", error)

    // Return a fallback UI instead of notFound() for better UX
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load Course</h2>
            <p className="text-gray-600 mb-6">
              We're having trouble loading the course information. Please check your connection and try again.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }
}
