import { useState } from 'react';
import { Link } from 'react-router-dom';
import WallPost from './WallPost';
import { getPosts } from '../API';

export default function HomePage() {
  const [posts, setPosts] = useState(null);

  if (posts) {
    return (
      <>
        <div className="create-post card">
          <Link className="create-post__button button_accented" to="/posts/new">Создать пост</Link>
        </div>
        {posts ? posts.map(post => <WallPost content={post} key={post.id} />) : null}
      </>
    );
  }
  else {
    getPosts('/posts').then(result => setPosts([...result]));
    return null;
  };
}
