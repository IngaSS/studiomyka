<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <div class="cartDiv">
      <div class="titleCardDiv">
        <h1 class="cartTitle">Ваша корзина</h1>
      </div>
      <v-data-table
        :items="Cart"
        class="elevation-1 cartTable"
        hide-default-footer
        hide-default-header
        no-data-text="Корзина пуста"
      >
        <template v-slot:items="props">
          <td class="text-xs-center">
            <img :src="require('../img/' + props.item.img)" alt="#" />
          </td>
          <td class="text-xs-center">{{ props.item.h3 }}</td>
          <td class="text-xs-center">
            <v-btn class="minus" @click="decrement(props.item)">-</v-btn>
            {{ props.item.quantity }}
            <v-btn class="plus" @click="increment(props.item)">+</v-btn>
          </td>
          <td class="text-xs-center">{{ props.item.price * props.item.quantity }} руб.</td>
          <td class="text-xs-right">
            <v-btn @click="removeProduct(props.item)" class="removeBtn">
              <i class="material-icons">delete_forever</i> Убрать из корзины
            </v-btn>
          </td>
        </template>
      </v-data-table>
      <div class="summingDiv" v-if="Cart.length">
        <h1 class="summing">
          Итого:
          <span>{{ sumUp() }}</span> руб.
        </h1>
        <v-btn class="makeOder" @click="inputData()">Оформить заказ</v-btn>
      </div>
      <div class="orderDiv" v-if="show && Cart.length">
        <v-form ref="form" v-model="valid" class="orderForm" lazy-validation>
          <div class="inputFields">
            <div class="inputDiv">
              <div class="firstGroup">
                <v-text-field
                  :single-line="boulen"
                  class="inputField"
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                  :single-line="boulen"
                  class="inputField"
                  v-model="sername"
                  :rules="nameRules"
                  label="Sername"
                  required
                ></v-text-field>
              </div>
              <div class="secondGroup">
                <v-text-field
                  :single-line="boulen"
                  class="inputField"
                  v-model="phone"
                  label="Phone"
                  required
                ></v-text-field>
                <v-text-field
                  :single-line="boulen"
                  class="inputField"
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </div>
            </div>
            <v-select
              :items="this.items"
              :single-line="boulen"
              label="Способ оплаты"
              class="selection"
            ></v-select>
          </div>
        </v-form>
      </div>
    </div>
    <div class="div">
      <v-btn :disabled="!valid" color="success" class="submitBtn" @click="validate" v-if="show && Cart.length">Перейти к оплате</v-btn>
    </div>

    <Footer />
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";

export default {
  name: "CartView",
  components: {
    Header,
    Toolbar,
    Footer
  },
  data: () => ({
    show: false,
    valid: true,
    name: "",
    sername: "",
    phone: "",
    boulen: true,
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: "Способ оплаты",
    items: ["Способ оплаты", "Наличные", "Банковской картой"]
  }),

  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },

    removeProduct(product) {
      this.$store.commit("removeProduct", product);
    },

    decrement(item) {
      if (this.Cart.includes(item) && item.quantity > 1) {
        item.quantity--;
      }
    },

    increment(item) {
      if (this.Cart.includes(item)) {
        item.quantity++;
      }
    },

    sumUp() {
      let result = 0;
      this.Cart.forEach(elem => {
        let final = elem.price * elem.quantity;
        result += final;
      });

      return result;
    },

    inputData() {
      this.show = true;
    }
  },
};
</script>

<style>
.div {
  text-align: center;
  margin-bottom: 10%;
  margin-top: 1%;
}

.submitBtn {
  width: 250px;
  height: 50px;
  background-color: #aa70d6 !important;
}

.cartDiv {
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 auto;
  max-width: 85%;
  margin-top: 5%;
  margin-bottom: 4%;
}

.titleCardDiv {
  /* max-width: 79.9%; */
  margin: 0 auto;
  margin-top: 5%;
  /* background-color: rgba(255, 255, 255, 0.1); */
}

.cartTitle,
.summingDiv {
  color: white;
  font-size: 35px;
  font-family: "Fira Sans", sans-serif;
  padding-top: 10px;
  padding-left: 15px;
  padding-bottom: 10px;
  max-width: 97%;
  margin: 0 auto;
  margin-bottom: 0;
  /* line-height: 1.5; */
}

