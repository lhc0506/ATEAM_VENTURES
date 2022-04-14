import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-blue: #1565C0;
    --blue: #2196F3;
    --sky-blue: #BBDEFB;
    --grey: #C2C2C2;
    --dark-grey: #939FA5;
    --soft-grey: #F5F5F5;
    --white: #FFFFFF;
    --orange: #FFA000;
  }

  body {
    color: #323D45;
    font-family: "Noto Sans";
    font-size: 14px;
  }
`;

export default GlobalStyle;
