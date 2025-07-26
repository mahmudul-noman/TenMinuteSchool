// "use client"

// import { useState } from "react"
// import { Star, Play, ChevronLeft, ChevronRight } from "lucide-react"
// import YouTubePlayer from "./youtube-player"

// interface Testimonial {
//   id: string
//   name: string
//   description: string
//   testimonial: string
//   profile_image: string
//   video_url?: string
//   thumb?: string
// }

// interface TestimonialsSectionProps {
//   testimonials: Testimonial[]
//   currentLang: "en" | "bn"
// }

// // Your exact testimonial text and similar ones
// const getTestimonialText = (name: string, currentLang: "en" | "bn") => {
//   const testimonials = {
//     bn: [
//       "প্রথম ভিডিওটা দেখেই বুঝেছিলাম যে কোর্সটা বেশ গোছানো এবং অন্যান্য কোর্সগুলোর মতন Advanced English-এ না পড়িয়ে মুনজেরিন আপু বাংলায় সবকিছু সুন্দর করে বুঝিয়েছেন। রিডিং পার্ট-এ প্র্যাক্টিসে-এর সময় ৪-৫-এর বেশি স্কোর তুলতে পারতাম না এবং এই কোর্সের রিডিং পার্টটা করে আমি আমার IELTS-এ স্কোর ৮ পেয়েছি। নিজের মত করে প্রিপারেশন নিতে কোর্সটি অনেক হেল্প করেছে।",
//       "মুনজেরিন আপুর শেখানোর পদ্ধতি দেখে মুগ্ধ হয়েছি। বাংলায় বুঝিয়ে দেওয়ার কারণে IELTS এর কঠিন বিষয়গুলো অনেক সহজ লেগেছে। আমার লিসেনিং স্কোর ৫ থেকে ৭.৫ এ উন্নতি হয়েছে। কোর্সের প্র্যাক্টিস টেস্টগুলো একদম রিয়েল এক্সামের মতো ছিল।",
//       "এই কোর্সটি করার আগে IELTS নিয়ে অনেক দুশ্চিন্তায় ছিলাম। কিন্তু মুনজেরিন আপুর গাইডলাইন মেনে চলে রাইটিং এ ৭ স্কোর পেয়েছি। বিশেষ করে Task 2 এর জন্য যে কৌশল শেখানো হয়েছে সেটা খুবই কার্যকর।",
//       "স্পিকিং নিয়ে আমার সবচেয়ে বেশি ভয় ছিল। কিন্তু এই কোর্সের স্পিকিং মডিউল শেষ করার পর আমার আত্মবিশ্বাস অনেক বেড়েছে। IELTS এ স্পিকিং এ ৭.৫ পেয়েছি। আপুর টিপসগুলো অসাধারণ।",
//       "অন্যান্য কোর্সে শুধু ইংরেজিতে পড়ানো হয় যা বুঝতে খুব কষ্ট হয়। কিন্তু এখানে বাংলা-ইংরেজি মিশিয়ে পড়ানোর ফলে সবকিছু পরিষ্কার হয়েছে। আমার সামগ্রিক স্কোর ৭.৫ পেয়েছি।",
//     ],
//     en: [
//       "From the first video, I realized this course is well-organized. Unlike other courses that teach in advanced English, Munzereen apa explained everything beautifully in Bengali. I couldn't score more than 4-5 in reading practice, but after completing the reading part of this course, I scored 8 in my IELTS. The course helped me a lot in preparing in my own way.",
//       "I was impressed by Munzereen apa's teaching method. Because she explains in Bengali, the difficult topics of IELTS seemed much easier. My listening score improved from 5 to 7.5. The practice tests in the course were exactly like the real exam.",
//       "Before taking this course, I was very worried about IELTS. But following Munzereen apa's guidelines, I scored 7 in writing. The technique taught for Task 2 was very effective.",
//       "I was most afraid of speaking. But after completing the speaking module of this course, my confidence increased a lot. I got 7.5 in IELTS speaking. Apa's tips are amazing.",
//       "Other courses only teach in English which is very difficult to understand. But here, teaching in a mix of Bengali-English made everything clear. I got an overall score of 7.5.",
//     ],
//   }