.summingDiv {
  display: flex;
  justify-content: space-between;
}

.summing {
  line-height: 1.7;
  font-size: 35px;
  font-weight: 100 !important;
}

.summing span {
  font-weight: 700;
}

.makeOder {
  width: 200px;
  height: 55px;
  border-radius: 25px;
  background-color: #aa70d6 !important;
  box-shadow: none !important;
}

.makeOder .v-btn__content {
  font-weight: 400;
  font-size: 18px;
  color: white;
  font-family: "Fira Sans", sans-serif;
}

.cartTable table.v-table {
  background-color: transparent;
  /* background-color: rgba(255, 255, 255, 0.1); */
  /* margin: 0 auto; */
  /* max-width: 80%; */
  /* margin-top: 5%; */
  border-collapse: separate;
  border-spacing: 0 2em;
}

.cartTable .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
  background: transparent;
}

.cartTable table.v-table tbody td {
  font-weight: 400;
  font-size: 22px;
  color: white;
  font-family: "Fira Sans", sans-serif;
}

.minus .v-btn__content,
.plus .v-btn__content,
.removeBtn .v-btn__content {
  line-height: 1;
  font-size: 22px;
  color: white;
  font-family: "Fira Sans", sans-serif;
}

.minus,
.plus {
  height: 29px;
  padding: 0;
  max-height: 29px;
  min-width: 29px;
  border-radius: 15px;
  background-color: #aa70d6 !important;
  margin-bottom: 9px;
  box-shadow: none !important;
}

.removeBtn .material-icons {
  color: #aa70d6;
  padding-right: 10px;
  padding-bottom: 2px;
  font-size: 35px;
}

.removeBtn {
  background-color: transparent !important;
  box-shadow: none !important;
}

.removeBtn .v-btn__content {
  font-weight: 400;
  font-size: 22px;
  color: white;
  font-family: "Fira Sans", sans-serif;
  text-transform: initial;
}

.inputDiv {
  width: 65%;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.inputField {
  max-width: 350px;
  background-color: antiquewhite;
  border-radius: 30px;
}

.firstGroup,
.secondGroup {
  display: flex;
  max-width: 100%;
  justify-content: space-between;
}

.inputFields {
  display: flex;
  max-width: 95%;
  margin: 0 auto;
  justify-content: space-between;
}

.selection {
  max-width: 25%;
}

.selection .v-input__control {
  background-color: aliceblue;
}

.inputField > .v-input__control > .v-input__slot:before,
.v-text-field > .v-input__control > .v-input__slot:after {
  display: none;
  border: 0px;
}

.inputField .v-input__slot {
  margin-bottom: 0;
}

.inputField .v-text-field__details {
  padding-left: 15px;
}

.theme--light.v-input:not(.v-input--is-disabled) input {
  padding-left: 15px;
}

.firstGroup .v-input .v-label,
.secondGroup .v-input .v-label {
  padding-left: 15px;
}

.selection .v-menu > .v-menu__content {
  position: absolute !important;
  top: 105% !important;
  left: 0 !important;
}

.selection .v-text-field__details {
  display: none;
}

.selection > .v-input__control > .v-input__slot {
  margin-bottom: 0;
}

.orderForm {
  padding-bottom: 5%;
}

@media (min-width: 990px) and (max-width: 1300px) {
  .cartTitle,
  .summingDiv {
    font-size: 25px;
  }

  .summing {
    font-size: 25px;
  }

  .cartTable table.v-table tbody td {
    font-size: 15px;
  }

  .removeBtn .v-btn__content {
    font-size: 15px;
  }

  .minus,
  .plus {
    height: 20px;
    max-height: 20px;
    min-width: 20px;
    border-radius: 15px;
  }

  .cartTable img {
    width: 190px;
    height: 130px;
  }

  .inputDiv {
    max-width: 64%;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
  }

  .inputField {
    max-width: 250px;
    background-color: white;
    border-radius: 30px;
  }

  .inputFields {
    display: flex;
    max-width: 95%;
  }
}
</style>