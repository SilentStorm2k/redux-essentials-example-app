import { useAppSelector } from '@/app/hooks'
import { Link } from 'react-router-dom'
import { selectAllPosts } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from '@/components/TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export default function PostsLists() {
  const posts = useAppSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
