import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: var(--dark-blue);
  color: var(--white);
`;

const NavContainer = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin-left: 40px;
`;

const Company = styled.div`
  font-weight: 500;
`;

const LogOut = styled.div`
  margin-right: 40px;
`
const Vector = styled.img`
  margin-right: 8px;
`;

const Divider = styled.img`
  margin-left: 32px;
  margin-right: 32px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Logo src="/logo.svg" alt="logo" />
      </div>
      <NavContainer>
        <Vector src="/vector.svg" alt="vector" />
        <Company>
          A 가공업체
        </Company>
        <Divider src="divider.svg" alt="divider" />
        <LogOut>
          로그아웃
        </LogOut>
      </NavContainer>
    </HeaderContainer>
  );
}
