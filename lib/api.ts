import type { ProductData } from "@/types/product"

export async function getProductData(lang: "en" | "bn" = "en"): Promise<ProductData> {
  try {
    console.log(`Fetching product data for language: ${lang}`)

    const response = await fetch(
      `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
      {
        headers: {
          "X-TENMS-SOURCE-PLATFORM": "web",
          accept: "application/json",
        },
        next: { revalidate: 3600 }, // ISR: revalidate every hour
      },
    )

    console.log(`API Response status: ${response.status}`)

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API Error: ${response.status} - ${errorText}`)
      throw new Error(`Failed to fetch product data: ${response.status}`)
    }

    const apiData = await response.json()
    console.log("Raw API response:", apiData)

    const data = apiData.data || apiData

    // Validate that we have the minimum required data
    if (!data || typeof data !== "object") {
      throw new Error("Invalid API response format")
    }

    // Transform media array to match our interface
    const transformedMedia = (data.media || []).map((media: any) => ({
      id: media.name || Math.random(),
      type: media.resource_type === "video" ? "video" : "image",
      url:
        media.resource_type === "video"
          ? `https://www.youtube.com/watch?v=${media.resource_value}`
          : media.resource_value,
      thumbnail: media.thumbnail_url || media.resource_value,
      name: media.name,
      resource_value: media.resource_value,
    }))

    // Transform checklist
    const transformedChecklist = (data.checklist || []).map((item: any) => ({
      id: item.id || Math.random(),
      title: item.text || "",
      description: item.description || "",
      icon: item.icon || "",
      text: item.text || "",
    }))

    // Return data with proper transformations
    return {
      slug: data.slug || "ielts-course",
      id: data.id || 1,
      title: data.title || "IELTS Course",
      description: data.description || "",
      media: transformedMedia,
      checklist: transformedChecklist,
      seo: data.seo || {
        title: data.title || "IELTS Course",
        description: "Learn IELTS with expert instructors",
      },
      cta_text: data.cta_text || { primary: "Enroll Now" },
      sections: Array.isArray(data.sections) ? data.sections : [],
    }
  } catch (error) {
    console.error("Error in getProductData:", error)
    throw error
  }
}
