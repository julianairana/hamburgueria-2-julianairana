import { useContext } from "react";
import Modal from "react-modal";
import { ModalContext } from "../../contexts/ModalContext";
import "../ModalCart/styles.css";
import hamburguer from "../../img/Lanche.png";
import bagEmpty from "../../img/bagEmpty.png"
Modal.setAppElement("#root");

export const ModalCart = () => {
  const { modalIsOpen, handleModal } = useContext(ModalContext);

  return (
    <div className="container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="divModalHeader">
          <h2 className="modalTitle">Carrinho de compras</h2>
          <button className="buttonCloseModal" onClick= {handleModal} >
            X
          </button>
        </div>
        <div className="divEmpty">
        <img src={bagEmpty} className="imgBag" />
        </div>
        {/* <ul className="ulModal">
          <li className="liModal">
            <img className="imgModal" src={hamburguer} alt="" />
            <div className="divLi">
              <h3 className="titleH3">Hamburguer</h3>
              <div className="divPreco">
              <button className="buttonMaisMenos">-</button>
              <span className="spanCounter">1</span>
              <button className="buttonMaisMenos">+</button>
              </div>
            </div>
            <button className="buttonTrash"></button>
          </li>
          <li className="liModal">
            <img className="imgModal" src={hamburguer} alt="" />
            <div className="divLi">
              <h3 className="titleH3">MilkShake Ovomaltine</h3>
              <div className="divPreco">
              <button className="buttonMaisMenos">-</button>
              <span className="spanCounter">1</span>
              <button className="buttonMaisMenos">+</button>
              </div>
            </div>
            <button className="buttonTrash"></button>
          </li>
          <li className="liModal">
            <img className="imgModal" src={hamburguer} alt="" />
            <div className="divLi">
              <h3 className="titleH3">Coca cola</h3>
              <div className="divPreco">
              <button className="buttonMaisMenos">-</button>
              <span className="spanCounter">1</span>
              <button className="buttonMaisMenos">+</button>
              </div>
            </div>
            <button className="buttonTrash"></button>
          </li>
    
          
        </ul>
        <div className="div">
          <div className="divTotal">
            <h3 className="titleH3">Total</h3>
            <p className="precoP">R$14,00</p>
          </div>
          <button className="buttonTodos">Remover todos</button>
        </div> */}
      </Modal>
    </div>
  );
};
