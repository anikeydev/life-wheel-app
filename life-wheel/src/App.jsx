import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PolarChart from './components/PolarChart'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import TestPage from './pages/TestPage'
import TestResultsPage from './pages/TestResultPage'
import PublicResults from './pages/PublicResults'

export default function App() {
  const { token } = useSelector((state) => state.auth)
  return (
    <div className="d-flex justify-content-center align-item-center">
      {token && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/test" element={<TestPage />}></Route>
            <Route path="/results" element={<TestResultsPage />}></Route>
          </Routes>
        </BrowserRouter>
      )}
      {!token && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />}></Route>
          </Routes>
        </BrowserRouter>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/results/public/:publicId"
            element={<PublicResults />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// created backend anf frontend
// dev frontent, test, auth, test-results
// will dev ui, deploy, errors, validation, recomendation
