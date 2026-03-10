import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))

function App() {

  return (
    <main className='bg-black light:bg-amber-50'>
      <Header></Header>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path='*' element={ <NotFoundPage/> } />
      </Routes>
      <Footer></Footer>
    </main>
  )
}

export default App
