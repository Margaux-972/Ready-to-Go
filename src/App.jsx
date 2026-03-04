import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <div className="container">
          <section>
            <div className="col1">
              <button
                onClick={() => {
                  switch1 ? setSwitch1(false) : setSwitch1(true);
                }}
                className={switch1 ? "isActive" : "isInactive"}
              >
                ON
              </button>
              <button
                onClick={() => {
                  switch2 ? setSwitch2(false) : setSwitch2(true);
                }}
                className={switch2 ? "isActive" : "isInactive"}
              >
                ON
              </button>
              <button
                onClick={() => {
                  switch3 ? setSwitch3(false) : setSwitch3(true);
                }}
                className={switch3 ? "isActive" : "isInactive"}
              >
                ON
              </button>
            </div>
            <div className="col2">
              <button
                onClick={() => {
                  switch1 ? setSwitch1(false) : setSwitch1(true);
                }}
                className={switch1 ? "isActive" : "isInactive"}
              >
                OFF
              </button>
              <button
                onClick={() => {
                  switch2 ? setSwitch2(false) : setSwitch2(true);
                }}
                className={switch2 ? "isActive" : "isInactive"}
              >
                OFF
              </button>
              <button
                onClick={() => {
                  switch3 ? setSwitch3(false) : setSwitch3(true);
                }}
                className={switch3 ? "isActive" : "isInactive"}
              >
                OFF
              </button>
            </div>
          </section>
          <section></section>
        </div>
      </main>
    </>
  );
}

export default App;
