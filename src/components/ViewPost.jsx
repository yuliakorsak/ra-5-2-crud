import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPosts, deletePost, updatePost } from '../API';
import PostContent from './PostContent';

export default function ViewPost() {
  const [content, setContent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const textarea = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  const openEditor = () => {
    setEditMode(true);
  }

  const remove = () => {
    deletePost(id).then(navigate('/'));
  }

  const savePost = () => {
    updatePost(id, JSON.stringify({ text: textarea.current?.value })).then(() => {
      setEditMode(false);
      setContent(null);
    });
  }

  const closeEditor = () => {
    setEditMode(false);
  }

  if (!editMode) {
    if (content) {
      return (
        <div className="post card">
          <PostContent content={content} />
          <div className="post__actions">
            <button className="button_accented" type="button" onClick={openEditor}>Изменить</button>
            <button className="button_accented button_negative" type="button" onClick={remove}>Удалить</button>
          </div>
        </div>
      )
    } else {
      getPosts('/posts/' + id).then((result) => {
        const { post } = result;
        setContent(post);
      });
      return null;
    }
  } else {
    return (
      <div className="editor card">
        <div className="editor__close" onClick={closeEditor}>✕</div>
        <div className="editor__title">Редактировать публикацию</div>
        <textarea className="editor__content  textarea_post" ref={textarea} defaultValue={content.text}></textarea>
        <div className="editor__save">
          <button className="button_accented" onClick={savePost}>Сохранить</button>
        </div>
      </div>
    );
  }
}
