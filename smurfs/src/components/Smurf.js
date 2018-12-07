import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 20px;
  font-size: 12px;
  color: white;
  text-align: left;
  max-width: 50%;
  width: 300px;
  margin-bottom: 20px;
  background: blue;
  border: 1px solid red;
  border-radius: 7px;
  position: relative;
`;

const Span = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  color: red;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

export default function Smurf({ name, age, height }) {
  return (
    <Card>
      <h2>
        Name: {name} <Span>X</Span>
      </h2>
      <h4>Age: {age}</h4>
      <h4>Height: {height}</h4>
    </Card>
  );
}
