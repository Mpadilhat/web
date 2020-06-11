import React from "react";
import * as s from "./styled-black-button-loader";
import Loader from "react-loader-spinner";

export default ({ onClick, isLoading, disabled, text }) => {
  return (
    <s.Button onClick={onClick} disabled={disabled}>
      {!isLoading ? (
        text
      ) : (
        <Loader type="TailSpin" color="white" height={20} width={20} />
      )}
    </s.Button>
  );
};
