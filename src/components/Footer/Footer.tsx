import React from "react";
import styles from "./Footer.module.css";
import { LogoItem } from "../LogoItem/LogoItem";
import { FooterLink } from "../FooterLink/FooterLink";
import VKLink from "../../images/VK-logo.svg";
import TelegramLink from "../../images/Telegram-logo.svg";
import ZenLink from "../../images/Zen-logo.svg";
import OdnokLink from "../../images/Odnoklassniki-logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_and_copyright}>
        <LogoItem />
        <small className={styles.copyright}>
          &copy;&nbsp;Photo, Inc.&nbsp;2019. We&nbsp;love our users!
        </small>
      </div>
      <ul className={styles.links_list}>
        <FooterLink href="#" src={VKLink} alt="ВК лого"></FooterLink>
        <FooterLink
          href="#"
          src={TelegramLink}
          alt="Телеграм лого"
        ></FooterLink>
        <FooterLink href="#" src={ZenLink} alt="Дзен лого"></FooterLink>
        <FooterLink
          href="#"
          src={OdnokLink}
          alt="Одноклассники лого"
        ></FooterLink>
      </ul>
    </footer>
  );
};
