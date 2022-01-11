import React from "react";
import styled from "styled-components";
import "./style.css";

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${(props) => (props.primary ? "#3498db" : "red")};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;

export default function Loading() {
  return <Loader></Loader>;
}
