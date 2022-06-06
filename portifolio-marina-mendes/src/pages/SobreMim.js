import Footer from "../components/Footer";
import Header from "../components/Header";

function SobreMim() {
  return (
    <div className="about-all">
      <Header />

      <div className="about-main">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/220819101_1693323334355083_2347323801895540830_n.jpg?ccb=11-4&oh=01_AVwX0Txp2UNv7uyt9GltmwnBjLHlw5COtJlBDmE5HJGzag&oe=62AF8AF4" alt="Foto de Marina Mendes" className="foto-perfil"/>

        <div className="contato">
          <h2>Informações de contato</h2>
          <li>Idade: 25</li>
          <li>Contagem / MG</li>
          <li>Tel: (31)9.9802-2242</li>
          <li>Email: marina@sirq.com.br</li>
        </div>

        <div className="redes">
          <h2>Redes Sociais</h2>
          <li>
            <a href="https://www.linkedin.com/in/marina-mendess/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="img-logo" alt="Logo do LinkedIn"/>
            </a>
          </li>

          <li>
            <a href="https://github.com/Nicksam97" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="img-logo" alt="Logo do GitHub"/>
            </a>
          </li>

          {/* <li>
            <a href="https://www.instagram.com/marina__mendes/?hl=pt-br" target="_blank" rel="noreferrer">
              <img src="https://image.similarpng.com/very-thumbnail/2020/06/Instagram-logo-transparent-PNG.png" alt="Logo Instagram" className="img-logo" />
            </a>
          </li> */}
        </div>

        <div className="hobbies">
          <h2>Hobbies</h2>
          <li>Crochet</li>
          <li>Cozinhar</li>
          <li>Jogos eletrônicos</li>
          <li>Séries de Suspense</li>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default SobreMim;
