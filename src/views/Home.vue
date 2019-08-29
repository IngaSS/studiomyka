<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-layout class="bigPic"></v-layout>
    <v-layout class="textLayout">
      <div class="text">
        <p>Кулинарная студия «МУКÁ» - общее пространство для тех, кто увлечён хорошей едой!.</p>
        <p>
          Кулинарная студия «МУКÁ» - общее пространство для тех, кто увлечён хорошей едой!
          Процесс совместного приготовления еды в уютной атмосфере и под руководством
          шеф-повара - лучший способ для оригинального времяпрепровождения.
        </p>
        <h1>Баннер-анонс специального мероприятия</h1>
      </div>
    </v-layout>
    <h1 class="h1">Ближайшие мастер-классы</h1>
    <MasterClasses :masterClasses="masterClasses" />
    <v-layout>
      <v-btn class="allMastClasses" to="/MasterClassesPage">Посмотреть весь календарь</v-btn>
    </v-layout>
    <Sertificate />
    <!-- <Contacts /> -->
    <Partners />
    <Contacts />
    <MobContacts />
    <Footer />
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import MasterClasses from "../components/MasterClasses";
import Sertificate from "../components/Sertificate";
import Contacts from "../components/Contacts";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import MobContacts from "../components/MobContacts";

import masterclasses from "../masterclasses.json";

export default {
  name: "app",
  components: {
    Header,
    Toolbar,
    MasterClasses,
    Sertificate,
    Contacts,
    Partners,
    Footer,
    MobContacts
  },
  data: () => ({
    masterClasses: masterclasses
  }),
  methods: {},
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style>
a {
  font-family: "Fira Sans", sans-serif;
}

.h1,
.businessText h1 {
  max-width: 80%;
  margin: 0 auto;
  color: #ffffff;
  font-size: 2vw;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  margin-top: 2%;
}

.container {
  padding: 0;
  font-family: "Fira Sans", sans-serif;
}

.bigPic,
.businessPic {
  min-height: 32vw;
  background-image: url(../img/bigPic.png);
  background-size: 100%;
}

.textLayout {
  justify-content: center;
  margin-top: 2%;
}

.text {
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
}

.text p {
  font-family: "Fira Sans", sans-serif;
  font-size: 1.5vw;
  color: white;
  /* max-width: 63vw; */
}

.text h1 {
  font-family: "Fira Sans", sans-serif;
  font-size: 2.5vw;
  font-weight: 600;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.allMastClasses {
      width: 33vw;
    min-height: 7.5vw;
  margin: 0 auto;
  margin-top: 3vw;
  border: solid 0.09vw #895aac;
  border-radius: 0px;
  background-color: transparent !important;
}

.allMastClasses .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 1.8vw;
  font-weight: 300;
  font-stretch: extra-condensed;
  color: #ffffff;
}

@media (min-width: 320px) and (max-width: 499px) {
  .text {
    max-width: 95%;
  }

  .text p {
    font-size: 5vw;
  }

  .text h1 {
    font-size: 5.5vw;
  }

  .h1,
  .businessText h1 {
    font-size: 5vw;
  }

  .allMastClasses {
    width: 90vw;
    min-height: 16.5vw;
  }

  .allMastClasses .v-btn__content {
    font-size: 5vw;
  }
}

@media (min-width: 500px) and (max-width: 991px) {
  .text {
    max-width: 95%;
  }

  .text p {
    font-size: 2.3vw;
  }

  .text h1 {
    font-size: 4vw;
  }

  .h1,
  .businessText h1 {
    font-size: 5vw;
  }

  .allMastClasses {
    width: 40vw;
    min-height: 8.5vw;
  }

  .allMastClasses .v-btn__content {
    font-size: 2.3vw;
  }
}

@media (min-width: 901px) and (max-width: 1100px) {
  .text {
    max-width: 95%;
  }

  .text p {
    font-size: 2vw;
  }

  .text h1 {
    font-size: 3vw;
  }

  .h1,
  .businessText h1 {
    font-size: 3vw;
  }
}

/* @media (min-width: 415px) and (max-width: 668px) {
  .text h1 {
    font-size: 160%;
  }

  .h1,
  .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }
}

@media (min-width: 668px) and (max-width: 824px) {
  .text h1 {
    font-size: 160%;
  }

  .h1,
  .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }
}

@media (min-width: 824px) and (max-width: 1024px) {
  .text h1 {
    font-size: 160%;
  }

  .h1,
  .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }
}

@media (min-width: 1025px) and (max-width: 1366px) {
  .text h1 {
    font-size: 280%;
  }

  .h1,
  .businessText h1 {
    font-size: 300%;
    font-weight: 300;
  }
}

@media (min-width: 1420px) and (max-width: 1550px) {
  .text h1 {
    font-size: 280%;
  }

  .h1,
  .businessText h1 {
    font-size: 300%;
    font-weight: 300;
  }
}

@media (min-width: 1300px) and (max-width: 1419px) {
}

@media (min-width: 1170px) and (max-width: 1299px) {
}

@media (min-width: 1050px) and (max-width: 1169px) {
}

@media (min-width: 900px) and (max-width: 1049px) {
}

@media (min-width: 320px) and (max-width: 990px) {
  .mobHeader {
    display: flex;
  }
} */
</style>
