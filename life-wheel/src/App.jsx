import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PolarChart from './components/PolarChart'
import Login from './components/Login'
import Home from './components/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" exact element={<Home />} />
        <Route path="whell" element={<PolarChart />} />
      </Routes>
    </BrowserRouter>
  )
}
