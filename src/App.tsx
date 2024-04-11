import Header from "./components/Header";
import Planet from "./components/Planet";

import { useEffect } from "react";

import { Routes, Route, Navigate, useNavigate } from "react-router";

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/earth");
  // }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to={"/earth"} />}></Route>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
    </>
  );
}

export default App;
