import { useEffect, useState } from "react";
import { getFornecedores, setFornecedor, getFornecedoresPorConsumo } from "./services/fornecedorService";
import './styles/App.css';

function App() {

  const [fornecedores, setFornecedores] = useState([]);
  const [consumoMensal, setConsumoMensal] = useState("100");

  const novoFornecedor = {
    nome: "Fornecedor Teste",
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
      <h1>Clique aqui para cadastrar um fornecedor</h1>
      <button onClick={() => cadastraFornecedor()}>Cadastrar</button>
      <h1>Clique aqui para buscar fornecedor por consumo</h1>
      <button onClick={() => buscaFornecedoresPorConsumo()}>Buscar fornecedor</button>
    </div>
  );
}

export default App;
