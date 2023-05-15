import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import { Routes, Route, } from 'react-router-dom'
import Policies from './pages/Policies/Policies'
function App() {
  return (
    <>
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/policies'
        element={<Policies />}
      />
    </Routes>
    </>
  )
}

export default App
