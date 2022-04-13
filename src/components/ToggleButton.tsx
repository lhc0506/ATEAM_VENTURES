import React from "react";
import styled from 'styled-components';
const ToggleSpan = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  border-radius: 25px;
`;

const ToggleLabel = styled.label`
  position: absolute;
  left: 0px;
  top: 0px;
  &:after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    left: 0px;
    border-radius: 25px;
    position: absolute;
    background-color: #F5F5F5;
    transition: all 0.4s ease;
  }
`;

const ToggleInput = styled.input`
  appearance: none;
  width: 34px;
  height: 14px;
  border-radius: 25px;
  background-color: #C2C2C2;
  outline: none;
  &::before, ::after {
    z-index: 2;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    font-weight: bolder;
  }
  &:checked {
    background-color: #BBDEFB;
  }
  &:checked + ${ToggleLabel} {
    &:after {
      background-color: #2196F3;
      left: 27px;
    }
  }
`;

interface propsType {
  handleClick: Function;
};

export default function ToggleButton({ handleClick }: propsType) {
  return (
    <ToggleSpan>
      <ToggleInput type="checkbox" id="switch1" name="drone" onClick={() => handleClick()} />
      <ToggleLabel htmlFor="switch1"></ToggleLabel>
    </ToggleSpan>
  );
}
