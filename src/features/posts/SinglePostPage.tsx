import { Link, useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/hooks'
import { selectPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from '@/components/TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectCurrentUserId } from '../auth/authSlice'
import { selectUserById } from '../users/usersSlice'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const currentUserId = useAppSelector(selectCurrentUserId)!
  const post = useAppSelector((state) => selectPostById(state, postId!))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  const canEdit = currentUserId === post.userId

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <br />
        {canEdit && (
          <Link to={`/editPost/${post.id}`} className="button">
            Edit Post
          </Link>
        )}
      </article>
    </section>
  )
}
