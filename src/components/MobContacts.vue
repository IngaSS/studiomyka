<template>
  <div class="mobHeader row">
    <v-btn class="request" @click="$bvModal.show('myRequest')">Оставить заявку</v-btn>
    <div class="mobcontacts" cols="4" align-self="center">
      <a href="tel:+74951233799" class="phone">+7 495 123-37-99</a>
      <a href="mailto:office@studiomyka.ru" class="mail">office@studiomyka.ru</a>
    </div>
    <div class="iconsCommonDiv">
      <div class="mobLinks" cols="1" align-self="center">
        <a href="instagram.com://studio_myka/" target="_blank" class="MobLink">
          <i class="fab fa-instagram inst"></i>
        </a>
        <a href="http://www.facebook.com/studiomyka/" target="_blank" class="MobLink">
          <i class="fab fa-facebook-f face"></i>
        </a>
      </div>
      <div class="mobLinks" cols="1" align-self="center">
        <router-link to="#" class="MobIcon">
          <i class="far fa-user moblogIn" @click="$bvModal.show('my-modal')" id="show-btn"></i>
        </router-link>
        <router-link to="/CartView" class="MobIcon cartIcon">
          <i class="fas fa-shopping-cart mobcart"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mobrequest {
  margin: 3% auto;
}

.mobcontacts {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
}

.mobHeader {
  display: none;
  max-width: 95%;
  margin: 0 auto;
  margin-bottom: 7%;
  flex-direction: column;
}

.iconsCommonDiv {
  width: 80%;
  margin: 0 auto;
  display: flex;
  margin-top: 2%;
}

.iconsCommonDiv .mobLinks:first-child {
  margin-left: 0;
}

.mobLinks {
  float: left;
  width: 50%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: space-around;
  padding: 0 5px;
  margin-left: 6%;
  display: flex;
}

.mobLink {
  width: 55px;
  height: 55px;
  text-align: center;
  padding: 0;
}

.mobIcon {
  width: 70px;
  text-align: right;
}

.moblogIn,
.mobcart {
  line-height: 1.5 !important;
  font-size: 35px;
  color: gray;
}

@media (min-width: 320px) and (max-width: 430px) {
  .mobHeader {
    margin-bottom: 13%;
  }
}
</style>