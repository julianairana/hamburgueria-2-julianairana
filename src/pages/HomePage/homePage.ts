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

  .ulCard {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 30px 0 0 41px;
    margin-bottom: 20px;
    width: 93%;
    justify-content: center;
  }

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    .divHeader {
      padding: 18.28px 10.19px;
      display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .divButton {
      margin-right: 0px;
    }

    .imgLogo {
      margin-left: 0px;
      width: 158.94px;
      height: 36.83px;
    }
    
   .ulCard {
    margin: 0px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 10px;

    }

    .divForm {
      display: none;
    }

  }
`;
