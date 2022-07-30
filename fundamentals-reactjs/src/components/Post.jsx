import styles from './Post.module.css';

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img
              className={styles.avatar}
              src="https://github.com/augustojaml.png"
              alt="Augusto Monteiro"
            />
            <div className={styles.authorInfo}>
              <strong>Augusto Monteiro</strong>
              <span>Web Developer</span>
            </div>
          </div>
          <time title="11 de maio às 08:13" datatype="2022-07-30 15:57:15">
            Publicado há 1h
          </time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return,
            evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>
          <p>
            <a href="#">👉 jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a>
          </p>
        </div>
      </article>
    </>
  );
}
