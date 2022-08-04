import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ post }) {
  const [comments, setComments] = useState([
    {
      id: new Date().getTime(),
      comment: 'Post muito top... 👏👏',
    },
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(e) {
    e.preventDefault();
    const newComment = {
      id: new Date().getTime(),
      comment: newCommentText,
    };
    setComments([...comments, newComment]);
    setNewCommentText('');
  }

  function deleteComment(commentId) {
    const updatedComment = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComment);
    // console.log(updatedComment);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={post.author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} datatype={post.publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {post.content.map((line, i) => {
            if (line.type === 'paragraph') {
              return <p key={i}>{line.content}</p>;
            } else if (line.type === 'link') {
              return (
                <p key={i}>
                  <a href="#">{line.content}</a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder="Deixe um comentário"
            name="newCommentText"
            value={newCommentText}
            onChange={(e) => {
              e.target.setCustomValidity('');
              setNewCommentText(e.target.value);
            }}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={newCommentText.length === 0}>
              Publicar
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              content={comment}
              deleteComment={() => deleteComment(comment.id)}
            />
          ))}
        </div>
      </article>
    </>
  );
}
