import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faSun, faUsers } from '@fortawesome/free-solid-svg-icons'
import './Diferenciais.css'

const Diferenciais = () => {
  return (
    <div className="diferenciais">
        <div className="diferenciais-apresentacao">
            <h2>BOM PARA O CORPO. <br/>
                LEVE PARA A VIDA.    
            </h2>

        <p>Aqui o melhor do esporte vai além de jogar. Está no encontro, na troca e na vontade de voltar</p>
        </div>

        <div className="diferenciais-lista">

            <div className="diferencial-item">
                <div className="diferencial-icone"><FontAwesomeIcon icon={faSun} aria-hidden="true" /></div>
                <div className="diferencial-texto">
                    <h3>Ar livre. Energia de sobra.</h3>
                    <p>Sinta o sol, a brisa e a liberdade de praticar esporte fora das quatro paredes.</p>
                </div>
            </div>

            <div className="diferencial-item">
                <div className="diferencial-icone"><FontAwesomeIcon icon={faArrowRight} transform={{ rotate: -45 }} aria-hidden="true" /></div>
                <div className="diferencial-texto">
                    <h3>Seu começo tem espaço aqui.</h3>
                    <p>Não precisa chegar sabendo tudo. A vontade de se movimentar já é um ótimo primeiro passo.</p>
                </div>
            </div>

            <div className="diferencial-item">
                <div className="diferencial-icone"><FontAwesomeIcon icon={faUsers} aria-hidden="true" /></div>
                <div className="diferencial-texto">
                    <h3>Mais jogo, mais conexão</h3>
                    <p>Uma arena para dividir a quadra,conhecer pessoas e fazer do esporte parte da sua rotina.</p>
                </div>
            </div>
            
        </div>
    </div>

    
  )
}

export default Diferenciais
