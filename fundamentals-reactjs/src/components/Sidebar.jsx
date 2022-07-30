import { PencilSimpleLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <>
      <aside className={styles.sideBar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        />
        <div className={styles.profile}>
          <img
            className={styles.avatar}
            src="https://github.com/augustojaml.png"
            alt="Augusto Monteiro"
          />

          <strong>Augusto Monteiro</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilSimpleLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
