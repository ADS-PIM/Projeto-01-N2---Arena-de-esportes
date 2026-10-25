import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const [pagina, setPagina] = useState("inicio")

  return (
    <div className="app">
        <Header pagina={pagina} mudarPagina={setPagina}/>
        <Footer/>
    </div>
  )
}

export default App
