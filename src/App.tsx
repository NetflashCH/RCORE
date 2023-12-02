import { Routes, Route } from 'react-router-dom'
import AddWhiteBoard from './components/AddWhiteBoard'
import Header from './components/Header'
import Home from './components/Home'
import EditData from './components/EditData'
import PageWrapper from './components/PageWrapper'
import { useEffect, useRef } from 'react'

function App() {
  const mainRef = useRef<HTMLMediaElement>(null)
  const closeRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      console.log(e.key)

      if (e.key === 'Escape') {
        mainRef.current?.classList.toggle('show')
      }
    })

    closeRef.current?.addEventListener('click', () => {
      mainRef.current?.classList.toggle('show')
    })
  }, [])

  return (
    <>
      <main
        ref={mainRef}
        className='
          flex
          place-content-center
          space-between
          gap-8
          mx-auto
          w-[1358.220px]
          h-[879px]
          opacity-0 
          relative
        '
      >
        <svg
          ref={closeRef}
          className='absolute top-3 right-3 cursor-pointer w-[25px] h-[25px] fill-[#0c0c12] z-30  bg-white rounded-md'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
        </svg>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/add-whiteboard'
            element={<AddWhiteBoard />}
          />
          <Route
            path='/editcardData'
            element={<EditData />}
          />
        </Routes>
      </main>
    </>
  )
}

export default App
