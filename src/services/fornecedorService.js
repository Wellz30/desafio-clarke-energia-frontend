import api from "./api";

export const getFornecedores = async () => {
  try {
    const response = await api.get("/fornecedores");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar fornecedores:", error);
    throw error;
  }
};

export const setFornecedor = async (fornecedorData) => {
  try {
    const response = await api.post("/setFornecedor", fornecedorData);
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar fornecedor:", error);
    throw error;
  }
};