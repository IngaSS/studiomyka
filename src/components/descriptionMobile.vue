<template>
  <v-layout class="descriptionMobile">
    <p>
      Кулинарная студия «МУКА» – модное пространство для вкусного творчества и отдыха в самом центре деловой Москвы -
      отличная площадка для проведения интересных кулинарных мероприятий:
    </p>
    <v-btn class="mobileBtn">Оставить заявку</v-btn>
    <div class="eventsMobile">
      <img :src="img" alt="#" />
      <div class="birthContentMobile">
        <div class="listMobile">
          <span class="mobileSpan">Кулинарные мероприятия</span>
          <ul>
            <li>Корпоративы и тимбилдинги</li>
            <li>Презентации</li>
            <li>Школьные выпускные</li>
            <li>Девичники</li>
            <li>Дни рождения</li>
            <li>Детские праздники</li>
          </ul>
        </div>
      </div>
    </div>
    <p>И, конечно, кулинарные мастер-классы, где учимся, развиваемся, совершенствуемся и отдыхаем.</p>
    <p>
      Общая площадь помещения 250 кв.м. Две уютные студии для проведения кулинарных мероприятий,
      оборудованные техникой SMEG, кухонными аксессуарами Zwilling, посудой Ballarini и “Дымов Керамика”.
      Каждая студия имеет банкетную зону для проведения дегустаций приготовленных блюд, презентаций и торжественных церемоний.
      Устройство раздвижных перегородок между студиями позволяет объединять помещения и организовывать пространство
      для проведения мероприятий различных форматов до 50 человек.
    </p>
    <p>
      Студия оборудована многофункциональной системой для музыкального сопровождения праздников
      и отображения любого контента на LCD мониторах Samsung и видеопроекторах.
    </p>
    <p>Ждем Вас в Кулинарной студии «МУКÁ»!</p>
  </v-layout>
</template>

<script>
import img from "../img/grade.png";
export default {
  data: () => ({
    img: img
  })
};
</script>

<style>
.descriptionMobile {
  display: flex;
  flex-direction: column;
}

.descriptionMobile p, .teamDescr p {
  font-family: "Fira Sans", sans-serif;
  font-size: 180%;
  font-weight: 300;
  text-align: justify;
  color: #ffffff;
  max-width: 80%;
  margin: 0 auto;
  word-break: break-word;
}

.descriptionMobile p:last-child,
.descriptionMobile p:first-child {
  text-align: left;
  width: 80%;
}

.eventsMobile {
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 5%;
}

.descriptionMobile img {
  max-width: 650px;
  height: 420px;
  z-index: 2;
}

.birthContentMobile {
  width: 470px;
  height: 480px;
  background-color: rgba(137, 90, 172, 0.4);
  margin-top: -30px;
  margin-left: -35px;
  text-align: center;
  text-align: -webkit-center;
  margin-right: 0;
}

.listMobile {
  margin-top: 10%;
  width: 80%;
  min-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Fira Sans", sans-serif;
  font-size: 9px;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
}

.listMobile ul {
  display: flex;
  flex-direction: column;
  min-height: 70px;
  justify-content: space-between;
}

.listMobile ul li {
  list-style-type: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 100;
  font-size: 240%;
  padding: 2% 0;
}

.mobileSpan {
  font-family: "Fira Sans", sans-serif;
  font-size: 300%;
  font-weight: 400;
}

.mobileBtn, .businessBtn {
  width: 20%;
  height: 70px !important;
  border-radius: 50px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-bottom: 7%;
  margin-top: 3%;
}

.mobileBtn .v-btn__content, .businessBtn .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 180%;
  font-weight: 600;
  text-align: right;
  color: #895aac;
  text-transform: none;
}

.description {
  /* max-width: 97%; */
  display: none;
}

.list {
  max-width: 90%;
  min-width: 90%;
  flex-direction: column;
}

.slider {
  width: 100%;
}

@media (min-width: 1375px) and (max-width: 1509px) {
  .descriptionMobile img {
    max-width: 570px;
    height: 350px;
  }

  .birthContentMobile {
    width: 430px;
    height: 410px;
  }

  .mobileSpan {
    font-size: 270%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 160%;
  }
}

