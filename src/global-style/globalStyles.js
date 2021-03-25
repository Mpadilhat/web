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

button, input{
  outline: none;
}

button {
  font-family: "Yellowtail";
  cursor: pointer;
  :disabled{
    cursor: not-allowed;
  }
}

/* -------------------------Responsividade geral------------------------------ */

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

/* -------------------------Responsividade da Home------------------------------ */

@media screen and (max-width: 500px){
  .home{
    flex-direction: column;
  }
}

@media screen and (max-width: 600px){
  header{
  padding: 10px !important;
  justify-content: space-between;
  }
}

@media screen and (max-width: 758px){
  header p {
    display: none;
  }
  header button{
    font-size: 20px !important;
    width: 80px !important;
  }
}

@media screen and (max-width: 800px){

  header{
    height: 50px !important;
  }
  header h1{
    font-size: 30px !important;
  }
}




/* -------------------------Responsividade da Perfil------------------------------ */


`;

export default GlobalStyles;
