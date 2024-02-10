import styled from "styled-components";


export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #AAFFAF;
  width: 90%;
  max-width: 400px;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box; /* Adicionado para incluir padding no cálculo do tamanho */

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* Ajustado para space-around para uma melhor distribuição */
  align-items: center;
  margin-bottom: 15px; /* Adicionado espaçamento inferior para melhorar a aparência */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around; /* Ajustado para space-around para uma melhor distribuição */
  align-items: center;
  margin-right: 15px; /* Adicionado espaçamento à direita para melhorar a aparência */
`;


