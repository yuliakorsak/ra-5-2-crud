import { useNavigate } from 'react-router-dom';
import PostContent from './PostContent';

export default function WallPost({ content }) {
  const navigate = useNavigate();
  const viewPost = () => {
    navigate("/posts/" + content.id);
  }
  return (
    <div className="post card" onClick={viewPost}>
      <PostContent content={content} />
      <div className="post__commentbox">
        <div className="avatar post__commentbox__avatar " />
        <input className="post__commentbox__input" placeholder="Напишите комментарий..." />
      </div>
    </div>
  );
}