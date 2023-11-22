import { Routes, Route } from 'react-router-dom'
import AddWhiteBoard from './components/AddWhiteBoard'
import Header from './components/Header'
import Home from './components/Home'
import EditData from './components/EditData'

function App() {
  return (
    <>
      <main
        className='
          flex
          place-content-center
          space-between
          gap-4
          mx-auto
          w-[1358.220px]
          h-[879px]
        '
      >
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
