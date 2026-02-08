import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/:slug" element={<AppDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
