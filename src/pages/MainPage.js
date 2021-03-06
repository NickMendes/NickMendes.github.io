import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function MainPage() {
  return (
    <div className="main-all">
      <div className="main-main">
        <h1>Bem vindo ao meu Portifólio</h1>

        <div className="main-infos">
          <p>Meu nome é Marina Mendes, conhecida como Nick, tenho 25 anos.</p>
          <p>Aos 23 anos eu me graduei em Engenharia Civil pela PUC Minas e comecei a estudar sobre as normas técnicas da ISO 9001:2015 e PBQPH, mas aos 24 anos decidi me dedicar a área de tecnologia da qual sempre fui apaixonada.</p>
          <p>Em janeiro de 2022 entrei na Turma 20-A da Trybe, uma escola de Desenvolvimento Web com mais de 1500 horas de formacão que aborda fundamentos de desenvolvimento web, Front-end, Back-end, ciências da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.</p>
          <p>Atualmente procuro emprego na área de Front-end, para colocar em prática todos os conhecimentos já adquiridos e ter a possibilidade de aprender ainda mais.</p>
        </div>

        <div className="main-btns-area">
          <Link to="/sobremim">
            <h2 className="main-btns">Sobre</h2>
          </Link>

          <Link to="/curriculo">
            <h2 className="main-btns">Currículo</h2>
          </Link>
          
          <Link to="/portifolio">
            <h2 className="main-btns">Portifólio</h2>
          </Link>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default MainPage;