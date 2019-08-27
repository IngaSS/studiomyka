<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <MasterClassModal />
    <Partners />
    <Footer />
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import MasterClassModal from "../components/MasterClassModal";
import Partners from "../components/Partners";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Toolbar,
    MasterClassModal,
    Partners,
    Footer
  },
};
</script>