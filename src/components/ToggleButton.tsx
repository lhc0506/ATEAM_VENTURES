import React from "react";
import styled from 'styled-components';
const ToggleContainer = styled.div`
  position: relative;
  margin-right: 16px;
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
    background-color: var(--soft-grey);
    transition: all 0.4s ease;
  }
`;

const ToggleInput = styled.input`
  appearance: none;
  width: 34px;
  height: 14px;
  border-radius: 25px;
  background-color: var(--grey);
  outline: none;
  &::before, ::after {
    z-index: 2;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    font-weight: bolder;
  }
  &:checked {
    background-color: var(--sky-blue);
  }
  &:checked + ${ToggleLabel} {
    &:after {
      background-color: var(--blue);
      left: 27px;
    }
  }
`;

interface propsType {
  handleClick: Function;
};

export default function ToggleButton({ handleClick }: propsType) {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" id="switch1" name="drone" onClick={() => handleClick()} />
      <ToggleLabel htmlFor="switch1"></ToggleLabel>
    </ToggleContainer>
  );
}
