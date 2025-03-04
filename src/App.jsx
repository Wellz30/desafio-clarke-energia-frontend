import { useEffect, useState } from "react";
import { getFornecedores, setFornecedor } from "./services/fornecedorService";
import './styles/App.css';

function App() {

  const [fornecedores, setFornecedores] = useState([]);

  const novoFornecedor = {
    nome: "Fornecedor Teste",
    logo: "https://exemplo.com/logo.png",
    estado: "SP",
    custoPorKwh: 0.50,
    limiteMinimoKwh: 100,
    numeroClientes: 500,
    avaliacaoMedia: 4.5,
  };

  const fetchData = async () => {
    try {
      const data = await getFornecedores();
      setFornecedores(data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores");
    }
  };

  const CadastraFornecedor = async () => {
    try {
      const response = await setFornecedor(novoFornecedor);
      console.log("Fornecedor cadastrado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao cadastrar fornecedor");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(fornecedores);
  }, [fornecedores]);

  return (
    <div className="div-main">
      <h1>Clique aqui para cadastrar um fornecedor</h1>
      <button onClick={() => CadastraFornecedor()}>Cadastrar</button>
    </div>
  );
}

export default App;
