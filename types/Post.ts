import { PortableTextBlock } from 'sanity'

export type Post = {
  _id: string
  _createdAt: Date
  name: string
  slug: string
  image: string
  asset: {
    url: string
    metadata: {
      lqip: string
      demensions: {
        height: string
        weight: string
      }
    }
  }
  lqip: string
  content: PortableTextBlock[]
}
