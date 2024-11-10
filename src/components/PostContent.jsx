import moment from 'moment';
import 'moment/dist/locale/ru';
moment.locale('ru');

export default function PostContent({ content }) {
  return (
    <>
      <div className="post__head">
        <div className="avatar post__head__avatar " />
        <div className="post__head__username">User User</div>
        <div className="post__head__role">Основатель группы</div>
        <div className="post__head__time">{moment(content.created).fromNow()}</div>
      </div>
      <div className="post__body">{content.text}</div>
      <div className="post__footer">
        <button type="button" className="post__footer__like">Нравится</button>
        <button type="button" className="post__footer__comment">Комментировать</button>
      </div>
    </>
  );
}