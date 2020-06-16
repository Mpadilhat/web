import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  -webkit-font-smoothing: antialiased;
  font-family: 'ABeeZee', sans-serif;

}

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

@media screen and (min-width: 800px){
  input[type="text"]{
    width: 400px;
  }
  input[type="password"]{
    width: 400px;
  }
  button{
    width: 400px;
  }
}

@media screen and (max-width: 800px){
  header{
    height: 50px !important;
  }
  header h1{
    font-size: 20px !important;
  }
}
`;

export default GlobalStyles;
