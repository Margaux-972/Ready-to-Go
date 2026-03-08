import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <Header />
      <Section
        switch1={switch1}
        switch2={switch2}
        switch3={switch3}
        setSwitch1={setSwitch1}
        setSwitch2={setSwitch2}
        setSwitch3={setSwitch3}
      />
      <Footer />
    </>
  );
}

export default App;
