<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-layout class="childBigPic"></v-layout>
    <v-layout class="textLayoutBirth">
      <div class="textChild">
        <p>
          Дети - самое важное, что есть в нашей жизни!
          Поэтому мы хотим дать им самое лучшее и, бесспорно, побаловать их.
          Предлагаем удивить вашего ребенка и устроить незабываемый праздник
          в Кулинарной студии «МУКА».
        </p>
      </div>
    </v-layout>
    <v-layout class="events">
      <!-- <Event
        :pic="birthPic"
        :event="textChild.event"
        :text="textChild.p"
        :bonus1="textChild.bonus1"
        :bonus2="textChild.bonus2"
        :bonus3="textChild.bonus3"
      />
      <EventReverse
        :pic="gradePic"
        :event="textGrade.event"
        :text="textGrade.p"
        :bonus1="textGrade.bonus1"
        :bonus2="textGrade.bonus2"
        :bonus3="textGrade.bonus3"
      /> -->
    </v-layout>
    <Partners />
    <MobContacts />
    <Footer />
  </v-container>
</template>


<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
// import Event from "../components/Event";
// import EventReverse from "../components/EventReverse";
import MobContacts from "../components/MobContacts";

import birthPic from "../img/birth.png";
import gradePic from "../img/grade.png";

