import React from 'react';
import { FornecedorComponent } from "./Fornecedor";
import '../styles/Modal.css';

export function Modal({ isOpen, closeModal, modalTitle, fornecedores }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className='modal-title'>
          {modalTitle}
        </div>
        <div className='modal-fornecedores'>
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
          <FornecedorComponent
            nome="Nome empresa"
            logo="https://img.freepik.com/vetores-gratis/design-de-logotipo-de-energia_23-2150011932.jpg"
            estado="estado"
            custoKw="0.5"
            limite="100"
            clientes="5000"
            avaliacao="4.7"
          />
        </div>
        <button className="close-button" onClick={closeModal}>X</button>
      </div>
    </div>
  );
}
