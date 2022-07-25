import React from "react";
import styles from "./Button.module.css";
import loaderIcon from "../../images/Loader.svg";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  appearance?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  isLoading = false,
  disabled,
  appearance = "first" || "second",
  ...rest
}) => {
  const className = `${styles.button}  ${isLoading && styles.loader} ${
    appearance === "first" ? styles.button__first : styles.button__second
  }`;

  return (
    <button
      className={className}
      type={type}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? (
        <img className={styles.loader_icon} src={loaderIcon} alt="Загрузка." />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};
