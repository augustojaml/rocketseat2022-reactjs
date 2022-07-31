import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
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
              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>
            <p>{content.comment}</p>
          </div>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
