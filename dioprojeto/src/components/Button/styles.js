import styled from 'styled-components';



export const ButtonContainer = styled.button`
  padding: 10px;
  height: 50px; /* Ajuste a altura conforme necessário para se adequar ao design */
  border: 1px solid gray;
  background-color: blue;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  width: 100%; /* Ocupa 100% da largura disponível */
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    padding: 8px;
    height: 40px; /* Ajuste a altura para dispositivos móveis conforme necessário */
  }

  /* Adicione estilos adicionais ao fundo do botão */
  &.secondary {
    background-color: gray;
    color: black;
  }
`;
