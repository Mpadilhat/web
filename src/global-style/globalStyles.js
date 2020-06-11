import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
}

body{
  padding: 0;
  margin: 0;
  font-family: 'ABeeZee', sans-serif;
}
`;

export default GlobalStyles;
