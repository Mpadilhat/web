import React from "react";
import * as s from "./styled-button-yellow-loader";
import Loader from "react-loader-spinner";

export default ({ disabled, text, onClick, isLoading }) => {
  return (
    <s.Button disabled={disabled} onClick={onClick}>
      {!isLoading ? (
        text
      ) : (
        <Loader type="TailSpin" color="white" height={20} width={20} />
      )}
    </s.Button>
  );
};
