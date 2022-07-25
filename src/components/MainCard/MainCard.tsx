import React from "react";
import styles from "./MainCard.module.css";

interface MainCardProps extends React.HTMLProps<HTMLElement> {
  heading?: string;
  text?: string;
  author?: string;
  time?: string;
  src?: string;
  alt?: string;
}

export const MainCard: React.FC<MainCardProps> = ({
  text,
  heading,
  author = "Автор",
  time = "01.01.2020",
  src,
  alt,
}) => {
  return (
    <article className={styles.mainCard}>
      <div className={styles.text_container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.bottom_container}>
          <div className={styles.author_and_time}>
            <address className={styles.author}>{author}</address>
            <time dateTime="01.01.2020" className={styles.time}>
              {time}
            </time>
          </div>
          <a href="#" className={styles.link}>
            Подробнее
          </a>
        </div>
      </div>
      <img className={styles.photo} src={src} alt={alt} />
    </article>
  );
};
