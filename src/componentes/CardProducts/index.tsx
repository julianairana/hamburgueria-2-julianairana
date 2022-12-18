import { useContext } from "react";
import { CardProduct } from "./cardProducts";
import { CartContext } from "../../contexts/CartContext";

interface iElementProps {
  element: {
    id: number;
    img: string;
    name: string;
    category: string;
    price: number;
  };
}

export const CardProducts = ({ element }: iElementProps) => {
  const { addCart } = useContext(CartContext);

  return (
    <CardProduct key={element.id}>
      <img src={element.img} alt={element.name} className="imgProduct" />
      <div className="divLi">
        <h2>{element.name}</h2>
        <span>{element.category}</span>
        <p>
          {element.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button className="buttonAdd" onClick={() => addCart(element)}>
          Adicionar
        </button>
      </div>
    </CardProduct>
  );
};
