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
            <div className='div-info'><img src='/icons/location.svg'></img>{props.estado}</div>
            <div className='div-info'>R$ {props.custoKw}/Kwh</div>
            <div className='div-info'>Limite min Kwh: {props.limite}</div>
          </div>
          <div className='div-more-details-divisor'>
          <div className='div-info'>Clientes: {props.clientes}</div>
            <div className='div-info'><img src='/icons/star.svg'></img>{props.avaliacao}</div>
            <div className='div-info'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
