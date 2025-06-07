import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
        <p className="pb-8">Helps me keep track of experiences, ideas and philosophies learn from.</p>
      <BlogPosts />
    </section>
  )
}