//   const hash = name.split("").reduce((a, b) => a + b.charCodeAt(0), 0)
//   return testimonials[currentLang][hash % testimonials[currentLang].length]
// }

// export default function TestimonialsSection({ testimonials, currentLang }: TestimonialsSectionProps) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [playingVideo, setPlayingVideo] = useState<string | null>(null)

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   if (!testimonials || testimonials.length === 0) {
//     return null
//   }

//   return (
//     <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
//       <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-[#000000] text-center">
//         {currentLang === "en" ? "Students Opinion" : "শিক্ষার্থীদের মতামত"}
//       </h2>

//       <div className="relative">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 border border-blue-100"
//             >
//               <div className="flex items-center space-x-3 mb-4">
//                 <img
//                   src={testimonial.profile_image || "/placeholder.svg"}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-[#E14434]"
//                 />
//                 <div>
//                   <h4 className="font-bold text-[#000000]">{testimonial.name}</h4>
//                   <p className="text-sm text-[#E14434] font-semibold">{testimonial.description}</p>
//                 </div>
//               </div>

//               {testimonial.video_url && (
//                 <div className="mb-4">
//                   {playingVideo === testimonial.video_url ? (
//                     <YouTubePlayer
//                       videoId={testimonial.video_url}
//                       thumbnail={testimonial.thumb}
//                       title={`${testimonial.name} testimonial`}
//                     />
//                   ) : (
//                     <div
//                       className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
//                       onClick={() => setPlayingVideo(testimonial.video_url)}
//                     >
//                       <img
//                         src={
//                           testimonial.thumb || `https://img.youtube.com/vi/${testimonial.video_url}/maxresdefault.jpg`
//                         }
//                         alt={testimonial.name}
//                         className="w-full h-full object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
//                         <div className="bg-[#E14434] rounded-full p-3 group-hover:scale-110 transition-transform">
//                           <Play className="w-6 h-6 text-white fill-current ml-1" />
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//               <p className="text-sm text-gray-700 leading-relaxed italic">
//                 "{testimonial.testimonial || getTestimonialText(testimonial.name, currentLang)}"
//               </p>

//               <div className="flex items-center mt-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {testimonials.length > 3 && (
//           <div className="flex justify-center items-center space-x-4 mt-6">
//             <button
//               onClick={prevTestimonial}
//               className="p-2 rounded-full bg-[#E14434] text-white hover:bg-red-600 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <span className="text-sm text-gray-600">
//               {Math.floor(currentIndex / 3) + 1} / {Math.ceil(testimonials.length / 3)}
//             </span>
//             <button
//               onClick={nextTestimonial}
//               className="p-2 rounded-full bg-[#E14434] text-white hover:bg-red-600 transition-colors"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }







import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Testimonial {
  id: string | number;
  name: string;
  profile_image: string;
  testimonial?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - visibleCount + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % testimonials.length;
      return testimonials[index];
    });
  };

  return (
    <div className="w-full px-4 py-10 bg-[#FFFFFF]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#000000]">Students' Opinion</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-[#E14434] text-[#E14434] hover:bg-[#E14434] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-[#E14434] text-[#E14434] hover:bg-[#E14434] hover:text-white transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getVisibleTestimonials().map((t) => (
          <div
            key={t.id}
            className="rounded-xl bg-gradient-to-br from-[#FFE7E4] to-[#FFF5F4] p-4 sm:p-6 border border-[#E14434]/20 shadow-sm"
          >
            <div className="flex items-center mb-4">
              <Image
                src={t.profile_image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="ml-3">
                <p className="font-semibold text-sm text-[#000000]">{t.name}</p>
              </div>
            </div>
            <p className="text-sm text-[#000000] whitespace-pre-line">
              {typeof t.testimonial === "string"
                ? t.testimonial.length > 300
                  ? t.testimonial.slice(0, 300) + "..."
                  : t.testimonial
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
