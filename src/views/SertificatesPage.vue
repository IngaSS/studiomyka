<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-card class="sertCart">
      <div class="sertHeader">
        <h1>Подарочный сертификат</h1>
      </div>
      <img :src="sertPic" alt="#" />
      <p>
        Подарочный Сертификат дает возможность посетить любой мастер-класс в Кулинарной студии «МУКА». Сделайте сюрприз вашим близким или друзьям. Мы направим сертификат по указанному электронному адресу или в праздничном конверте доставим курьером.
        Ждем вас и ваших друзей в Кулинарной студии «МУКА»!
      </p>
      <v-select :items="Sertificates" v-model="type" outline class="selectNom"></v-select>
      <v-btn @click="buySert(type)">Заказать</v-btn>
    </v-card>

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
import MobContacts from "../components/MobContacts";

import sertPic from "../img/sertPic.png";
export default {
  name: "Business",
  components: {
    Header,
    Toolbar,
    Partners,
    MobContacts,
    Footer
  },
  data: () => ({
    type: "Выбрать номинал",
    sertPic: sertPic
  }),

  computed: {
    Sertificates() {
      return this.$store.getters.sertificates;
    }
  },

  methods: {
    buySert(item) {
      this.$store.dispatch("buySert", item);
    }
  },

  created() {
    console.log(this.$store.getters.sertificates);
  }
};
</script>

<style>
.selectNom .v-menu > .v-menu__content {
  position: absolute !important;
  top: 105% !important;
  left: 0 !important;
}

.selectNom .v-select__selections {
  padding-top: 5px !important;
}

.sertCart {
  width: 600px;
  min-height: 480px;
  margin: 5% auto;
  text-align: center;
}

.sertCart img {
  margin-top: 3%;
}

.sertCart p {
  max-width: 84%;
  margin: 1% auto;
  text-align: left;
}

.sertHeader {
  min-height: 70px;
  background-color: #895aac;
}

.sertHeader h1 {
  max-width: 70%;
  margin: auto;
  line-height: 1.9;
  font-family: "Fira Sans", sans-serif;
  font-size: 35px;
  font-weight: 300;
  color: #ffffff;
}

.selectNom {
  max-width: 220px;
  margin: 0 auto !important;
}

.selectNom .v-input__slot {
  height: 45px !important;
  min-height: 40px !important;
  border: 1px solid #8a58ab !important;
}

.selectNom .v-label {
  top: 13px !important;
}

.selectNom .v-input__append-inner {
  margin-top: 11px !important;
}
</style>