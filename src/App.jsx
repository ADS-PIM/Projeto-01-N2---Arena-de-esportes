import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/homePage/HomePage'
import RegisterPage from './pages/registerPage/RegisterPage'

function App() {

    const [pagina, setPagina] = useState("inicio")

    return (
        <div className="app">

            <Header pagina={pagina} mudarPagina={setPagina}/>

            <main>
                {pagina === "inicio" ? (
                    <HomePage mudarPagina={setPagina}/>
                ) : (
                    <RegisterPage/>
                )}
            </main>

            <Footer mudarPagina={setPagina}/>

        </div>
    )
}

export default App