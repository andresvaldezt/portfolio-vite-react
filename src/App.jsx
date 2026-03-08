import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
