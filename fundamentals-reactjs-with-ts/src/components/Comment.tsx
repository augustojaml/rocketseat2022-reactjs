import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: {
    id: number;
    comment: string;
  };
  deleteComment: (commentId: number) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(commentId: number) {
    deleteComment(commentId);
  }

  function handleLikeComment() {
    setLikeCount((oldState) => oldState + 1);
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/augustojaml.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndType}>
                <strong>Augusto Monteiro</strong>
                <time title="11 de maio às 08:13" datatype="2022-07-30 15:57:15">
                  Cerca de 1h atrás
                </time>
              </div>
              <button onClick={() => handleDeleteComment(content.id)} title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>
            <p>{content.comment}</p>
          </div>
          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
