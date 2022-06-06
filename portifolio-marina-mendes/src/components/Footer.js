import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <div className="footer-all">
      <Link to='/'>
        <img src="https://toppng.com/uploads/preview/home-icon-home-house-icon-house-icon-free-11553508857ouiuhg9nsa.png" alt="Home" className="img-footer" />
      </Link>

      <p>Marina Mendes ®</p>
    </div>
  )
}

export default Footer;
