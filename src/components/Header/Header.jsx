import React from 'react'
import './Header.css'

const Header = ({ pagina, mudarPagina}) => {
  return (
    <div className="header">

        <img src="/logo.png" alt="" className="header-logo" />

        {pagina === "inicio" ? (
            <button className="btn-cadastro" onClick={() => mudarPagina("cadastro")}>
                Quero me Cadastrar ↗
            </button>
        ) : (
            <button className="btn-cadastro" onClick={() => mudarPagina("inicio")}>
                ← Voltar para o início
            </button>
        )}
        
    </div>
  )
}

export default Header