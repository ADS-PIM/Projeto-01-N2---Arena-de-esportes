import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';

function App() {

  const [pagina, setPagina] = useState("inicio")

  return (
    <div className="app">
        <Header pagina={pagina} mudarPagina={setPagina}/>
    </div>
  )
}

export default App
