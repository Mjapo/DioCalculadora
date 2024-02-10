import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${props => (props.darkMode ? 'white' : 'black')};
  }
`;

export default GlobalStyle;
