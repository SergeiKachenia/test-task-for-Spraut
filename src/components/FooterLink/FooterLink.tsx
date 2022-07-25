import React from "react";
import styles from "./FooterLink.module.css";

interface FooterLinkProps extends React.HTMLProps<HTMLLinkElement> {
  src: string;
  alt: string;
  href: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ src, alt, href }) => {
  const className = `${styles.link}`;

  return (
    <li>
      <a href={href} className={className}>
        {" "}
        <img src={src} alt={alt} />
      </a>
    </li>
  );
};
