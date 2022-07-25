import React from "react";
import styles from "./App.module.css";
import { Header } from "../Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { MainSection } from "../MainSection/MainSection";
import { DefaultSection } from "../DefaultSection/DefaultSection";
import { Footer } from "../Footer/Footer";
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className={styles.content}>
        <MainSection />
        <DefaultSection />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
