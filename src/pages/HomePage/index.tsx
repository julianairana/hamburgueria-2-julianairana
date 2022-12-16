
import { useContext } from "react";
import { CardProducts } from "../../componentes/CardProducts";
import { ModalContext } from "../../contexts/ModalContext";
import logoBurguer from "../../img/LogoBurguer.png";
import { ContainerHome } from "./homePage";
import { ModalCart } from "../../componentes/ModalCart";

export const HomePage = () => {

  const { handleModal, modalIsOpen } = useContext(ModalContext);

    return (
    <ContainerHome>
    <div className="divHeader">
      <img src={logoBurguer} alt="logo" className="imgLogo" />
      <div className="divForm">
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          required
        />
        <button className="buttonPesquisar"></button>
      </div>
      <div className="divButton">
        <button className="buttonAddCart" onClick={handleModal}></button>
        <button className="buttonSair"></button>
      </div>
    </div>
    <div>
        <ul>
            <CardProducts/>
            <CardProducts/>
            <CardProducts/>
            <CardProducts/>
            <CardProducts/>
            <CardProducts/>
            <CardProducts/>
            <CardProducts/>

        </ul>
    </div>
    {modalIsOpen && <ModalCart/> }
    </ContainerHome>
    )
}

