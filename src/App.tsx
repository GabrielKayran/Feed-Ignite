import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './global.css'
import styles from './App.module.css'




const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielkayran.png',
      name: 'Gabriel Kayran',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Salve 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '
      },
      { type: 'link', content: ' gekas.design/doctorcare' }
    ],
    publishedAt: new Date('2024-01-17 12:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/oluizcarvalho.png',
      name: 'Luiz Carvalho',
      role: 'Tech Leader Frontend'
    },
    content: [
      { type: 'paragraph', content: 'Opaaa, tudo bem? 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '
      },
      { type: 'link', content: ' luiz.design/doctorcare' }
    ],
    publishedAt: new Date('2024-01-15 12:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
