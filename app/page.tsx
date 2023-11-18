import { getPosts } from '@/libs/sanity'

export default async function Home() {
  const posts = await getPosts()
  return (
    <div className='mx-auto container p-8'>
      <h1>博客列表</h1>
      {posts.map(post => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  )
}
