<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-layout class="eventsBigPic"></v-layout>
    <v-layout class="festText">
      <p>
        Кулинарная студия «МУКА» - лучшее место, чтобы провести время с коллегами и друзьями. Многие считают, что еда выявляет лучшее в людях!
        Выбирайте программу мероприятия и приходите к нам готовить и отдыхать!
      </p>
    </v-layout>
    <v-layout class="events">
      <Event
        :pic="CorporatePic"
        :event="corporateParty.event"
        :text="corporateParty.p"
        :bonus1="corporateParty.bonus1"
        :bonus2="corporateParty.bonus2"
        :bonus3="corporateParty.bonus3"
      />
      <EventReverse
        :pic="teambuildingPic"
        :event="teamBuilding.event"
        :text="teamBuilding.p"
        :bonus1="teamBuilding.bonus1"
        :bonus2="teamBuilding.bonus2"
        :bonus3="teamBuilding.bonus3"
      />
      <Event
        :pic="presentPic"
        :event="presentation.event"
        :text="presentation.p"
        :bonus1="presentation.bonus1"
        :bonus2="presentation.bonus2"
        :bonus3="presentation.bonus3"
      />
      <EventReverse
        :pic="gradePic"
        :event="births.event"
        :text="births.p"
        :bonus1="births.bonus1"
        :bonus2="births.bonus2"
        :bonus3="births.bonus3"
      />
      <Event
        :pic="henPartyPic"
        :event="henParty.event"
        :text="henParty.p"
        :bonus1="henParty.bonus1"
        :bonus2="henParty.bonus2"
        :bonus3="henParty.bonus3"
      />
    </v-layout>

    <Partners />
    <MobContacts />
    <Footer />
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import EventReverse from "../components/EventReverse";
import Event from "../components/Event";
import MobContacts from "../components/MobContacts";

import gradePic from "../img/grade.png";
import teambuildingPic from "../img/teambuildingPic.png";
import presentPic from "../img/presentPic.png";
import CorporatePic from "../img/corporatePic.png";
import henPartyPic from "../img/henPartyPic.png";
export default {
  name: "Festivals",
  components: {
    Header,
    Toolbar,
    Partners,
    Event,
    EventReverse,
    MobContacts,
    Footer
  },
  data: () => ({
    gradePic: gradePic,
    teambuildingPic: teambuildingPic,
    CorporatePic: CorporatePic,
    teambuildingPic: teambuildingPic,
    presentPic: presentPic,
    henPartyPic: henPartyPic,
    corporateParty: {
      p:
        "Корпоративные мероприятия в кулинарной студии укрепляют отношения и вознаграждают ваших сотрудников, обучая их веселым навыкам в непринужденной обстановке.",
      event: "Корпоратив",
      bonus1: "Оригинальный сценарий проведения мероприятия",
      bonus2: "Меню разных стран мира и преветственный фуршет",
      bonus3: "Именные дипломы и рецепты каждому участнику"
    },
    teamBuilding: {
      p:
        "Проводя много времени на работе, сложно выявить дополнительные качества и особенности каждого члена вашей команды. Совместная работа в непривычной обстановке – отличный способ сплотить коллектив для достижения новых результатов!",
      event: "Тимбилдинг",
      bonus1: "Оригинальный сценарий проведения мероприятия",
      bonus2: "Эксклюзивные фартуки с вашим логотипом",
      bonus3: "Именные дипломы и рецепты каждому участнику"
    },
    presentation: {
      p:
        "Многофункциональное аудио-видео оборудование позволит провести качественную презентацию нового проекта или продукта. Сначала деловое обсуждение, а затем неформальная часть мероприятия - совместное приготовление обеда или ужина и подведение итогов плодотворной работы.",
      event: "Презентации",
      bonus1: "Оригинальный сценарий проведения мероприятия",
      bonus2: "Эксклюзивные фартуки с вашим логотипом",
      bonus3: "Именные дипломы и рецепты каждому участнику"
    },
    births: {
      p:
        "Празднование Дня рождения или юбилея в студи и «МУКА» - великолепная альтернатива традиционным ресторанам. Вы убедитесь, что праздник может быть не только «за столом», но и «за плитой», - cначала вместе готовим, а потом дружно и весело празднуем!",
      event: "Дни рождения",
      bonus1: "Оригинальный сценарий проведения мероприятия",
      bonus2: "Меню разных стран мира и преветственный фуршет",
      bonus3: "Именные дипломы и рецепты каждому участнику"
    },
    henParty: {
      p:
        "Кулинарная студия – идеальное место для долгожданной встречи с подружками без лишних «глаз и ушей»! У нас есть все для отдыха, веселья, разговоров, вкусного ужина и, конечно, сюрприз для будущей невесты!",
      event: "Девичники",
      bonus1: "Музыкальное сопровождение (фоновая музыка)",
      bonus2: "Музыкальное сопровождение (фоновая музыка)",
      bonus3: "Музыкальное сопровождение (фоновая музыка)"
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
.festText {
  margin: 0 auto;
  max-width: 75%;
}

.festText p {
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: 100;
}

.eventsBigPic {
  background-image: url(../img/eventsBigPic.png);
  background-size: 100%;
  min-height: 534px;
  margin-bottom: 2%;
}

@media (min-width: 320px) and (max-width: 414px) {
  .eventsBigPic {
    min-height: 150px;
  }

  .festText p {
    font-size: 18px;
    max-width: 310px;
  }
}
@media (min-width: 415px) and (max-width: 668px) {
  .eventsBigPic {
    min-height: 190px;
  }

  .festText p {
    font-size: 18px;
    max-width: 410px;
  }
}

@media (min-width: 668px) and (max-width: 824px) {
  .eventsBigPic {
    min-height: 270px;
  }
}

@media (min-width: 824px) and (max-width: 1024px) {
  .eventsBigPic {
    min-height: 310px;
  }
}

@media (min-width: 1025px) and (max-width: 1366px) {
  .eventsBigPic {
    min-height: 390px;
  }
}
</style>


