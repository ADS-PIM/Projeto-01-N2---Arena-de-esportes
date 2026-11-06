import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './ModalidadeCard.css'

const ModalidadeCard = ({nome, img, descricao, mudarPagina}) => {
  return (
    <div className="modalidade-card">
        <div className="modalidade-imagem">
            <img src={img} alt={nome} />
            <button className="modalidade-botao" aria-label={`Cadastrar interesse em ${nome}`} onClick={() => mudarPagina("cadastro")}>
                <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: -45 }} aria-hidden="true" />
            </button>
        </div>

        <h3>{nome}</h3>
        <p>{descricao}</p>
    </div>
  )
}

export default ModalidadeCard
