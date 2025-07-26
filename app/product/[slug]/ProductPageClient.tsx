"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { getProductData } from "@/lib/api"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import InstructorSection from "@/components/instructor-section"
import FeaturesSection from "@/components/features-section"
import PointersSection from "@/components/pointers-section"
import ExclusiveFeaturesSection from "@/components/exclusive-features-section"
import AboutSection from "@/components/about-section"
import ChecklistSection from "@/components/checklist-section"
import TestimonialsSection from "@/components/testimonials-section"
import CourseSidebar from "@/components/course-sidebar"
import RelatedCourses from "@/components/related-courses"
import CourseCurriculum from "@/components/course-curriculum"
import CourseFeatures from "@/components/course-features"

interface PageProps {
  params: {
    slug: string
  }
  searchParams: {
    lang?: "en" | "bn"
  }
}

export default function ProductPageClient({ params, searchParams }: PageProps) {
  const router = useRouter()
  const pathname = usePathname()
  const urlSearchParams = useSearchParams()
  const [currentLang, setCurrentLang] = useState<"en" | "bn">(searchParams.lang || "bn")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Handle language change
  const handleLanguageChange = (newLang: "en" | "bn") => {
    setCurrentLang(newLang)
    const params = new URLSearchParams(urlSearchParams.toString())
    params.set("lang", newLang)
    router.push(`${pathname}?${params.toString()}`)
  }

  // Fetch data when language changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const productData = await getProductData(currentLang)
        setData(productData)
      } catch (err) {
        console.error("Error loading product:", err)
        setError(err instanceof Error ? err.message : "Failed to load course data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [currentLang])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#E14434] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">{currentLang === "en" ? "Loading course..." : "কোর্স লোড হচ্ছে..."}</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="w-16 h-16 bg-[#E14434] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl">!</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#000000] mb-4">
            {currentLang === "en" ? "Error Loading Course" : "কোর্স লোড করতে সমস্যা হচ্ছে"}
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {currentLang === "en"
              ? "Please check your internet connection and try again later"
              : "দয়া করে আপনার ইন্টারনেট সংযোগ চেক করে পরে আবার চেষ্টা করুন"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-[#E14434] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {currentLang === "en" ? "Try Again" : "আবার চেষ্টা করুন"}
          </button>
        </div>
      </div>
    )
  }

  // Extract data from API response with proper fallbacks
  const trailerVideo = data.media?.find((media: any) => media.name === "preview_gallery" && media.type === "video")

  const instructorSection = data.sections?.find((s: any) => s.type === "instructors")
  const featuresSection = data.sections?.find((s: any) => s.type === "features")
  const pointersSection = data.sections?.find((s: any) => s.type === "pointers")
  const aboutSection = data.sections?.find((s: any) => s.type === "about")
  const exclusiveFeaturesSection = data.sections?.find((s: any) => s.type === "feature_explanations")
  const testimonialsSection = data.sections?.find((s: any) => s.type === "testimonials")

  // Get instructor data with fallback
  const instructor = instructorSection?.values?.[0]

  // Get real student count from checklist
  const enrolledItem = data.checklist?.find((item: any) => item.text?.includes("Total Enrolled"))
  const studentCount = enrolledItem ? Number.parseInt(enrolledItem.text.match(/\d+/)?.[0] || "33007") : 33007

  // Get real duration from checklist
  const timeItem = data.checklist?.find((item: any) => item.text?.includes("Time Required"))
  const duration = timeItem ? timeItem.text.replace("Time Required ", "") : "50 hours"

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Hero Section with real trailer video */}
      <HeroSection
        title={data.title}
        rating={4.8}
        totalStudents={studentCount}
        duration={currentLang === "en" ? duration : "৫০ ঘন্টা"}
        trailerVideo={trailerVideo}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Description (HTML) */}
            {data.description && (
              <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-[#000000]">
                  {currentLang === "en" ? "Course Description" : "কোর্স বিবরণ"}
                </h2>
                <div
                  className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            )}

            {/* Course Instructors (real data from API) */}
            {instructor && (
              <InstructorSection
                name={instructor.name}
                title={instructor.short_description}
                image={instructor.image}
                description={instructor.description}
                currentLang={currentLang}
              />
            )}

            {/* Course Features Section (maintained from v6) */}
            <CourseFeatures />

            {/* How the course is laid out (real features from API) */}
            {featuresSection && featuresSection.values && (
              <FeaturesSection features={featuresSection.values} currentLang={currentLang} />
            )}

            {/* Course Curriculum (maintained from v6) */}
            <CourseCurriculum currentLang={currentLang} />

            {/* What you will learn (real pointers from API) */}
            {pointersSection && pointersSection.values && (
              <PointersSection pointers={pointersSection.values} currentLang={currentLang} />
            )}

            {/* Course Exclusive Features (real data from API) */}
            {exclusiveFeaturesSection && exclusiveFeaturesSection.values && (
              <ExclusiveFeaturesSection features={exclusiveFeaturesSection.values} currentLang={currentLang} />
            )}

            {/* Course Details (real about data from API) */}
            {aboutSection && aboutSection.values && (
              <AboutSection aboutItems={aboutSection.values} currentLang={currentLang} />
            )}

            {/* Check List (real checklist from API) */}
            {data.checklist && data.checklist.length > 0 && (
              <ChecklistSection checklist={data.checklist} currentLang={currentLang} />
            )}

            {/* Student Testimonials (real testimonials from API) */}
            {testimonialsSection && testimonialsSection.values && (
              <TestimonialsSection testimonials={testimonialsSection.values} currentLang={currentLang} />
            )}

            {/* Related Courses (maintained from v6) */}
            <RelatedCourses />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <CourseSidebar
                price={1000} // As requested
                originalPrice={1500}
                duration={currentLang === "en" ? duration : "৫০ ঘন্টা"}
                students={studentCount}
                certificate={true}
                currentLang={currentLang}
                trailerVideo={trailerVideo}
                courseTitle={data.title}
                ctaText={data.cta_text?.name || (currentLang === "en" ? "Enroll Now" : "এনরোল করুন")}
                checklist={data.checklist || []}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer (maintained from v6) */}
      <footer className="bg-[#000000] text-white py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-xl sm:text-2xl font-bold mb-4">
                10<span className="text-[#E14434]">minute</span>
                <br />
                <span className="text-sm">SCHOOL</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {currentLang === "en"
                  ? "Bangladesh's largest online education platform. Fulfill your dreams through quality education."
                  : "বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্ল্যাটফর্ম। গুণগত শিক্ষার মাধ্যমে আপনার স্বপ্ন পূরণ করুন।"}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 text-[#E14434]">
                {currentLang === "en" ? "Courses" : "কোর্স"}
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Academic Programs" : "একাডেমিক প্রোগ্রাম"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Skill Development" : "স্কিল ডেভেলপমেন্ট"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Language Learning" : "ভাষা শিক্ষা"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Job Preparation" : "চাকরি প্রস্তুতি"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 text-[#E14434]">
                {currentLang === "en" ? "Support" : "সাপোর্ট"}
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Contact" : "যোগাযোগ"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Help Center" : "সাহায্য কেন্দ্র"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {currentLang === "en" ? "Privacy Policy" : "প্রাইভেসি পলিসি"}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base sm:text-lg mb-4 text-[#E14434]">
                {currentLang === "en" ? "Download App" : "অ্যাপ ডাউনলোড"}
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-3 text-sm cursor-pointer transition-colors">
                  📱 Google Play Store
                </div>
                <div className="bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-3 text-sm cursor-pointer transition-colors">
                  🍎 App Store
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2024 10 Minute School. {currentLang === "en" ? "All rights reserved." : "সকল অধিকার সংরক্ষিত।"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
