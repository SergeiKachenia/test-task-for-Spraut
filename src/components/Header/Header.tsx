import React, { useState } from "react";
import styles from "./Header.module.css";
import { LogoItem } from "../LogoItem/LogoItem";
import { HeaderLink } from "../HeaderLink/HeaderLink";
import { Button } from "../Button/Button";
import inputLogo from "../../images/InputLogo.svg";

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [inputData, setInputData] = useState<{ value: string }>({ value: "" });

  const handleChange = (e: { target: { value: string } }) => {
    setInputData({ ...inputData, value: e.target.value });
  };

  const openInputHandler = () => {
    setIsVisible(false);
    setIsHidden(false);
  };

  const closeInputHandler = () => {
    setIsVisible(true);
    setIsHidden(true);
    setInputData({ value: "" });
  };
  const display: string = isVisible ? "inline-block" : "none";
  return (
    <header className={styles.header}>
      <LogoItem />
      <nav className={styles.links}>
        <HeaderLink href={"#"} isActive={true} text="Главная"></HeaderLink>
        <HeaderLink href={"#"} text="Афиша"></HeaderLink>
        <HeaderLink href={"#"} text="О компании"></HeaderLink>
        <HeaderLink href={"#"} text="Контакты"></HeaderLink>
      </nav>
      <div className={styles.buttons}>
        <button
          className={styles.inputButton}
          style={{ display }}
          type="button"
          onClick={openInputHandler}
        >
          <img className={styles.inputButton} src={inputLogo} alt="лупа"></img>
        </button>
        <form
          className={styles.input_with_button}
          style={{ display: isHidden ? "none" : "inline-block" }}
        >
          <input
            className={styles.input}
            type="search"
            value={inputData.value}
            onChange={handleChange}
          ></input>
          <button
            className={styles.closeIcon}
            type="button"
            onClick={closeInputHandler}
          ></button>
        </form>
        <Button text="Войти" type="button" appearance="first"></Button>
        <Button text="Регистрация" type="button" appearance="second"></Button>
      </div>
    </header>
  );
};
