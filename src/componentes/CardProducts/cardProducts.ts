import styled from "styled-components";

export const CardProduct = styled.li`
  height: 300px;
  width: 20%;
  border-radius: 5px;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  min-width: 200px;

  &:hover {
    border: 2px solid #27ae60;
  }

  .imgProduct {
    width: 100%;
    height: 46%;
    background: #f5f5f5;
    object-fit: contain;
  }

  .divLi {
    display: flex;
    flex-direction: column;
    /* margin-left: 40px;
        width: 60%; */
    gap: 10px;
    align-items: baseline;
    margin-top: 10px;
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    width: 200px;
  }

  span {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #828282;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #27ae60;
  }

  .buttonAdd {
    font-family: "Inter", sans-serif;
    height: 40px;
    width: 107px;
    left: 248px;
    top: 10px;
    border: none;
    border-radius: 8px;
    padding: 0px 20px 0px 20px;
    background-color: #BDBDBD;
    color: #ffffff;
    cursor: pointer;
  }

  .buttonAdd:hover {
    background: #27ae60;
  }
`;
