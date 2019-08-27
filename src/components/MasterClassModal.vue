<template>
  <div class="modalView">
    <div v-for="item in masterClassDetails" :key="item.id_master" class="modalMast">
      <div class="modalDiv">
        <!-- <img :src="require('../img/' + item.img)" alt="#" /> -->
        <img :src="img" height="270px"></img>
        <div class="infoBlock">
          <div class="titleDiv row">
            <span class="titleMod">{{ item.name }}</span>
          </div>
          <ul>
            <li>
              <img :src="listStyle" alt="#" />
              {{ item.price }} руб.
            </li>
            <li>
              <img :src="listStyle" alt="#" />
              {{ item.dateofevent }}
            </li>
            <hr />
            <li>
              <img :src="listStyle" alt="#" />
              Длительность : {{ item.duration }}
            </li>
            <li>
              <img :src="listStyle" alt="#" />
              Количество свободных мест : {{ item.quantity }}
            </li>
            <v-btn class="choseBtn" @click="addMasterToCart(item)">Записаться</v-btn>
          </ul>
        </div>
      </div>
      <section class="infoDishes">
        <h2>Что готовим?</h2>
        <ul>
          <li>
            <img :src="li1" alt="#" />
            {{ item.li1 }}
          </li>
          <li>
            <img :src="li2" alt="#" />
            {{ item.li2 }}
          </li>
          <li>
            <img :src="li3" alt="#" />
            {{ item.li3 }}
          </li>
        </ul>
      </section>
      <section class="bonuses">
        <h2>Что вы получите на мастер-классе?</h2>
        <div class="bonusesList">
          <div class="bonus">
            <img :src="bonus" width="150" alt="#" />
            <p>Вкуснейшие блюда</p>
          </div>
          <div class="bonus">
            <img :src="bonus" width="150" alt="#" />
            <p>Вкуснейшие блюда</p>
          </div>
          <div class="bonus">
            <img :src="bonus" width="150" alt="#" />
            <p>Вкуснейшие блюда</p>
          </div>
          <div class="bonus">
            <img :src="bonus" width="150" alt="#" />
            <p>Вкуснейшие блюда</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import li1 from "../img/01.png";
import li2 from "../img/02.png";
import li3 from "../img/03.png";
import bonus from "../img/bonus.png";
import listStyle from "../img/listStyle.png";

import img from "../img/pears.png";


export default {
  name: "MasterClassModal",
  computed: {
    masterClassDetails() {
      return this.$store.getters.masterClassDetails;
    }
  },
  data: () => ({
    img: img,
    li1: li1,
    li2: li2,
    li3: li3,
    bonus: bonus,
    listStyle: listStyle
  }),

  methods: {
    addMasterToCart(item) {
      this.$store.dispatch("addMasterToCart", item);
    }
  }
};
</script>

<style>
.modalView {
}

.modalDiv {
  margin-top: 5%;
  display: flex;
  justify-content: center;
}

.modalDiv img {
  width: 450px;
  height: 400px;
  z-index: 1;
}

.infoBlock {
  width: 500px;
  height: 400px;
  position: relative;
  right: 110px;
  bottom: 20px;
}

.infoBlock ul li img {
  width: 40px;
  height: 40px;
  margin-right: 5%;
  margin-bottom: 4%;
}

.infoBlock ul {
  width: 62%;
  margin: 5% 0 0 35%;
  padding-left: 0;
}

.infoBlock ul li {
  list-style-type: none;
  color: white;
  font-size: 18px;
}

.infoBlock hr {
  width: 327px;
  background-color: #8a58ab;
  border-top: 3px solid rgba(0, 0, 0, 0.1);
}

.titleDiv {
  background-color: rgba(138, 88, 171, 0.7);
  min-height: 78px;
  margin-right: 0;
  margin-left: 0;
}

.titleMod {
  line-height: 1.5;
  color: white !important;
  margin-bottom: 0;
  width: 70%;
  margin: 3% 0 0 34%;
  text-align: left;
  font-size: 33px;
}

.choseBtn {
  margin: 0;
  margin-top: 10%;
  background-color: #8a58ab !important;
  width: 170px;
  min-height: 50px;
  border-radius: 22px;
  box-shadow: none !important;
}

.choseBtn .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: white !important;
}

.infoDishes {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  background-color: rgba(138, 88, 171, 0.4);
}

.infoDishes h2 {
  max-width: 300px;
  text-align: center;
  margin: 0 auto;
  color: white;
  font-size: 36px;
  line-height: 3;
}

.infoDishes ul {
  margin-top: 3%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
}

.infoDishes ul li {
  list-style-type: none;
  font-size: 16px;
}

.infoDishes ul li img {
  padding-right: 20px;
}

.bonuses {
  margin-top: 3%;
}

.bonuses h2 {
  text-align: center;
  margin: 0 auto;
  color: white;
  font-size: 36px;
  line-height: 3;
}

.bonusesList {
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 3%;
}

.bonus p {
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 10%;
}
</style>