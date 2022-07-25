import React, { useState } from "react";
import styles from "./DefaultSection.module.css";
import { DefaultCard } from "../DefaultCard/DefaultCard";
import DefaultCardOne from "../../images/DefaultCard-photo-1.jpg";
import DefaultCardTwo from "../../images/DefaultCard-photo-2.jpg";
import DefaultCardThree from "../../images/DefaultCard-photo-3.jpg";
import { Button } from "../Button/Button";

export const DefaultSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const clickHandler = () => {
    setIsLoading(!isLoading);
  };
  return (
    <>
      <section className={styles.default_section}>
        <DefaultCard
          heading="Физики призвали закрыть темную материю"
          text="Новая работа в&nbsp;Symmetry сосредотачивает внимание на&nbsp;том, что наблюдаемые типичные галактические структуры, кажется, несовместимы с&nbsp;наличием темной материи в&nbsp;галактиках."
          src={DefaultCardOne}
          alt="первое фото"
        />
        <DefaultCard
          heading="Российский аналог SWIFT готов к&nbsp;тестированию"
          text="Стало известно, что пилотная версия российского аналога системы SWIFT на&nbsp;базе технологий блокчейна готова к&nbsp;тестированию и&nbsp;может быть использована в&nbsp;банках."
          src={DefaultCardTwo}
          alt="второе фото"
        />
        <DefaultCard
          heading="Руй Витория назначен на&nbsp;пост тренера сборной Египта"
          text="Бывший главный тренер московского &laquo;Спартака&raquo;, португалец Руй Витория назначен на&nbsp;пост главного тренера сборной Египта, сообщается в&nbsp;&laquo;твиттере&raquo; футбольной ассоциации Египта."
          src={DefaultCardThree}
          alt="третье фото"
        />
      </section>
      <div className={styles.button}>
        <Button
          text="Загрузить еще"
          appearance="first"
          type="button"
          isLoading={isLoading}
          onClick={() => clickHandler()}
        />
      </div>
    </>
  );
};
