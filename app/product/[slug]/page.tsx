import type { Metadata } from "next"
import ProductPageClient from "./ProductPageClient"

interface PageProps {
  params: {
    slug: string
  }
  searchParams: {
    lang?: "en" | "bn"
  }
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  try {
    const data = await getProductData(searchParams.lang)
    return {
      title: data.seo?.title || data.title,
      description: data.seo?.description || "Learn IELTS with expert instructors",
      keywords: data.seo?.keywords,
      openGraph: {
        title: data.seo?.title || data.title,
        description: data.seo?.description || "Learn IELTS with expert instructors",
        images: data.seo?.og_image ? [data.seo.og_image] : [],
      },
    }
  } catch (error) {
    return {
      title: "IELTS Course by Munzereen Shahid",
      description: "Master IELTS with expert guidance and comprehensive preparation",
    }
  }
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  return <ProductPageClient params={params} searchParams={searchParams} />
}
