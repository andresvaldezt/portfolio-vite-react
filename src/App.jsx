import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { ThemeProvider } from './context/Themecontext.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const NotFoundPage = lazy(() => import('./pages/404.jsx'))

function App() {

  return (
    <ThemeProvider>
      <main className='flex flex-col min-h-screen bg-gray-800 light:bg-amber-50'>
        <Header></Header>
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path='*' element={ <NotFoundPage/> } />
          </Routes>
        </div>
        <Footer></Footer>
      </main>
    </ThemeProvider>
  )
}

export default App
