import React from 'react';
import Header from './components/Header';
import { useGetData } from "./hooks/useGetData";
import Dashboard from './components/Dashboard';
import GlobalStyle from "./GlobalStyle";

function App() {
  const { response, error, isLoading } = useGetData("http://localhost:4000/requests");

  return (
    <>
      <GlobalStyle />
      <Header />
      {<Dashboard estimates={response} isLoading={isLoading} />}
    </>
  );
}

export default App;
