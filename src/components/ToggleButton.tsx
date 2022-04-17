import React from "react";
import styled from 'styled-components';

interface propsType {
  handleClick: Function;
};

const ToggleContainer = styled.div`
  position: relative;
  margin-right: 16px;
`;

const ToggleLabel = styled.label`
  position: absolute;
  left: 0px;
  top: 0px;
  &:after {
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0px;
    border-radius: 25px;
    background-color: var(--soft-grey);
    transition: all 0.4s ease;
    content: "";
  }
`;

const ToggleInput = styled.input`
  width: 34px;
  height: 14px;
  border-radius: 25px;
  background-color: var(--grey);
  appearance: none;
  outline: none;
  &::before, ::after {
    z-index: 2;
    position: absolute;
    top: 60%;
    font-weight: bolder;
    transform: translateY(-50%);
  }
  &:checked {
    background-color: var(--sky-blue);
  }
  &:checked + ${ToggleLabel} {
    &:after {
      left: 27px;
      background-color: var(--blue);
    }
  }
`;

export default function ToggleButton({ handleClick }: propsType) {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" id="switch1" name="drone" onClick={() => handleClick()} />
      <ToggleLabel htmlFor="switch1"></ToggleLabel>
    </ToggleContainer>
  );
}
