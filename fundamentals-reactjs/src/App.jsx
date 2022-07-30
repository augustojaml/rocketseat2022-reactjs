import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post author="Augusto Monteiro" />
          <Post author="Marlon Neiva" />
          <Post author="Márcio Neiva" />
          <Post author="Flávia Neiva" />
          <Post author="Marilene Neiva" />
          <Post />
        </main>
      </div>
    </>
  );
}
