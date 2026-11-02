import React from 'react'
import './ModalidadeCard.css'

const ModalidadeCard = ({nome, img, descricao, mudarPagina}) => {
  return (
    <div className="modalidade-card">
        <div className="modalidade-imagem">
            <img src={img} alt={nome} />
            <button className="modalidade-botao" onClick={() => mudarPagina("cadastro")}>
                🡥
            </button>
        </div>

        <h3>{nome}</h3>
        <p>{descricao}</p>
    </div>
  )
}

export default ModalidadeCard