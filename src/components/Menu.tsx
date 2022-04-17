import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  border-bottom: 1px solid #E5E5E5;
`;

const Logo = styled.img`
  margin-left: 40px;
`;

const MenuContainer = styled.div`
  margin: 36px 32px;
`;

export default function Menu() {
  return (
    <>
      <LogoContainer>
        <Logo src="/colorlogo.svg" alt="colorlogo" />
      </LogoContainer>
      <MenuContainer>
        <div>
          <img src="Vector(1).svg" alt="Vector(1)" />
          파트너정밀가공
        </div>
        <div>
          로그아웃
        </div>
      </MenuContainer>
    </>
  );
}
