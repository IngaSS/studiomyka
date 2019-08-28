<template>
  <b-navbar toggleable="lg" class="header row">
    <b-navbar-brand to="/Home" class="col-1 logotipe">
      <img :src="logo" alt="#" class="logo" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="hideicon">
      <i class="material-icons">dehaze</i>
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" class="nav-collapseRow row" is-nav>
      <b-navbar-nav class="collapseNav row">
        <b-col href="#" cols="3" class="requestLi col" offset-sm="2" align-self="center">
          <v-btn class="request" @click="$bvModal.show('myRequest')">Оставить заявку</v-btn>
        </b-col>
        <b-col class="contacts" cols="4" align-self="center">
          <a href="tel:+74951233799" class="phone">+7 495 123-37-99</a>
          <a href="mailto:office@studiomyka.ru" class="mail">office@studiomyka.ru</a>
        </b-col>
        <b-col class="links" cols="1" align-self="center">
          <a href="https://www.instagram.com/studio_myka/" target="_blank" class="link">
            <i class="fab fa-instagram inst"></i>
          </a>
          <a href="http://www.facebook.com/studiomyka/" target="_blank" class="link">
            <i class="fab fa-facebook-f face"></i>
          </a>
        </b-col>
        <b-col class="icons" cols="1" align-self="center">
          <router-link to="#" class="icon">
            <i class="far fa-user logIn" @click="$bvModal.show('my-modal')" id="show-btn"></i>
          </router-link>
          <router-link to="/CartView" class="icon cartIcon">
            <i class="fas fa-shopping-cart cart"></i>
          </router-link>
          <div class="cartArea">
            <p v-if="!Cart.length">Ваша корзина пуста</p>
            <CartItem v-for="product of Cart" :key="product.h3" :cartItem="product" />
          </div>
        </b-col>
      </b-navbar-nav>
    </b-collapse>
    <modalRequest :id="myRequest" />
    <modalSignIn :id="mySignIn" />
    <modalRegistr :id="myRegistr" />
  </b-navbar>
</template>

<script>
import logo from "../img/logo.png";
import CartItem from "../components/CartItem";
import modalRequest from "../components/modalRequest";
import modalSignIn from "../components/modalSignIn";
import modalRegistr from "../components/modalRegistr";

export default {
  name: "Header",
  components: {
    CartItem,
    modalRequest,
    modalSignIn,
    modalRegistr
  },
  props: ["cartItems", "removeProduct"],
  data: () => ({
    myRegistr: "registr-modal",
    myRequest: "myRequest",
    mySignIn: "my-modal",
    logo: logo
  }),
  methods: {},
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style scoped>
.cartArea p {
  margin: auto;
  color: #ffffff;
  text-decoration: underline;
}
</style>

<style>
@media (min-width: 320px) and (max-width: 990px) {
  .header {
    display: none;
  }
}

.mytextArea .v-input__slot {
  border: 1px solid #8a58ab !important;
}

.modal .modal-dialog {
  margin: 0 auto;
  margin-top: 10.75rem;
}

.modal-body {
  padding: 0;
}

.modalHead {
  background-color: #8a58ab;
  line-height: 2;
  color: white;
  margin-bottom: 0;
  text-align: center;
  border-radius: 20px 20px 0 0;
}

.cartArea {
  background-color: black;
  border-radius: 10px;
  width: 340px;
  min-height: 50px;
  top: 130%;
  right: -64px;
  position: absolute;
  z-index: 999;
  display: none;
}

.cartArea:before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: -15px;
  right: 39px;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-bottom: 30px solid black;
}

