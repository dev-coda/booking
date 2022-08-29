import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Booker from "./components/Booker";
import logo from "./media/Medhammer_logo.png";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <img src={logo} alt="logo Medhammer" style={{ maxWidth: "150px" }} />
        <h1>Reservas Medhammer</h1>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={!token ? <Login /> : <Booker />} />
          <Route path="login" element={<Login />}></Route>
          <Route
            path="booker"
            element={!token ? <Login /> : <Booker />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
