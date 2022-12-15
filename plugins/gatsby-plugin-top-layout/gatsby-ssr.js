/* eslint-disable import/prefer-default-export */
import * as React from "react";
import TopLayout from "./TopLayout";

export const wrapRootElement = ({ element, props }) => {
  console.log("wrap root props :>> ", props);
  return <TopLayout {...props}>{element}</TopLayout>;
};
