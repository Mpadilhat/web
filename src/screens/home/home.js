import React from "react";
import * as s from "./styled-home";
import { Header } from "../../components";

const Home = () => {
  return (
    <s.Body>
      <Header />

      <s.Container>
        <h1>HOME</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          perferendis non blanditiis assumenda neque iusto nemo, earum deleniti
          sit nisi iure eveniet itaque porro consequuntur aperiam molestias
          dignissimos voluptate delectus!
        </p>
      </s.Container>
    </s.Body>
  );
};

export default Home;
