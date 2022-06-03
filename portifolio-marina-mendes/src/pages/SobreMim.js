import Footer from "../components/Footer";
import Header from "../components/Header";

function SobreMim() {
  return (
    <div className="about-all">
      <Header />

      <div className="about-main">
        <img scr="https://pps.whatsapp.net/v/t61.24694-24/220819101_1693323334355083_2347323801895540830_n.jpg?ccb=11-4&oh=01_AVwpFEMv7H9fvS4iWW36CMSClnGsYMwgZOpDQ-JMz305YA&oe=62AB25F4" alt="Foto de Marina Mendes" className="foto-perfil"/>

        <div className="contato">
          <h2>Informações de contato</h2>
          <li>Idade: 25</li>
          <li>Contagem / MG</li>
          <li>Tel: (31)9.9802-2242</li>
          <li>Email: marina@sirq.com.br</li>
        </div>

        <div className="hobbies">
          <h2>Hobbies</h2>
          <li>Jogos eletrônicos</li>
          <li>Crochet</li>
          <li>Cozinhar</li>
          <li>Séries de Suspense</li>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default SobreMim;
