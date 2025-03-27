import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PolarChart from './components/PolarChart'
import Login from './components/Login'
import HomePage from './routes/HomePage'
import TestPage from './routes/TestPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" exact element={<HomePage />} />
        <Route path="whell" element={<PolarChart />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  )
}
