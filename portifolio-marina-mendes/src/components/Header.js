import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-all">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <h1 className="name">MARINA MENDES</h1>

      <div>
        <a href="https://www.linkedin.com/in/marina-mendess/" target="_blank" rel="noreferrer">
          {/* <img scr="../Imagens/linkedin" alt="Logo Linkedin"/> */}
          <p>LinkedIn</p>
        </a>

        <a href="https://github.com/Nicksam97" target="_blank" rel="noreferrer">
          {/* <img scr={require('../Imagens/GitHub.png')} alt="Logo GitHub"/> */}
          <p>GitHub</p>
        </a>
      </div>
      
    </header>
  )
}

export default Header;
