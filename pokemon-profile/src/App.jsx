import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/About" element= {< AboutPage />} />
      <Route path="/pokemon/:name" element= {< PokemonPage />} />
    </Routes>
    
  )
}
export default App
