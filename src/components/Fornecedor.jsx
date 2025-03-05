import '../styles/Fornecedor.css';

export function FornecedorComponent(props) {

  return (
    <div className="div-fornecedor">
      <div className='div-logo'>
        <img className='img-logo' src={props.logo}></img>
      </div>
      <div className='div-details'>
        <div className='div-nome'>{props.nome}</div>
        <div className='div-more-details'>
          <div className='div-more-details-divisor'>
            <div className='div-info'></div>
            <div className='div-info'></div>
            <div className='div-info'></div>
          </div>
          <div className='div-more-details-divisor'>
          <div className='div-info'></div>
            <div className='div-info'></div>
            <div className='div-info'></div>
          </div>
        </div>
      </div>
      {/*
      <h1>{props.estado}</h1>
      <h1>{props.custoKw}</h1>
      <h1>{props.limite}</h1>
      <h1>{props.clientes}</h1>
      <h1>{props.avaliacao}</h1> */}
    </div>
  );
}
