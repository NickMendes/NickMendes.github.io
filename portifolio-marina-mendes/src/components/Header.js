import { Link } from 'react-router-dom';
// import LinkedIn from '../Imagens/LinkedIn.png';
// import GitHub from '../Imagens/GitHub.png';

function Header() {
  return (
    <header className="header-all">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <h1>Marina Mendes</h1>

      <div>
        <a href="https://www.linkedin.com/in/marina-mendess/" target="_blank" rel="noreferrer">
          {/* <img scr={ LinkedIn } alt="Logo Linkedin"/> */}
          <p>LinkedIn</p>
        </a>

        <a href="https://github.com/Nicksam97" target="_blank" rel="noreferrer">
          {/* <img scr={ GitHub } alt="Logo GitHub"/> */}
          <p>GitHub</p>
        </a>
      </div>
      
    </header>
  )
}

export default Header;
