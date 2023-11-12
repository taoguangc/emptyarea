import { groq } from 'next-sanity'
import { client } from './client'
import { Post } from '@/types/Post'

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'asset': mainImage.asset->,
      'image': mainImage.asset->url,
      body
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'image': mainImage.asset->url,
      'lqip': mainImage.asset->metadata.lqip,
      body
    }`,
    { slug }
  )
}

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`
