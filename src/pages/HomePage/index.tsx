
import { CardProducts } from "../../componentes/CardProducts";
import logoBurguer from "../../img/LogoBurguer.png";
import { ContainerHome } from "./homePage";

export const HomePage = () => {
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
        <button className="buttonAddCart"></button>
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
    </ContainerHome>
    )
}

