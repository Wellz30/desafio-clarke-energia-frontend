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