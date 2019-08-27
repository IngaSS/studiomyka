<template>
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
    <MasterClasses
      :masterClasses="this.products"
      v-if="show"
      :search="this.search"
      :addMaster="addMaster"
    />
    <MasterClasses
      :masterClasses="this.filtred"
      v-if="!show"
      :search="this.search"
      :addMaster="addMaster"
    />
    <MasterClasses
      :masterClasses="this.filteredItems"
      v-if="filter"
      :search="this.search"
      :addMaster="addMaster"
    />
  </v-layout>
</template>

<script>
import products from "../masterclasses.json";
import MasterClasses from "../components/MasterClasses";
import moment from "moment";

export default {
  components: {
    MasterClasses
  },
  data: () => ({
    type: "Все",
    search: "",
    products: products,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    filtred: [],
    show: true,
    filter: false,
    basket: []
  }),
  methods: {
    showMasterClass() {
      let re = /20[\d]+\s+\D+/;
      let dateItem = this.transformDate.replace(re, "");
      function containsElem(element, index, array) {
        return element.h5 !== dateItem;
      }
      if (this.products.every(containsElem)) {
        this.show = false;
        this.filtred.splice(0);
      }
      this.products.forEach(e => {
        if (e.h5.includes(dateItem)) {
          this.show = false;
          this.filtred.push(e);
          this.filtred.forEach(i => {
            if (!i.h5.includes(dateItem)) {
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
      arr = this.products;
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
            arr = this.products;
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
    },
    addMaster(item) {
      let find = this.products.find(el => {
        el.h3 === item.h3;
      });
      if (find) {
        find.quantity++;
      } else {
        let prod = Object.assign({ quantity: 1 }, item);
        this.basket.push(prod);
      }

      console.log(this.basket);
    }
  },
  mounted() {},
  computed: {
    transformDate: function() {
      return this.date
        ? moment(this.date)
            .locale("ru")
            .format("LL")
        : "";
    }
  }
};
</script>

<style>
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

