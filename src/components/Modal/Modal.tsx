import React from "react";
import styled from "styled-components";
import Portal from "../Portal";

const Background = styled.div`
  display: flex;
  position: fixed;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Child = styled.div<{ width: string, height: string }>`
  position: relative;
  /* height: ${props => props.height}; */
  width: ${props => props.width};
  overflow: scroll;
  background: var(--white);
`;

interface Props {
  children: React.ReactNode;
  onClick: Function;
  width: string;
  height: string;
}

export default function Modal({ children, onClick, width, height }: Props) {
  return (
    <Portal>
      <Background onClick={() => onClick()}>
        <Child
          width={width}
          height={height}
          onClick={event => event.stopPropagation()}
        >
          <div>{children}</div>
        </Child>
      </Background>
    </Portal>
  );
}
