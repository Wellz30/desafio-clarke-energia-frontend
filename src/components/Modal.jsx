import React from 'react';
import { FornecedorComponent } from "./Fornecedor";
import '../styles/Modal.css';

export function Modal({ isOpen, closeModal, modalTitle, Arrayfornecedores }) {
  if (!isOpen) return null;

  console.log("Fornecedores: ", Arrayfornecedores)
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className='modal-title'>
          {modalTitle}
        </div>
        <div className='modal-fornecedores'>
          {Arrayfornecedores.map((fornecedor) => (
            <FornecedorComponent
              key={fornecedor.id}
              nome={fornecedor.nome}
              logo={fornecedor.logo}
              estado={fornecedor.estado}
              custoKw={fornecedor.custoPorKwh}
              limite={fornecedor.limiteMinimoKwh}
              clientes={fornecedor.numeroClientes}
              avaliacao={fornecedor.avaliacaoMedia}
            />
          ))}
        </div>
        <button className="close-button" onClick={closeModal}>X</button>
      </div>
    </div>
  );
}
