import { useEffect, useState } from "react";
import { getFornecedores, setFornecedor, getFornecedoresPorConsumo } from "./services/fornecedorService";
import { FornecedorComponent } from "./components/Fornecedor";
import './styles/App.css';

function App() {

  const [fornecedores, setFornecedores] = useState([]);
  const [consumoMensal, setConsumoMensal] = useState("100");

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
          <h1>Desafio Técnico</h1>
        </div>
      </div>
      <div className="div-body">
        <div className="div-max-width">
          <div className="div-body-division"></div>
          <div className="div-body-division-image"></div>
        </div>
      </div>
      <div className="div-footer">
        <div className="div-max-width">
          
        </div>
      </div>
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
