import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-all">
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <h1 className="name">MARINA MENDES</h1>

      <h2 className="nada">.</h2>      
    </header>
  )
}

export default Header;
