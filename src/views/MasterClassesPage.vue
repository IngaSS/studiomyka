<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-layout class="bigPic"></v-layout>
    <v-layout class="mastClassText">
      <p>
        Особенностью наших мастер-классов является индивидуальный подход к каждому гостю. Вы будете находиться на своей «личной территории», с индивидуальным оборудованием, аксессуарами и подготовленными специально для Вас продуктами. Никаких «общих котлов»! Шеф-повар уделит внимание абсолютно каждому участнику и понятно расскажет, и покажет все, что «не видно между строк» в кулинарных книгах и программах, ответит на все возникшие вопросы и вручит именной диплом о прохождении мастер-класса. По окончанию мастер-класса участники собираются за большим столом, чтобы насладиться приготовленной едой.
        Каждый мастер-класс – это полное погружение в процесс! Вы убедитесь, что приготовление вкусной, яркой и полезной еды – это не МУ́КА, а интересный процесс, который может доставлять удовольствие.
      </p>
    </v-layout>
    <!-- <Products /> -->
    <v-layout class="products">
      <v-layout wrap align-center class="filterWrapper">
        <v-flex xs12 sm6 md4 class="filterLine">
          <v-select
            class="filter"
            :items="['Все', 'От 1000 до 3000', 'От 3000 до 5000', 'От 5000 до 6000','По названию']"
            v-model="type"
            @change="filterByPrice"
            suffix
          ></v-select>
        </v-flex>
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
        ></v-text-field>
        <v-flex xs12 sm6 md2 class="pickerLine">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field :value="transformDate" prepend-icon="event" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
              locale="ru"
              @change="showMasterClass"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
      <MasterClasses :masterClasses="MasterClasses" v-if="show" :search="this.search" />
      <MasterClasses :masterClasses="filtred" v-if="!show" :search="this.search" />
      <MasterClasses :masterClasses="filteredItems" v-if="filter" :search="this.search" />
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
import MasterClasses from "../components/MasterClasses";
import MobContacts from "../components/MobContacts";

import products from "../masterclasses.json";
import moment from "moment";

export default {
  name: "MasterClassesPage",
  components: {
    Header,
    Toolbar,
    // Products,
    Partners,
    MasterClasses,
    MobContacts,
    Footer
  },
  data: () => ({
    type: "Все",
    search: "",
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    filtred: [],
    show: true,
    filter: false,
    cartItems: []
  }),
  computed: {
    MasterClasses() {
      return this.$store.getters.masterClasses;
    },

    Cart() {
      return this.$store.getters.cart;
    },

    transformDate: function() {
      return this.date
        ? moment(this.date)
            .locale("ru")
            .format("LL")
        : "";
    }
  },

  created() {
    this.$store.dispatch("masterClassesList");
  },

  methods: {
    showMasterClass() {
      console.log(this.date);
      let dateItem = this.date.substr(0, 10);

      // let re = /20[\d]+\s+\D+/;
      // let dateItem = this.transformDate.replace(re, "");
      function containsElem(element) {
        return element.dateofevent.substr(0, 10) !== dateItem;
      }
      if (this.MasterClasses.every(containsElem)) {
        this.show = false;
        this.filtred.splice(0);
      }
      this.MasterClasses.forEach(e => {
        if (e.dateofevent.includes(dateItem)) {
          this.show = false;
          this.filtred.push(e);
          this.filtred.forEach(i => {
            if (!i.dateofevent.includes(dateItem)) {
              this.filtred.splice(0);
              this.filtred.push(e);
            }
          });
        }
      });
    },

    filterByPrice() {
      let typeS = this.type;
      let arr;
      let arr2 = [];
      arr = this.MasterClasses;
      // if (this.date != new Date()) {
      //   arr = this.filtred;
      // } //подумать
      switch (typeS) {
        case "От 1000 до 3000":
          this.show = false;
          arr.forEach(c => {
            if (c.price <= 3000 && c.price >= 1000) {
              arr2.push(c);
            }
          });
          arr2.sort(function(a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          return (this.filtred = arr2);
          break;
        case "От 3000 до 5000":
          this.show = false;
          arr.forEach(c => {
            if (c.price <= 5000 && c.price >= 3000) {
              arr2.push(c);
            }
          });
          arr2.sort(function(a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          return (this.filtred = arr2);
          break;
        case "От 5000 до 6000":
          this.show = false;
          arr.forEach(c => {
            if (c.price <= 6000 && c.price >= 5000) {
              arr2.push(c);
            }
          });
          arr2.sort(function(a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          return (this.filtred = arr2);
          break;
        case "По названию":
          if (this.show) {
            arr = this.MasterClasses;
          } else {
            arr = this.filtred;
          }
          arr.sort(function(a, b) {
            if (a.h3 > b.h3) {
              return 1;
            }
            if (a.h3 < b.h3) {
              return -1;
            }
            return 0;
          });
          break;
        case "Все":
          this.show = true;
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style>
.mastClassText {
  margin-top: 1%;
}
.mastClassText p {
  color: white;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  color: white;
  text-align: justify;
  text-indent: 70px;
}

.products {
  flex-direction: column;
  margin-top: 5%;
}

.filterWrapper {
  background-color: rgba(137, 90, 172, 0.4);
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
}

.filterWrapper .v-picker__title {
  color: white;
  background-color: #895aac;
}

.filterLine {
  padding-left: 1%;
}

.pickerLine {
  padding-right: 1%;
}

.filter .v-menu__content {
  top: 0px !important;
  left: 0px !important;
  transform-origin: left top;
  z-index: 8;
}

.filterWrapper .theme--light.v-icon,
.filterWrapper .theme--light.v-select .v-select__selections {
  color: white;
}

.filterWrapper
  .v-text-field
  > .v-input__control
  > .v-input__slot
  > .v-text-field__slot {
  border-bottom: 1px solid white;
}

.filterWrapper .theme--light.v-input:not(.v-input--is-disabled) input {
  color: white;
}

.filterWrapper .v-select__slot {
  border-bottom: 1px solid white;
}

.pickerLine .v-date-picker-table .v-btn.v-btn--active {
  background-color: #895aac;
}
</style>


