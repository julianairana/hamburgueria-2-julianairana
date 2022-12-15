import styled from "styled-components";
import pesquisar from "../../img/Pesquisar.png";
import cart from "../../img/Carrinho.png";
import sair from "../../img/Sair.png";

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .divHeader {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    /* justify-content: space-between; */
    background: #f5f5f5;
    justify-content: space-evenly;

  }

  .imgLogo {
    margin-left: 70px;
  }

  .divForm {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 47%;
    height: 100%;
  }

  input {
    height: 70%;
    width: 49%;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 0px 10px 0px 15px;
    justify: space-between;
    background: #ffffff;
  }

  input:hover {
    border: 2px solid #333333;
  }

  .buttonPesquisar {
    height: 40px;
    width: 43px;
    border: none;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
    background: #27ae60;
    color: #ffffff;
    margin-left: -51px;
    cursor: pointer;
    background-image: url(${pesquisar});
    background-repeat: no-repeat;
    background-position: center;
 
  }

  .buttonPesquisar:hover {
    background: #93d7af;
  }

  .buttonAddCart {
    height: 40px;
    width: 43px;
    background: none;
    background-image: url(${cart});
    background-repeat: no-repeat;
    margin-top: 12px;
  }

  .buttonSair {
    height: 40px;
    width: 43px;
    background: none;
    background-image: url(${sair});
    background-repeat: no-repeat;
    margin-top: 12px;
}

.divButton {
  display: flex;
  margin-right: 63px;
}

  ul {
    display: flex; 
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px 0 0 41px;
    margin-bottom: 20px;
    width: 93%;
    justify-content: center;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;

    .imgLogo {
      margin: 30px;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      width: 250px;
      max-width: 100%;
    }

    button {
      width: 107px;
      max-width: 70%;
    }
  }
`;
