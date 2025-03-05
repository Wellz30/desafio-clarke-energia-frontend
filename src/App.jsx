import { useEffect, useState } from "react";
import { getFornecedores, setFornecedor, getFornecedoresPorConsumo } from "./services/fornecedorService";
import { Modal } from "./components/Modal";
import './styles/App.css';

function App() {

  const [fornecedores, setFornecedores] = useState([]);
  const [consumoMensal, setConsumoMensal] = useState("100");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const novoFornecedor = {
    nome: "Fornecedor Teste 44",
    logo: "https://exemplo.com/logo.png",
    estado: "SP",
    custoPorKwh: 0.50,
    limiteMinimoKwh: 100,
    numeroClientes: 500,
    avaliacaoMedia: 4.5,
  };

  const buscaFornecedores = async () => {
    try {
      const data = await getFornecedores();
      setFornecedores(data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores");
    }
  };

  const cadastraFornecedor = async () => {
    try {
      const response = await setFornecedor(novoFornecedor);
      console.log("Fornecedor cadastrado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao cadastrar fornecedor");
    }
  };

  const buscaFornecedoresPorConsumo = async () => {
    try {
      const data = await getFornecedoresPorConsumo(consumoMensal);
      setFornecedores(data);
      console.log("Fornecedores encontrados:", data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores por consumo.");
    }
  };

  useEffect(() => {
    buscaFornecedores();
  }, []);

  useEffect(() => {
    console.log(fornecedores);
  }, [fornecedores]);

  return (
    <div className="div-main">
      <div className="div-header">
        <div className="div-max-width">
          <img className="logo-image" src="https://clarke.com.br/assets/logo-clarke-energia-B3vZElX6.svg"></img>
          <h1 className="title">Desafio Técnico</h1>
          <div className="buttons-header">
            <button className="button-header" onClick={openModal}>Fornecedores</button>
          </div>
        </div>
      </div>
      <div className="div-body">
        <div className="div-max-width" id="content">
          <div className="div-body-division">
            <div className="div-body-division-text"><span className="font-white">Sua empresa</span> eficiente <span className="font-white">no</span> mercado livre de energia</div>
            <div className="div-body-division-subititle">Simule agora, e encontre o melhor fornecedor para sua demanda.</div>
          </div>
          <div className="div-body-division-image">
            <div className="div-modal">
              <h1 className="font-black">Veja quais fornecedores podem te atender!</h1>
              <p className="description-text-modal">Deixe nossos especialistas analisarem o consumo mensal da sua empresa e mostrar quais fornecedores mais combinam com você.</p>
              <label className="label-text-modal">Informe seu consumo mensal (Kwh):</label>
              <input className="input-consumo" type="number"></input>
              <button className="button-consumo">Enviar</button>
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
        modalTitle={"Nossos Fornecedores"}
      />
      {/* <h1>Clique aqui para cadastrar um fornecedor</h1>
      <button onClick={() => cadastraFornecedor()}>Cadastrar</button>
      <h1>Clique aqui para buscar fornecedor por consumo</h1>
      <button onClick={() => buscaFornecedoresPorConsumo()}>Buscar fornecedor</button>
      <FornecedorComponent
        nome="Nome empresa"
        logo="logo-exemplo"
        estado="estado"
        custoKw="0.5"
        limite="100"
        clientes="5000"
        avaliacao="4.7"
      /> */}
    </div>
  );
}

export default App;
