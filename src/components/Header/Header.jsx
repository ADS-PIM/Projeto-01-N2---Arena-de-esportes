
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = ({ pagina, mudarPagina}) => {
  return (
    <div className="header">

        <a href="/" className="header-logo-link" aria-label="Arena Brisa - página principal" onClick={(event) => { event.preventDefault(); mudarPagina("inicio"); window.scrollTo(0, 0); }}><img src="/logo.png" alt="Arena Brisa" className="header-logo" /></a>

        {pagina === "inicio" ? (
            <button className="btn-register" onClick={() => mudarPagina("cadastro")}>
                Quero me Cadastrar <FontAwesomeIcon icon={faArrowRight} transform={{ rotate: -45 }} aria-hidden="true" />
            </button>
        ) : (
            <button className="btn-goBack" onClick={() => mudarPagina("inicio")}>
                <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Voltar para o início
            </button>
        )}
        
    </div>
  )
}

export default Header
