import Footer from "../components/Footer";

function Curriculo() {
  return (
    <div className="curr-all">
      <div className="curr-main">
        <h1>Desenvolvedora Web & Engenheira Civil</h1>

        <div className="obj-prof">
          <h2>Objetivo Profissional</h2>
          <p>Sou Engenheira civil de formação com amplo conhecimento em gestão de qualidade.
          Estou em transição de carreira para área de tecnologia, estudo Desenvolvimento Web na
          Trybe e procuro um oportunidade de trabalhar com Front End.</p>
        </div>

        <div className="formacao-all">
          <h2>Formação</h2>

          <div className="formacao">
            <h3>Trybe</h3>
            <h4>Desenvolvimento Web Full Stack - JavaScript</h4>
            <li>Jan 2022 - Ainda cursando (previsão de finalização em Jan 2023)</li>
          </div>

          <div className="formacao">
            <h3>HGB constultoria e Gestão</h3>
            <h4>Auditor líder do sistema de gestão da qualidade ABNT NBR 9001:2015</h4>
            <li>Fev de 2021</li>
          </div>

          <div className="formacao">
            <h3>Pontifícia Universidade Católica - MG</h3>
            <h4>Bacharel em Engenharia Civil</h4>
            <li>Jan de 2015 a Dez de 2021</li>
          </div>
        </div>

        <div className="exp-prof">
          <div className="exps">
            <h2>BHD Obras e Reformas LTDA</h2>
            <h3>Assistente Administrativa</h3>
            <li>Set de 2020 a Jun de 2022</li>
            <li>Comunicação com os clientes, acompanhamento de orçamentos, serviços gerais de agendamento de visitas, suprimento e vendas</li>
          </div>

          <div className="exps">
            <h2>Minas Brasil Móveis LTDA</h2>
            <h3>Assistente de Qualidade</h3>
            <li>Jun de 2018 a Nov de 2019</li>
            <li>Trabalho na implementação e manutenção da ISO 9001:2015 da empresa, trabalhando lado a lado do consultor de qualidade criando plano de gestão de qualidade e instruções
            de qualidade</li>
          </div>
        </div>

        <div className="tec">
          <h2>Principais Tecnologias</h2>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>RTL</li>
          <li>AutoCAD</li>
        </div>

        <div className="idiomas">
          <h2>Idiomas</h2>
          <li>Inglês Avançado</li>
          <li>Espanhol Intermediário</li>
        </div>

        <div className="outras">
          <h2>Outras Comtetências</h2>
          <li>NBR ISO 9001:2015</li>
          <li>Pontualidade</li>
          <li>Organização</li>
          <li>CNH - Tipo B</li>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Curriculo;
