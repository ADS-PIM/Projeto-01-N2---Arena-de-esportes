import React from 'react'
import './HomePage.css'
import ModalidadeCard from '../../components/ModalidadeCard/ModalidadeCard';
import Diferenciais from '../../components/Diferenciais/Diferenciais';

const HomePage = ({ mudarPagina }) => {

  const modalidades = [{
    id: 1,
    nome: "Beach tennis",
    img: "/beach-tennis.png",
    descricao: "Trocas rápidas, energia lá em cima e a leveza de jogar em dupla. Um convite para se apaixonar pela areia."
  }, 
  {
    id: 2,
    nome: "Vôlei de praia",
    img: "/volei-praia.png",
    descricao: "Do primeiro toque ao ponto final, cada jogada é uma chance de se superar e criar sintonia com o time."
  },
  {
    id: 3,
    nome: "Futevôlei",
    img: "/futevolei.png",
    descricao: "Controle de bola, parceria e movimento no corpo inteiro. A criatividade do futebol em um novo terreno."
  }]

  return (
    <div className="home">
        <div className="home-banner">
          <img src="/banner.png" alt="" className="banner-imagem" />
            <div className="banner-conteudo">
                <p className="banner-destaque"><span className="banner-destaque-ponto">●</span> ESPORTE AO AR LIVRE. VIDA EM MOVIMENTO.</p>
                <h1>SEU PRÓXIMO <br/> PONTO DE <br/> ENCONTRO.</h1>
                <p className="banner-descricao">Uma pausa na rotina. Um novo jeito de se mover. Na Arena Brisa, o esporte e as boas conexões se encontram na areia.</p>

                <button className="banner-botao" onClick={() => mudarPagina("cadastro")}> Faça parte da Brisa</button>
            </div>  
        </div>

        <div className="home-conteudo">
            <div className="home-apresentacao">
                <h2>Menos rotina. <br/> Mais pé na areia</h2>
                <div className="apresentacao-texto">
                    <h3>Um espaço para trocar a pressa pelo jogo e transformar movimento em encontro.</h3>  
                    <p>A Arena Brisa reúne esportes de areia em um ambiente leve e acolhedor. Para quem está começando ou já leva o jogo no peito, sempre existe um novo jeito de entrar nessa energia.</p>
                </div>
        </div>

        <div className="home-modalidades">
            <div className="modalidades-cabecalho">
                <h2>Qual é o seu jogo?</h2>  
                <p>Encontre a modalidade que combina com você.</p>
        </div>
        
        <div className="modalidades-lista">
          {modalidades.map((modalidade) => (
              <ModalidadeCard
                  key={modalidade.id}
                  nome={modalidade.nome}
                  img={modalidade.img}
                  descricao={modalidade.descricao}
                  mudarPagina={mudarPagina}/>
          ))}
        </div>
        </div>
    </div>

    <Diferenciais/>

  </div>
  )
}

export default HomePage