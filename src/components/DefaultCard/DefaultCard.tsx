import React from "react";
import styles from "./DefaultCard.module.css";

interface DefaultCardProps extends React.HTMLProps<HTMLElement> {
  heading?: string;
  text?: string;
  author?: string;
  time?: string;
  src?: string;
  alt?: string;
}

export const DefaultCard: React.FC<DefaultCardProps> = ({
  text,
  heading,
  author = "Автор",
  time = "01.01.2022",
  src,
  alt,
}) => {
  return (
    <article className={styles.card}>
      <img className={styles.photo} src={src} alt={alt} />
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
    </article>
  );
};
