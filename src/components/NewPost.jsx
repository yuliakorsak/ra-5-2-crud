import { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { newPost } from '../API';


export default function NewPost() {
  const textarea = useRef(null);
  const navigate = useNavigate();

  const send = () => {
    newPost(JSON.stringify({ text: textarea.current?.value }))
      .then(() => navigate("/"));
  }

  return (
    <div className="new-post card">
      <Link className="new-post_close" to="/">✕</Link>
      <ul className="new-post__types">
        <li className="new-post__types__type current">Публикация</li>
        <li className="new-post__types__type">Фото/видео</li>
        <li className="new-post__types__type">Прямой эфир</li>
        <li className="new-post__types__type">Ещё</li>
      </ul>
      <textarea className="new-post__content textarea_post" placeholder="О чём думаете?" ref={textarea}></textarea>
      <div className="new-post__footer">
        <button className="new-post__footer__button button_accented" type="button" onClick={send}>Опубликовать</button>
      </div>
    </div>
  );
}
