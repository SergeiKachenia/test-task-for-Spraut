import React from "react";
import styles from "./HeaderLink.module.css";

interface HeaderLinkProps extends React.HTMLProps<HTMLLinkElement> {
  text?: string;
  isActive?: boolean;
  href: string;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  text,
  isActive = false,
  href,
}) => {
  const className = `${styles.link}  ${isActive && styles.link__active}`;

  return (
    <a href={href} className={className}>
      {" "}
      {text}
    </a>
  );
};
