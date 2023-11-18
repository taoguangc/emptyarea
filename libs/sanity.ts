import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: '2023-11-18',
  useCdn: false
})

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post" && defined(slug.current)]')
  return posts
}

export async function createPost(post: Post) {
  const result = client.create(post)
  return result
}

export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({ title })
  return result
}
