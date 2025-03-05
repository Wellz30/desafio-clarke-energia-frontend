import { useEffect, useState } from "react";
import { getFornecedores, setFornecedor, getFornecedoresPorConsumo } from "./services/fornecedorService";
import { Modal } from "./components/Modal";
import './styles/App.css';

function App() {

  const [fornecedores, setFornecedores] = useState([]);
  const [consumoMensal, setConsumoMensal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitleModal] = useState("Nossos Fornecedores")

  const closeModal = () => setIsModalOpen(false);

  const buscaFornecedores = async () => {
    try {
      const data = await getFornecedores();
      setFornecedores(data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores");
    }
  };

  const setValorConsumo = (event) => {
    setConsumoMensal(event.target.value)
  }

  const buscaFornecedoresPorConsumo = async () => {
    if (consumoMensal > 0) {
      try {
        const data = await getFornecedoresPorConsumo(consumoMensal);
        setFornecedores(data);
        setTitleModal("Fornecedores encontrados")
        setIsModalOpen(true)
        setConsumoMensal("")
      } catch (error) {
        console.error("Erro ao buscar fornecedores por consumo.");
      }
    }else{
      const mensage = document.querySelector(".mensage-error");
      mensage.style.display = "inline"
      setTimeout(() => {
        mensage.style.display = "none"
      }, 2000);
    }
  };

  const buscaTodosFornecedores = () => {
    buscaFornecedores();
    setTitleModal("Nossos Fornecedores");
    setIsModalOpen(true)
  }

  useEffect(() => {
    buscaFornecedores();
  }, []);

  return (
    <div className="div-main">
      <div className="div-header">
        <div className="div-max-width">
          <img className="logo-image" src="https://clarke.com.br/assets/logo-clarke-energia-B3vZElX6.svg"></img>
          <h1 className="title">Desafio Técnico</h1>
          <div className="buttons-header">
            <button className="button-header" onClick={() => buscaTodosFornecedores()}>Fornecedores</button>
          </div>
        </div>
      </div>
      <div className="div-body">
        <div className="div-max-width" id="content">
          <div className="div-body-division">
            <div className="div-body-division-text"><div><span className="font-white">Sua empresa</span> eficiente <span className="font-white">no</span> mercado livre de energia</div></div>
            <div className="div-body-division-subititle">Simule agora, e encontre o melhor fornecedor para sua demanda.</div>
          </div>
          <div className="div-body-division-image">
            <div className="div-modal">
              <h1 className="font-black">Veja quais fornecedores podem te atender!</h1>
              <p className="description-text-modal">Deixe nossos especialistas analisarem o consumo mensal da sua empresa e mostrar quais fornecedores mais combinam com você.</p>
              <label className="label-text-modal">Informe seu consumo mensal (Kwh):</label>
              <input value={consumoMensal} className="input-consumo" type="number" onChange={(e) => setValorConsumo(e)}></input>
              <span className="mensage-error">O consumo mensal deve ser maior que zero</span>
              <button className="button-consumo" onClick={() => buscaFornecedoresPorConsumo()}>Enviar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="div-footer">
        <div className="div-max-width">

        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalTitle={titleModal}
        Arrayfornecedores={fornecedores}
      />
    </div>
  );
}

export default App;
