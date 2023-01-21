import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import PokedexDatail from './components/PokedexDatail'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <HashRouter>
        <Header/>
        
        <Routes>
          <Route path='/' element={<InputName/>}/>
         
          <Route element={<ProtectedRoutes/>}>

          <Route path='/pokemon' element={<Pokedex/>}/>
          <Route path='/pokemon/:id' element={<PokedexDatail/>}/>

          </Route>
      
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
