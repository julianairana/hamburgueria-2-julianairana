import { useContext, useState } from "react";
import { CardProducts } from "../../componentes/CardProducts";
import { CartContext } from "../../contexts/CartContext";
import logoBurguer from "../../img/LogoBurguer.png";
import { ContainerHome } from "./homePage";
import { ModalCart } from "../../componentes/ModalCart";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { handleModal, modalIsOpen, products } = useContext(CartContext);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function logout() {
    navigate("/");
    localStorage.removeItem("@TOKEN");
  }

  const productsFilter = !search
    ? products
    : products.filter(
        (element) =>
          element.name.toLowerCase().includes(search.toLowerCase()) ||
          element.category.toLowerCase().includes(search.toLowerCase())
      );

 
  return (
    <ContainerHome>
      <div className="divHeader">
        <img src={logoBurguer} alt="logo" className="imgLogo" />
        <div className="divForm">
          <input type="text" placeholder="Digitar Pesquisa" required
          value={search}
          onChange={(event) => setSearch(event.target.value)} />
          <button className="buttonPesquisar"></button>
        </div>
        <div className="divButton">
          <button className="buttonAddCart" onClick={handleModal}></button>
          <button className="buttonSair" onClick={logout}></button>
        </div>
      </div>
      <div className="divUl">
        <ul className="ulCard">
          {productsFilter?.map((element) => (
            <CardProducts key={element.id} element={element} />
          ))}
    
        </ul>
      </div>
      {modalIsOpen && <ModalCart />}
    </ContainerHome>
  );
};
