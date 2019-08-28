<template>
  <v-layout class="masterCl">
    <v-layout wrap class="mastClList">
      <v-flex v-for="item of masterClasses" :item="item" class="mastCard" :key="item.id">
        <v-card flat tile>
          <v-img :src="img" height="12vw"></v-img>
          <h3>{{ item.name }}</h3>
          <h5>{{ item.dateofevent}}</h5>
        </v-card>
        <div class="hoverD">
          <h1>{{ item.name }}</h1>
          <h2 class="masterPrice">{{ item.price }} руб.</h2>
          <p class="hoverP">Готовим:</p>
          <ul>
            <li v-for="elem of item.dishes" :key="elem.id">{{ elem.name }}</li>
          </ul>
          <v-btn
            class="masterBtn"
            to="/MasterClassDetails"
            @click.capture="showModal(item)"
          >Записаться</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import img from "../img/pears.png";

export default {
  name: "MasterClasses",
  props: ["masterClasses"],
  data: () => ({
    modal: false,
    img: img
  }),
  methods: {
    showModal(item) {
      this.$store.dispatch("showDetails", item);
    }
  }
};
</script>

<style>
.masterCl {
  justify-content: center;
  flex-direction: column;
  text-align: -webkit-center;
}

.mastClList {
  flex-wrap: nowrap;
  -webkit-flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  display: -webkit-flex;
  margin: 0 auto;
}

.mastCard {
  max-width: 14vw;
  min-width: 14vw;
  min-height: 16vw;
  position: relative;
  margin-top: 4vw;
}

.mastCard .v-sheet {
  min-height: 16.5vw;
    text-align: center;
}

.hoverD {
  display: none;
  top: 0;
  width: 305px;
  border-radius: 1px;
  border: solid 2px #895aac;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 372px;
  text-align: center;
}

.hoverD h1 {
  font-size: 25px;
  font-family: "Fira Sans", sans-serif;
  text-align: left;
  max-width: 270px;
  padding-left: 8%;
  margin: 0 auto;
  color: white;
  margin-top: 7%;
  min-height: 60px;
}

.hoverD ul {
  padding-left: 18.5%;
}

.hoverD ul li {
  color: white;
  font-size: 14px;
  font-family: "Fira Sans", sans-serif;
  text-align: left;
  max-width: 220px;
  list-style-type: square;
}

.masterPrice {
  margin-top: 9%;
  font-size: 36px;
  text-align: left;
  font-weight: 600;
  max-width: 270px;
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  padding-left: 13%;
}

.hoverP {
  font-size: 16px;
  font-family: "Fira Sans", sans-serif;
  text-align: left;
  max-width: 220px;
  margin: 0 auto;
  color: white;
}

.mastCard .v-sheet h3 {
  margin-top: 1vw;
  font-size: 1.2vw;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
}

.mastCard .v-sheet h5 {
  font-size: 1vw;
  font-family: "Fira Sans", sans-serif;
}

.masterBtn {
  width: 302px;
  height: 100px !important;
  background-color: #895aac !important;
  margin: 0;
  padding: 0;
  box-shadow: none !important;
  margin-top: 3%;
  color: #ffffff !important;
  font-size: 20px;
  font-family: "Fira Sans", sans-serif;
  text-transform: uppercase;
}

.nav-item .dropdown-item:hover,
.nav-item .dropdown-item:focus,
.nav-item .dropdown-item:active {
  background-color: #d3bae5 !important;
}

.mastCard:hover .hoverD {
  display: block;
  position: absolute;
}

.allMastClasses {
  width: 19vw;
  min-height: 3.5vw;
  margin: 0 auto;
  margin-top: 3vw;
  border: solid .09vw #895aac;
  border-radius: 0px;
  background-color: transparent !important;
}

.allMastClasses .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 1vw;
  font-weight: 300;
  font-stretch: extra-condensed;
  color: #ffffff;
}

@media (min-width: 1025px) and (max-width: 1380px) {
  .mastClList {
    width: 90%;
  }

  .hoverD ul {
    padding-left: 14.5%;
  }

  .mastCard {
    max-width: 270px;
    min-width: 270px;
    min-height: 372px;
  }

  .mastCard .v-sheet {
    min-height: 372px;
  }

  .hoverD {
    min-height: 337px;
    max-width: 270px;
    min-width: 270px;
  }

  .masterBtn {
    width: 267px;
    height: 100px;
    background-color: #895aac;
    margin-top: 6%;
    color: #ffffff;
    font-size: 20px;
    font-family: "Fira Sans", sans-serif;
    text-transform: uppercase;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .mastClList {
    width: 90%;
  }
}

@media (min-width: 736px) and (max-width: 767px) {
  .mastClList {
    justify-content: space-around;
  }
  .allMastClasses {
    min-width: 305px;
  }
}

@media (min-width: 320px) and (max-width: 731px) {
  .mastClList {
    justify-content: center;
  }

  .allMastClasses {
    min-width: 305px;
  }

  .allMastClasses .v-btn__content {
    font-size: 19px;
  }
}
</style>


