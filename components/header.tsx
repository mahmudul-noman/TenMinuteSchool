

"use client"

import { Search, User, Globe, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeaderProps {
  currentLang?: "en" | "bn"
  onLanguageChange?: (lang: "en" | "bn") => void
}

export default function Header({ currentLang = "bn", onLanguageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const switchLanguage = (newLang: "en" | "bn") => {
    if (onLanguageChange) {
      onLanguageChange(newLang)
    } else {
      const url = new URL(window.location.href)
      url.searchParams.set("lang", newLang)
      window.location.href = url.toString()
    }
  }

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Search */}
          <div className="flex items-center space-x-4 lg:space-x-6 flex-1">
            <a href="/" className="flex items-center flex-shrink-0">
              <img
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                alt="10 Minute School Logo"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
            <div className="relative hidden md:block flex-1 max-w-md self-center">
              <Search className="w-4 h-4 absolute left-3 top-[45%] transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={currentLang === "en" ? "Search courses..." : "কোর্স খুঁজুন..."}
                className="pl-10 pr-4 py-1.5 text-sm rounded-md border border-gray-300 text-black w-full focus:outline-none focus:ring-2 focus:ring-[#E14434] focus:border-[#E14434]"
              />
            </div>
          </div>

          {/* Center Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {["Academic", "Skills", "Admission", "Jobs", "Language"].map((label, i) => (
              <a key={i} href="#" className="hover:text-[#E14434] transition-colors text-sm whitespace-nowrap">
                {currentLang === "en" ? label : ["একাডেমিক", "স্কিল", "ভর্তি", "চাকরি", "ভাষা"][i]}
              </a>
            ))}
          </nav>

          {/* Right: Language, Phone, Login, Mobile Menu */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="hidden sm:flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <div className="flex bg-white rounded border-2 border-[#E14434] overflow-hidden">
                {["en", "bn"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => switchLanguage(lang as "en" | "bn")}
                    className={`px-2 py-1 text-xs font-semibold transition-colors ${
                      currentLang === lang
                        ? "bg-[#E14434] text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {lang === "en" ? "EN" : "বাং"}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden sm:flex items-center space-x-1 text-[#E14434] font-semibold text-sm">
              <Phone className="w-4 h-4" />
              <span>16910</span>
            </div>

            <Button className="hidden sm:flex bg-[#E14434] hover:bg-[#c5352a] text-white text-sm px-3 py-2">
              <User className="w-4 h-4 mr-1" />
              {currentLang === "en" ? "Login" : "লগইন"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-black hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-[45%] transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={currentLang === "en" ? "Search courses..." : "কোর্স খুঁজুন..."}
                  className="pl-10 pr-4 py-2 rounded-lg text-sm text-black border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#E14434] focus:border-[#E14434]"
                />
              </div>

              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{currentLang === "en" ? "Language:" : "ভাষা:"}</span>
                <div className="flex bg-white rounded border-2 border-[#E14434] overflow-hidden">
                  {["en", "bn"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLanguage(lang as "en" | "bn")}
                      className={`px-3 py-2 text-xs font-semibold transition-colors ${
                        currentLang === lang
                          ? "bg-[#E14434] text-white"
                          : "bg-white text-black hover:bg-gray-100"
                      }`}
                    >
                      {lang === "en" ? "EN" : "বাং"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-center space-x-2 text-[#E14434] font-semibold">
                <Phone className="w-4 h-4" />
                <span>16910</span>
                <span className="text-sm text-black">({currentLang === "en" ? "Hotline" : "হটলাইন"})</span>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col space-y-3 border-t border-gray-200 pt-4">
                {["Academic Programs", "Skill Development", "Admission Test", "Job Preparation", "Language Learning"].map(
                  (label, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-[#E14434] transition-colors text-sm py-2"
                    >
                      {currentLang === "en"
                        ? label
                        : ["একাডেমিক প্রোগ্রাম", "স্কিল ডেভেলপমেন্ট", "ভর্তি পরীক্ষা", "চাকরি প্রস্তুতি", "ভাষা শিক্ষা"][i]}
                    </a>
                  )
                )}
              </nav>

              {/* Mobile Login */}
              <Button className="bg-[#E14434] hover:bg-[#c5352a] text-white w-full">
                <User className="w-4 h-4 mr-2" />
                {currentLang === "en" ? "Login" : "লগইন"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
