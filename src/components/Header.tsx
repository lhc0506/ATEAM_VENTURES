import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: #1565C0;
  color: #FFF;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        CAPA파트너스
      </div>
      <div>
        가공업체 로그아웃
      </div>
    </HeaderContainer>
  )
}