export default {
  name: "ChildrenEvents",
  components: {
    Header,
    Toolbar,
    Partners,
    // Event,
    // EventReverse,
    MobContacts,
    Footer
  },
  data: () => ({
    birthPic: birthPic,
    gradePic: gradePic,
    textChild: {
      p:
        "В студии «МУКА» детский праздник не только веселое застолье, но и с познавательное шоу: дети сами приготовят любимые блюда, устроят зажигательные танцы на бумажной дискотеке и от души повеселятся с аниматорами. А может быть им удастся пройти эксклюзивный квест «МУКА».",
      event: "Дни рождения",
      bonus1: "Оригинальный сценарий",
      bonus2: "Праздничное украшение студии",
      bonus3: "Именые дипломы и рецепты каждому участнику"
    },
    textGrade: {
      p:
        "Для выпускников мы организуем увлекательный кулинарный батл, на котором будут бороться за звания «Лучшей», «Быстрой» или «Активной» команды шеф-поваров. Победителей ждут дипломы и призы",
      event: "Выпускной",
      bonus1: "Оригинальный сценарий проведения праздника",
      bonus2: "Многофункциональное аудио-видео оборудование",
      bonus3: "Именые дипломы и рецепты каждому участнику"
    }
  }),
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style>
.childBigPic {
  min-height: 534px;
  background-image: url(../img/childBigPic.png);
  background-size: 100%;
  margin-bottom: 2%;
}

.textLayoutBirth {
  max-width: 80%;
  margin: 0 auto;
}

.textChild {
  margin: 0 auto;
}

.textChild p {
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: 100;
  max-width: 900px;
}

.events {
  display: flex;
  flex-direction: column;
}

.birthdays {
  max-width: 75%;
  margin: 0 auto;
  margin-bottom: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
}

.birthHeading {
  text-align: -webkit-right;
}

.birthdays h2 {
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-size: 28px;
  line-height: 2.5;
  font-weight: 300;
  font-stretch: extra-condensed;
  color: #ffffff;
}

.birthPic .v-image__image--cover,
.birthPic .v-responsive__content,
.birthPic {
  width: 840px;
  height: 565px;
  max-width: 840px;
}

.gradePic .v-image__image--cover,
.gradePic .v-responsive__content,
.gradePic {
  width: 950px;
  height: 575px;
  max-width: 950px;
}

.birthContent {
  width: 710px;
  background-color: rgba(137, 90, 172, 0.4);
  min-height: 675px;
  margin-top: -3.5%;
  margin-left: -9%;
  text-align: right;
  text-align: -webkit-right;
  text-align: -moz-right;
  margin-bottom: 2%;
}

.gradeContent {
  width: 630px;
  background-color: rgba(137, 90, 172, 0.4);
  min-height: 675px;
  margin-top: -3.5%;
  margin-right: -9%;
  text-align: left;
  text-align: -webkit-left;
  margin-bottom: 2%;
}

.gradeContent h2 {
  text-align: left;
  max-width: 400px;
  font-family: "Fira Sans", sans-serif;
  font-size: 38px;
  font-weight: 600;
  color: #ffffff;
}

.gradeContent p {
  max-width: 400px;
  font-family: "Fira Sans", sans-serif;
  font-size: 22px;
  font-weight: 100;
  line-height: 1.7;
  text-align: left;
  color: #ffffff;
}

.gradeContText {
  padding-left: 30px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.birthContent h2 {
  text-align: right;
  max-width: 400px;
  font-family: "Fira Sans", sans-serif;
  font-size: 38px;
  font-weight: 600;
  text-align: right;
  color: #ffffff;
  margin: 0 0 0 auto;
}

.birthContent p {
  max-width: 500px;
  font-family: "Fira Sans", sans-serif;
  font-size: 22px;
  font-weight: 100;
  line-height: 1.7;
  text-align: right;
  color: #ffffff;
  margin: 0 0 0 auto;
}

.birthBtn {
  width: 320px;
  height: 80px;
  border-radius: 22px;
  box-shadow: 0 2px 6px 0 rgba(255, 255, 255, 0.5);
  background-color: #ffffff;
}

.gradeBtn {
  width: 320px;
  height: 80px;
  border-radius: 22px;
  box-shadow: 0 2px 6px 0 rgba(255, 255, 255, 0.5);
  background-color: #ffffff;
  margin: 0 0 0 auto;
}

.gradeBtn .v-btn__content,
.birthBtn .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  text-align: right;
  color: #895aac;
}

.birthContText {
  padding-right: 30px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profits {
  margin-top: 3%;
}

.profits ul {
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
}

.profits ul li {
  color: white;
  list-style-type: none;
  display: flex;
}

.profits .material-icons {
  height: 50px;
  width: 50px;
  background-color: rgba(137, 90, 172, 0.2);
  font-size: 56px;
  margin-top: -5%;
  margin-right: 10px;
}

.profits p {
  line-height: 1.5;
  font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  font-weight: 100;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 731px) and (max-width: 1024px) {
  .events {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .events .v-responsive,
  .events .layout {
    flex: unset;
  }
}

@media (min-width: 320px) and (max-width: 1024px) {
  .birthdays {
    max-width: 100%;
    flex-direction: column;
    text-align: -webkit-center;
  }

  .birth {
    display: flex;
    flex-direction: column;
  }

  .grade {
    display: flex;
    flex-direction: column-reverse;
  }

  .birthPic .v-image__image--cover,
  .birthPic .v-responsive__content,
  .birthPic,
  .gradePic .v-image__image--cover,
  .gradePic .v-responsive__content,
  .gradePic {
    width: 320px;
    height: 210px;
    max-width: 320px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .birthContent,
  .gradeContent {
    width: 320px;
    min-height: 380px;
    margin-top: 0;
    margin-left: 0;
    text-align: center;
    text-align: -webkit-center;
    margin-right: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .birthContText,
  .gradeContText {
    margin: 0 auto;
    min-height: 360px;
    max-width: 85%;
    padding-right: 0;
    padding-left: 0;
  }

  .birthContent h2,
  .gradeContent h2 {
    font-size: 27px;
    text-align: center;
    margin: 0 auto;
  }

  .birthContent p,
  .gradeContent p {
    font-size: 15px;
    text-align: justify;
    margin: 0 auto;
  }

  .birthBtn,
  .gradeBtn {
    width: 200px;
    height: 60px;
    margin: 0 auto;
  }

  .birthBtn .v-btn__content,
  .gradeBtn .v-btn__content {
    font-size: 19px;
  }

  .profits {
    max-width: 100%;
    flex-direction: column;
  }

  .profits ul {
    flex-direction: column;
    width: 70%;
  }

  .profits p {
    text-align: -webkit-auto;
  }
}

@media (min-width: 365px) and (max-width: 1024px) {
  .birth + .profits ul li:nth-child(2) {
    margin-top: 8%;
  }
}

@media (min-width: 1255px) and (max-width: 1300px) {
  .birthPic .v-image__image--cover,
  .birthPic .v-responsive__content,
  .birthPic,
  .gradePic .v-image__image--cover,
  .gradePic .v-responsive__content,
  .gradePic {
    width: 600px;
    height: 380px;
    max-width: 600px;
  }

  .birthContent,
  .gradeContent {
    width: 590px;
    min-height: 460px;
  }

  .birthContText,
  .gradeContText {
    padding-right: 30px;
    min-height: 440px;
  }

  .birthContent h2,
  .gradeContent h2 {
    max-width: 300px;
    font-size: 32px;
  }

  .birthContent p,
  .gradeContent p {
    max-width: 310px;
    font-size: 15px;
  }

  .birthBtn,
  .gradeBtn {
    width: 240px;
    height: 65px;
  }

  .birthBtn .v-btn__content,
  .gradeBtn .v-btn__content {
    font-size: 18px;
  }

  .profits p {
    font-size: 14px;
  }
}

@media (min-width: 1301px) and (max-width: 1408px) {
  .birthPic .v-image__image--cover,
  .birthPic .v-responsive__content,
  .birthPic,
  .gradePic .v-image__image--cover,
  .gradePic .v-responsive__content,
  .gradePic {
    width: 550px;
    height: 360px;
    max-width: 550px;
  }

  .birthContent,
  .gradeContent {
    width: 680px;
    min-height: 435px;
  }

  .birthContText,
  .gradeContText {
    min-height: 420px;
  }

  .birthContent h2,
  .gradeContent h2 {
    max-width: 400px;
    font-size: 32px;
  }

  .birthContent p,
  .gradeContent p {
    max-width: 80%;
    font-size: 124%;
  }

  .birthBtn,
  .gradeBtn {
    width: 200px;
    height: 60px;
  }

  .birthBtn .v-btn__content,
  .gradeBtn .v-btn__content {
    font-size: 20px;
  }
}

@media (min-width: 1409px) and (max-width: 1679px) {
  .birthPic .v-image__image--cover,
  .birthPic .v-responsive__content,
  .birthPic,
  .gradePic .v-image__image--cover,
  .gradePic .v-responsive__content,
  .gradePic {
    width: 700px;
    height: 455px;
    max-width: 700px;
  }

  .birthContent,
  .gradeContent {
    width: 660px;
    min-height: 540px;
  }

  .birthContText,
  .gradeContText {
    min-height: 450px;
  }

  .birthContent h2,
  .gradeContent h2 {
    max-width: 250px;
    font-size: 30px;
  }

  .birthContent p,
  .gradeContent p {
        max-width: 65%;
    font-size: 130%;
  }

  .birthBtn,
  .gradeBtn {
    width: 180px;
    height: 55px;
  }

  .birthBtn .v-btn__content,
  .gradeBtn .v-btn__content {
    font-size: 17px;
  }
}

@media (min-width: 1025px) and (max-width: 1254px) {
  .birthdays {
    max-width: 90%;
  }

  .birthPic .v-image__image--cover,
  .birthPic .v-responsive__content,
  .birthPic,
  .gradePic .v-image__image--cover,
  .gradePic .v-responsive__content,
  .gradePic {
    width: 620px;
    height: 400px;
    max-width: 620px;
  }

  .profits {
    max-width: 95%;
  }

  .birthContent,
  .gradeContent {
    width: 476px;
    min-height: 465px;
  }

  .birthContText,
  .gradeContText {
    min-height: 430px;
  }

  .birthContent h2,
  .gradeContent h2 {
    max-width: 318px;
    font-size: 26px;
  }

  .birthContent p,
  .gradeContent p {
    max-width: 75%;
    font-size: 110%;
  }

  .birthBtn,
  .gradeBtn {
    width: 245px;
    height: 65px;
  }

  .birthBtn .v-btn__content,
  .gradeBtn .v-btn__content {
    font-size: 23px;
  }
}

@media (min-width: 320px) and (max-width: 414px) {
  .childBigPic,
  .eventsBigPic {
    min-height: 150px;
  }
}

@media (min-width: 415px) and (max-width: 668px) {
  .childBigPic,
  .eventsBigPic {
    min-height: 190px;
  }
}

@media (min-width: 668px) and (max-width: 824px) {
  .childBigPic,
  .eventsBigPic {
    min-height: 270px;
  }
}

@media (min-width: 824px) and (max-width: 1024px) {
  .childBigPic,
  .eventsBigPic {
    min-height: 310px;
  }
}

@media (min-width: 1025px) and (max-width: 1366px) {
  .childBigPic,
  .eventsBigPic {
    min-height: 390px;
  }
}
</style>

