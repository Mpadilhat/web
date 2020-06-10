import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
}

body{
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyles;