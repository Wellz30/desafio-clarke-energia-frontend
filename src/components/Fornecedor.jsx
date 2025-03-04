import '../styles/Fornecedor.css';

export function FornecedorComponent(props) {

  return (
    <div className="div-fornecedor">
      <h1>{props.nome}</h1>
      <h1>{props.logo}</h1>
      <h1>{props.estado}</h1>
      <h1>{props.custoKw}</h1>
      <h1>{props.limite}</h1>
      <h1>{props.clientes}</h1>
      <h1>{props.avaliacao}</h1>
    </div>
  );
}
