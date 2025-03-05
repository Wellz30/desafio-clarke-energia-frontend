import '../styles/Fornecedor.css';

export function FornecedorComponent(props) {

  return (
    <div className="div-fornecedor">
      <div className='div-logo'>
        <img className='img-logo' src={props.logo}></img>
      </div>
      <div className='div-nome'>
        <div>{props.nome}</div>
        <div className='div-avaliacao'>
          {props.avaliacao}
          <img src='/icons/star.svg'></img>
        </div>
      </div>
      {/* <h1>{props.nome}</h1>
      <h1>{props.logo}</h1>
      <h1>{props.estado}</h1>
      <h1>{props.custoKw}</h1>
      <h1>{props.limite}</h1>
      <h1>{props.clientes}</h1>
      <h1>{props.avaliacao}</h1> */}
    </div>
  );
}
