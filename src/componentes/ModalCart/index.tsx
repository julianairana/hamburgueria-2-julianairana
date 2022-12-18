import { useContext } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/CartContext";
import "../ModalCart/styles.css";
import bagEmpty from "../../img/bagEmpty.png";
Modal.setAppElement("#root");

export const ModalCart = () => {
  const {
    modalIsOpen,
    handleModal,
    cartProducts,
    removeProductCart,
    removeAllProductCart,
  } = useContext(CartContext);

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
          <button className="buttonCloseModal" onClick={handleModal}>
            X
          </button>
        </div>
        {cartProducts.length === 0 && (
          <div className="divEmpty">
            <img src={bagEmpty} className="imgBag" />
          </div>
        )}
        <ul className="ulModal">
          {cartProducts?.map((element) => (
            <li className="liModal" key={element.id}>
              <img className="imgModal" src={element.img} alt={element.name} />
              <div className="divLi">
                <h3 className="titleH3">{element.name}</h3>
                <div className="divPreco">
                  <button className="buttonMaisMenos">-</button>
                  <span className="spanCounter">1</span>
                  <button className="buttonMaisMenos">+</button>
                </div>
              </div>
              <button
                className="buttonTrash"
                onClick={() => removeProductCart(element)}
              ></button>
            </li>
          ))}
        </ul>
        {cartProducts.length !== 0 && (
          <div className="div">
            <div className="divTotal">
              <h3 className="titleH3">Total</h3>
              <p className="precoP">R${" "}
                {cartProducts
                  ?.reduce((acc, act) => acc + act.price, 0)
                  .toFixed(2)}</p>
            </div>
            <button
              className="buttonTodos"
              onClick={() => removeAllProductCart()}
            >
              Remover todos
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};
