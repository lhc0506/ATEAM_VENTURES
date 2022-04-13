import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import { useGetData } from "./hooks/useGetData";
import Dashboard from './components/Dashboard';

function App() {
  const { response, error, isLoading } = useGetData("http://localhost:4000/requests");

  return (
    <>
      <Header />
      {!isLoading && <Dashboard estimates={response} />}
    </>
  );
}

export default App;
