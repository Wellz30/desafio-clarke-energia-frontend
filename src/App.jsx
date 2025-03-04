import { useEffect, useState } from "react";
import { getFornecedores } from "./services/fornecedorService";
import './styles/App.css';

function App() {

  const [fornecedores, setFornecedores] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getFornecedores();
      setFornecedores(data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(fornecedores);
  }, [fornecedores]);

  return (
    <div>
      <h1>Iniciando desafio clarke energia</h1>
    </div>
  );
}

export default App;
