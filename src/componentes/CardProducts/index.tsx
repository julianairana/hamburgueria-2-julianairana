import { CardProduct } from "./cardProducts";
import lanche from "../../img/Lanche.png";

export const CardProducts = () => {
    return (
        <CardProduct>
            <img src={lanche} alt="" className="imgProduct"/>
            <div className="divLi">
              <h2>Hamburguer</h2>
              <span>Sanduiche</span>
              <p>R$14,00</p>
              <button className="buttonAdd">Adicionar</button>
            </div>
        </CardProduct>
    )
}