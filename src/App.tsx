import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { Home } from '@/pages/Home'
import { Nosotros } from './pages/Nosotros'
import { Vida } from './pages/Vida'
import { Danos } from './pages/Danos'
import { Auto } from './pages/Auto'
import { Planes } from './pages/Planes'
import { Contacto } from './pages/Contacto'

function App() {
  
  return (
    <BrowserRouter basename="/Proyecto-Ampara">
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/vida' element={<Vida/>}/>
          <Route path='/danos' element={<Danos/>}/>
          <Route path="/auto" element={<Auto />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
