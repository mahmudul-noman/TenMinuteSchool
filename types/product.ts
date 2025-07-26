export interface Medium {
  id: number | string
  type: string
  url: string
  thumbnail?: string
  name?: string
  resource_value?: string
}

export interface Checklist {
  id: number | string
  title: string
  description?: string
  icon?: string
  text?: string
}

export interface Seo {
  title: string
  description: string
  keywords?: string
  og_image?: string
}

export interface CtaText {
  primary?: string
  secondary?: string
  name?: string
  value?: string
}

export interface SectionContent {
  title?: string
  description?: string
  items?: Array<{
    id: number
    title: string
    description?: string
    image?: string
    designation?: string
  }>
}

export interface Section {
  id?: number
  type: string
  name?: string
  title?: string
  content?: SectionContent
  values?: any[]
}

export interface ProductData {
  slug: string
  id: number
  title: string
  description: string
  media: Medium[]
  checklist: Checklist[]
  seo: Seo
  cta_text: CtaText
  sections: Section[]
}
