import styled from "styled-components";

export const Register = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    .divLeft {
        width: 30%;
        gap: 27px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .imgBag {
        background: rgba(39, 174, 96, 0.1);
        border-radius: 5px;
        width: 60px;
        height: 60px;
        object-fit: none;
    }

    span {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #999999;
        width: 65%;
        text-align: center;
    }

    a {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #999999;
    }

    .divCard {
        width: 80%;
        height: 90px;
        border: 1px solid #E0E0E0;
        box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .spanNegrito {
        color: #333333;
        font-weight: 500;
    }

    .divRight {
        width: 30%;
        height: 70%;
        max-width: 369px;
        border: 2px solid #F5F5F5;
        box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }

    .divRegister {
        display: flex;
        align-items: center;
        width: 85%;
        justify-content: space-between;
        margin-top: 20px;
    }

    h2 {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        color: #333333;
        margin-right: auto;
        margin-left: 26px;
    }


    form {
        width: 85%;
        gap: 7px;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    label {
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #999999;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 0px 10px 0px 15px;
        border: 2px solid #333333;
        border-radius: 8px;
    }

    button {
        width: 100%;
        height: 40px;
        background: #F5F5F5;
        border-radius: 8px;
        color: #999999;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        margin-top: 4px;
    }

    @media (max-width: 900px) {
            width: 100%;
            max-width: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .divRight {
                width: 100%;
            }

            .divLeft {
                width: 100%;
                display: flex;
                align-items: center;
            }

            .divRegister {
                display: flex;
                flex-direction: column;
                width: 138px;
            }

            .divCard {
                display: none;
            }

            .imgBolinhas {
                display: none;
            }

        }
`