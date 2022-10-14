import { client } from 'client';
import Post from 'components/post'


export default function PostsPage( ) {
  const { usePosts } = client;
  const posts = usePosts()?.nodes ;

  return (
    <div>
      <h1> My posts page  </h1>
      {posts.map( post => (
        <div key={post.id}>
          <Post  post={post} />
        </div>
      ))}
    </div>
    );
}