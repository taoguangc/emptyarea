export type Posts = [
  {
    _id: string
    _createdAt: Date
    title: string
    slug: string
    mainImage: string
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
    body: string
  }
]
