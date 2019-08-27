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
    <!-- <Contacts /> -->
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

.h1, .businessText h1 {
  max-width: 80%;
  margin: 0 auto;
  color: #ffffff;
  font-size: 46px;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  margin-top: 2%;
}

.container {
  padding: 0;
  font-family: "Fira Sans", sans-serif;
}

.bigPic, .businessPic {
  min-height: 535px;
  background-image: url(../img/bigPic.png);
  background-size: 100%;
}

.textLayout {
  justify-content: center;
  margin-top: 2%;
}

.text {
  text-align: center;
}

.text p {
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  color: white;
  max-width: 924px;
}

.text h1 {
  font-family: "Fira Sans", sans-serif;
  font-size: 46px;
  font-weight: 600;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

@media (min-width: 320px) and (max-width: 414px) {
  .text h1 {
    font-size: 160%;
  }

  .h1, .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }

  .bigPic, .businessPic {
    min-height: 135px;
  }
}

@media (min-width: 415px) and (max-width: 668px) {
  .text h1 {
    font-size: 160%;
  }

  .h1, .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }

  .bigPic, .businessPic {
    min-height: 190px;
  }
}

@media (min-width: 668px) and (max-width: 824px) {
  .text h1 {
    font-size: 160%;
  }

  .h1, .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }

  .bigPic, .businessPic {
    min-height: 270px;
  }
}

@media (min-width: 824px) and (max-width: 1024px) {
  .text h1 {
    font-size: 160%;
  }

  .h1, .businessText h1 {
    font-size: 166%;
    font-weight: 300;
  }

  .bigPic, .businessPic {
    min-height: 310px;
  }
}

@media (min-width: 1025px) and (max-width: 1366px) {
  .text h1 {
    font-size: 280%;
  }

  .h1, .businessText h1 {
    font-size: 300%;
    font-weight: 300;
  }

  .bigPic, .businessPic {
    min-height: 390px;
  }
}

@media (min-width: 1420px) and (max-width: 1550px) {
  .text h1 {
    font-size: 280%;
  }

  .h1, .businessText h1 {
    font-size: 300%;
    font-weight: 300;
  }

  .bigPic, .businessPic {
    min-height: 494px;
  }
}

@media (min-width: 1300px) and (max-width: 1419px) {
  .bigPic, .businessPic {
    min-height: 442px;
  }
}

@media (min-width: 1170px) and (max-width: 1299px) {
  .bigPic, .businessPic {
    min-height: 414px;
  }
}

@media (min-width: 1050px) and (max-width: 1169px) {
  .bigPic, .businessPic {
    min-height: 370px;
  }
}

@media (min-width: 900px) and (max-width: 1049px) {
  .bigPic, .businessPic {
    min-height: 340px;
  }
}

@media (min-width: 320px) and (max-width: 990px) {
  .mobHeader {
    display: flex;
  }
}
</style>
