<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-layout class="tour">
      <iframe
        class="tourFrame"
        src="//tour-360.ru/projects/studiomyka/"
        frameborder="no"
        scrolling="yes"
        allowfullscreen
      ></iframe>
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
import MobContacts from "../components/MobContacts";


export default {
  name: "Tour",
  components: {
    Header,
    Toolbar,
    Partners,
    Footer,
    MobContacts
  },
  computed: {
    Cart() {
      return this.$store.getters.cart;
    },
  }
};
</script>

<style>
.tour {
  margin-bottom: 3%;
}

.tourFrame {
  width: 100%;
  min-height: 700px;
  margin: 0 auto;
}

@media (min-width: 320px) and (max-width: 430px) {
  .tourFrame {
    width: 100%;
    min-height: 200px;
    margin: 0 auto;
  }
}

@media (min-width: 431px) and (max-width: 825px) {
  .tourFrame {
    width: 100%;
    min-height: 400px;
    margin: 0 auto;
  }
}

@media (min-width: 826px) and (max-width: 1300px) {
  .tourFrame {
    width: 100%;
    min-height: 550px;
    margin: 0 auto;
  }
}
</style>


