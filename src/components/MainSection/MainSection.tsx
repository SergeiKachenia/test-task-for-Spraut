import React from "react";
import { MainCard } from "../MainCard/MainCard";
import mainPhoto from "../../images/MainCard-photo.jpg";

export const MainSection: React.FC = () => {
  return (
    <MainCard
      heading="Участок скоростного диаметра на&nbsp;юго‑востоке Москвы построили на&nbsp;70%"
      text="Открытие участка увеличит транспортную доступность городских районов Печатники, Люблино и&nbsp;Текстильщики, а&nbsp;также разгрузит Люблинскую улицу и&nbsp;Волгоградский проспект."
      src={mainPhoto}
      alt="главное фото"
    />
  );
};