.cartIcon:hover + .cartArea {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cartArea:hover {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#my-modal .modal-content,
#registr-modal .modal-content,
#myRequest .modal-content {
  border-radius: 20px !important;
}

.logInmdCheck .theme--light.v-icon,
.logInmdCheckRem .theme--light.v-icon,
.password .theme--light.v-icon,
.menuBirth .v-input__prepend-outer .v-icon {
  color: #8a58ab;
}

.modal-footer,
.modal-header {
  display: none;
}

.modal .v-input--selection-controls {
  margin-top: 0;
}

.createAcc {
  color: #8a58ab !important;
}

.menuDate .v-picker__title {
  background-color: #8a58ab !important;
}

.modal .logInMdBtn {
  margin: 0 auto;
}

.modal .v-text-field input {
  line-height: 19px;
  text-indent: 3%;
}

.modal .password .v-input__append-inner {
  margin-top: 10px;
  margin-right: 5px;
}

.logInmdCheck .v-input__slot,
.logInmdCheck label,
.logInmdCheckRem .v-input__slot,
.logInmdCheckRem label {
  margin-bottom: 0;
}

.logInmdCheck .custom-control-label::before {
  border-color: #8a58ab;
}

.logInmdCheck .custom-control-input:checked ~ .custom-control-label::after {
  background-color: #8a58ab !important;
  border-radius: 5px;
}

.logInmdCheck label {
  font-size: 12px;
  line-height: 2;
}

.logInmdCheckRem .v-icon {
  font-size: 20px;
}

.logInMdDiv {
  max-width: 75%;
  margin: 0 auto;
}

.logInMdBtn {
  background-color: #8a58ab !important;
  width: 170px;
  min-height: 50px;
  border-radius: 22px;
  box-shadow: none !important;
}

.logInMdBtn .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
}

.linksMd {
  padding-left: 0;
}

.linksMd li {
  list-style-type: none;
}

.linksMd li a,
.logInmdCheck a {
  font-size: 11px;
  color: silver;
  font-family: "Fira Sans", sans-serif;
  text-decoration: underline;
}

.email {
  padding-top: 6%;
}

.email .v-input__slot:before,
.password .v-input__slot:before,
.name .v-input__slot:before,
.menuBirth .v-input__slot:before {
  border-color: #8a58ab !important;
}

.modal .v-card__actions {
  padding: 8px 8px 20px 8px;
}

.collapseNav {
  width: 100%;
  justify-content: space-evenly;
}

.nav-collapseRow {
  margin-left: 0;
  margin-right: 0;
}

.hideicon i {
  color: white;
  font-size: 35px;
}

.header {
  min-height: 5vw;
  max-width: 100%;
  background-color: black;
  margin: 0;
}

.logotipe {
  padding: 0;
  text-align: center;
  margin: 0;
}

.logo {
  width: 6vw;
}

.request,
.mobrequest {
  height: 2vw !important;
  width: 14vw;
  text-transform: uppercase;
  background-color: transparent !important;
  border: 0.06vw solid white;
  border-radius: 5px;
}

.request .v-btn__content,
.mobrequest .v-btn__content {
  padding: 0 15px;
  color: white;
  font-family: "Fira Sans", sans-serif;
  font-size: 0.9vw;
  font-weight: 300;
}

.links,
.icons {
  display: flex;
}

.links {
  padding: 0;
  margin-left: 5.5vw;
}

.icons {
  padding-right: 0;
}

.link {
  width: 3vw;
  height: 3vw;
  text-align: center;
}

.inst {
  line-height: 1.4 !important;
  font-size: 2.2vw;
  color: #8a58ab;
}

.face {
  line-height: 1.9 !important;
  font-size: 1.6vw;
  color: #8a58ab;
}

.contacts {
  display: flex;
  justify-content: space-around;
  max-width: 14vw;
}

.phone {
  color: white;
  font-size: 1vw;
  font-weight: 200;
}

.mail {
  color: white;
  font-size: 1vw;
}

.logIn,
.cart {
  font-size: 2vw;
  color: gray;
}

.icon {
  width: 3vw;
  text-align: right;
}

@media screen and (max-width: 1350px) {
  .link {
    padding: 0;
  }

  .contacts {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
  }
}

@media screen and (max-width: 991px) {
  .collapseNav {
    display: block;
  }

  .requestLi {
    margin-left: 0;
    max-width: 100%;
    text-align: center;
  }

  .contacts {
    max-width: 100%;
    margin: 10px 0;
  }

  .links {
    float: left;
    max-width: 50%;
    justify-content: center;
    padding: 0 5px;
  }

  .icons {
    text-align: center;
    /* float: left; */
    max-width: 50%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0px 30px;
  }

  .inst {
    line-height: 1;
    font-size: 40px;
  }

  .face {
    line-height: 1.5;
    font-size: 29px;
  }
}

@media (min-width: 992px) {
  .nav-collapseRow {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
}
</style>


