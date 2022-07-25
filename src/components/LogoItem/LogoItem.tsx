import React from "react";
import styles from "./LogoItem.module.css";
import mainLogo from "../../images/Logo.svg";

export const LogoItem: React.FC = () => {
  return <img src={mainLogo} alt="Лого" className={styles.logo} />;
};
