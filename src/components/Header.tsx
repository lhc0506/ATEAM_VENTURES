import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./Modal/Modal";
import Menu from "./Menu";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  min-width: 100vh;
  background-color: var(--dark-blue);
  color: var(--white);
`;

const NavContainer = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Logo = styled.img`
  margin-left: 40px;
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
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

const LogoContainer = styled.div`
  display: flex;

`;

const MenuButton = styled.div`
  margin-left: 23px ;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export default function Header() {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleClick = () => {
    setShowFilterModal(true);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <MenuButton>
          <GiHamburgerMenu size="24" onClick={handleClick} />
        </MenuButton>
        <Logo src="/logo.svg" alt="logo" />
      </LogoContainer>
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
      {showFilterModal && (
        <Modal onClick={() => setShowFilterModal(!showFilterModal)}
          height="100%"
          width="80%"
        >
          <Menu />
        </Modal>
      )}
    </HeaderContainer>

  );
}