@media (min-width: 1240px) and (max-width: 1374px) {
  .descriptionMobile img {
    max-width: 500px;
    height: 320px;
  }

  .birthContentMobile {
    width: 410px;
    height: 380px;
  }

  .mobileSpan {
    font-size: 270%;
  }

  .listMobile ul li {
    font-size: 210%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 150%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 160%;
  }

  .mobileBtn, .businessBtn {
    height: 65px;
    margin-bottom: 7%;
  }
}

@media (min-width: 1024px) and (max-width: 1239px) {
  .descriptionMobile img {
    max-width: 440px;
    height: 280px;
  }

  .birthContentMobile {
    width: 340px;
    height: 338px;
  }

  .mobileSpan {
    font-size: 230%;
  }

  .listMobile ul li {
    font-size: 190%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 135%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 145%;
  }

  .mobileBtn, .businessBtn {
    height: 55px;
    margin-bottom: 7%;
  }
}

@media (min-width: 880px) and (max-width: 1023px) {
  .descriptionMobile img {
    max-width: 385px;
    height: 245px;
  }

  .birthContentMobile {
    width: 280px;
    height: 300px;
  }

  .mobileSpan {
    font-size: 180%;
  }

  .listMobile ul li {
    font-size: 160%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 120%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 135%;
  }

  .mobileBtn, .businessBtn {
    height: 50px;
    margin-bottom: 7%;
  }
}

@media (min-width: 731px) and (max-width: 879px) {
  .descriptionMobile img {
    max-width: 385px;
    height: 195px;
  }

  .birthContentMobile {
    width: 300px;
    height: 305px;
    margin-top: -55px;
  }

  .mobileSpan {
    font-size: 200%;
  }

  .listMobile ul li {
    font-size: 178%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 115%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 120%;
  }

  .mobileBtn, .businessBtn {
    height: 45px;
    margin-bottom: 10%;
  }
}

@media (min-width: 640px) and (max-width: 730px) {
  .descriptionMobile img {
    max-width: 320px;
    height: 170px;
  }

  .birthContentMobile {
    width: 260px;
    height: 240px;
    margin-top: -33px;
  }

  .mobileSpan {
    font-size: 170%;
  }

  .listMobile ul li {
    font-size: 147%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 115%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 105%;
  }

  .mobileBtn, .businessBtn {
    height: 45px;
    margin-bottom: 10%;
  }
}

@media (min-width: 560px) and (max-width: 639px) {
  .descriptionMobile img {
    max-width: 320px;
    height: 145px;
  }

  .birthContentMobile {
    width: 220px;
    height: 200px;
    margin-top: -30px;
  }

  .mobileSpan {
    font-size: 140%;
  }

  .listMobile ul li {
    font-size: 125%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 115%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 85%;
  }

  .mobileBtn, .businessBtn {
    height: 40px;
    margin-bottom: 10%;
  }
}

@media (min-width: 411px) and (max-width: 559px) {
  .descriptionMobile img {
    max-width: 280px;
    height: 105px;
  }

  .birthContentMobile {
    width: 200px;
    height: 180px;
    margin-top: -40px;
  }

  .listMobile {
    min-height: 90%;
  }

  .mobileSpan {
    font-size: 132%;
  }

  .listMobile ul li {
    font-size: 120%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 115%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 75%;
  }

  .mobileBtn, .businessBtn {
    height: 35px;
    margin-bottom: 15%;
  }
}

@media (min-width: 320px) and (max-width: 410px) {
  .eventsMobile {
    max-width: 100%;
  }

  .descriptionMobile img {
    max-width: 180px;
    height: 85px;
  }

  .birthContentMobile {
    width: 160px;
    height: 135px;
    margin-top: -31px;
  }

  .mobileSpan {
    font-size: 110%;
  }

  .listMobile {
    min-height: 90%;
  }

  .listMobile ul li {
    font-size: 84%;
  }

  .descriptionMobile p, .teamDescr p {
    font-size: 115%;
  }

  .mobileBtn .v-btn__content, .businessBtn .v-btn__content {
    font-size: 75%;
  }

  .mobileBtn, .businessBtn {
    height: 35px;
    margin-bottom: 15%;
  }
}
</style>