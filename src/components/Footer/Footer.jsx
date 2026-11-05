
import './Footer.css'

const Footer = ({ mudarPagina }) => {
  return (
    <div className="footer">

        <div className="footer-content">

          <a href="/" className="footer-logo-link" aria-label="Arena Brisa - página principal" onClick={(event) => { event.preventDefault(); mudarPagina("inicio"); window.scrollTo(0, 0); }}><img src="/logo.png" alt="Arena Brisa" className="footer-logo" /></a>

          <div className="footer-info">

            <p>© 2026 Arena Brisa</p>

            <p className="privacy">
              Privacidade e dados
            </p>

            <p className="slogan">
              FEITA PARA O SEU MOVIMENTO
            </p>


          </div>


        </div>

    </div>
  )
}

export default Footer