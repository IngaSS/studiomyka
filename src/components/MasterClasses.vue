<template>
  <v-layout class="masterCl">
    <v-layout wrap class="mastClList">
      <v-flex v-for="item of masterClasses" :item="item" class="mastCard" :key="item.id">
        <v-card flat tile>
          <v-img :src="img"></v-img>
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
  width: 19vw;
  min-height: 25vw;
  position: relative;
  margin-top: 4vw;
}

.mastCard .v-sheet {
  min-height: 25vw;
  text-align: center;
  width: 19vw;
}

.mastCard .v-responsive {
  height: 19vw;
}

.hoverD {
  display: none;
  top: 0;
  border-radius: 1px;
  border: solid 2px #895aac;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  position: relative;
  width: 19.5vw;
  left: 0vw;
  height: 25vw;
}

.hoverD h1 {
  font-family: "Fira Sans", sans-serif;
  text-align: left;
  color: white;
  margin-top: 1vw;
  font-weight: 300;
  font-size: 2.5vw;
  padding-left: 1.5vw;
}

.hoverD ul {
  max-width: 19vw;
  height: 4.8vw;
  padding-left: 3.7vw;
  margin-bottom: 0;
}

.hoverD ul li {
  color: white;
  font-size: 1vw;
  font-family: "Fira Sans", sans-serif;
  text-align: left;
  list-style-type: square;
}

.masterPrice {
  margin-top: 1vw;
  text-align: left;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  font-size: 2vw;
  padding-left: 1.5vw;
  margin-bottom: 0;
}

.hoverP {
  font-family: "Fira Sans", sans-serif;
  text-align: left;
  color: white;
  font-size: 1.5vw;
  padding-left: 1.5vw;
  margin-bottom: 0;
}

.mastCard .v-sheet h3 {
  margin-top: 1vw;
  font-size: 2.1vw;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
}

.mastCard .v-sheet h5 {
  font-size: 1.2vw;
  font-family: "Fira Sans", sans-serif;
}

.masterBtn {
  background-color: #895aac !important;
  margin: 0;
  padding: 0;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  margin-top: 2vw;
  color: #ffffff !important;
  font-size: 20px;
  font-family: "Fira Sans", sans-serif;
  text-transform: uppercase;
  width: 89vw !important;
  height: 5.7vw !important;
  margin-top: -0.5vw;
}

.masterBtn .v-btn__content {
  font-size: 1.5vw;
  font-weight: 300;
  font-family: "Fira Sans", sans-serif;
}

.nav-item .dropdown-item:hover,
.nav-item .dropdown-item:focus,
.nav-item .dropdown-item:active {
  background-color: #d3bae5 !important;
}

.mastCard:hover .hoverD {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* .allMastClasses {
  width: 19vw;
  min-height: 3.5vw;
  margin: 0 auto;
  margin-top: 3vw;
  border: solid 0.09vw #895aac;
  border-radius: 0px;
  background-color: transparent !important;
}

.allMastClasses .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 1vw;
  font-weight: 300;
  font-stretch: extra-condensed;
  color: #ffffff;
} */
/* 
.hoverD {
  width: 28vw;
  left: 8.5vw;
  height: 36vw;
}

.hoverD h1 {
  font-size: 3vw;
  padding-left: 4.5vw;
}

.hoverD ul {
  max-width: 26.5vw;
  height: 10.8vw;
  padding-left: 5.7vw;
}

.hoverD ul li {
  font-size: 1.5vw;
}

.masterPrice {
  font-size: 2.5vw;
  padding-left: 4.5vw;
}

.hoverP {
  font-size: 2vw;
  padding-left: 4.5vw;
}

.masterBtn {
  width: 89vw !important;
  height: 7.7vw !important;
  margin-top: -0.5vw;
}

.masterBtn .v-btn__content {
  font-size: 2.5vw;
  font-family: "Fira Sans", sans-serif;
} */

@media (min-width: 320px) and (max-width: 414px) {
  .mastClList {
    width: 90%;
  }

  .mastCard {
    width: 46vw;
    min-height: 110vw;
  }

  .mastCard .v-sheet {
    min-height: 108.5vw;
    width: 90vw;
  }

  .mastCard .v-responsive {
    height: 80vw;
  }

  .mastCard .v-sheet h3 {
    font-size: 10vw;
    margin-top: 3vw;
  }

  .mastCard .v-sheet h5 {
    font-size: 5.5vw;
  }

  .hoverD {
    width: 90vw;
    min-height: 109vw;
  }

  .hoverD h1 {
    font-size: 10vw;
    padding-left: 4.5vw;
  }

  .hoverD ul {
    max-width: 86.5vw;
    height: 27.8vw;
    padding-left: 11.7vw;
  }

  .hoverD ul li {
    color: white;
    font-size: 5vw;
    font-family: "Fira Sans", sans-serif;
    text-align: left;
    list-style-type: square;
  }

  .masterPrice {
    font-size: 8vw;
    padding-left: 4.5vw;
  }

  .hoverP {
    font-size: 7vw;
    padding-left: 4.5vw;
  }

  .masterBtn {
    width: 89vw !important;
    height: 29.5vw !important;
  }

  .masterBtn .v-btn__content {
    font-size: 7.5vw;
    font-weight: 300;
    font-family: "Fira Sans", sans-serif;
  }
}

@media (min-width: 415px) and (max-width: 667px) {
  .mastClList {
    width: 90%;
  }

  .mastCard {
    width: 33vw;
    min-height: 48vw;
  }

  .mastCard .v-sheet {
    min-height: 54.5vw;
    width: 40vw;
  }

  .mastCard .v-responsive {
    height: 40vw;
  }

  .mastCard .v-sheet h3 {
    font-size: 5vw;
    margin-top: 1vw;
  }

  .mastCard .v-sheet h5 {
    font-size: 3vw;
  }

  .hoverD {
    width: 41vw;
    height: 55vw;
    margin-left: 1.5vw;
  }

  .hoverD h1 {
    font-size: 4.5vw;
    padding-left: 4.5vw;
  }

  .hoverD ul {
    max-width: 40.5vw;
    height: 16.8vw;
    padding-left: 6.5vw;
  }

  .hoverD ul li {
    color: white;
    font-size: 2.5vw;
    font-family: "Fira Sans", sans-serif;
    text-align: left;
    list-style-type: square;
  }

  .masterPrice {
    font-size: 4vw;
    padding-left: 4.5vw;
  }

  .hoverP {
    font-size: 3vw;
    padding-left: 4.5vw;
  }

  .masterBtn {
    width: 89vw !important;
    height: 14.5vw !important;
    margin-top: 0;
  }

  .masterBtn .v-btn__content {
    font-size: 4.5vw;
    font-weight: 300;
    font-family: "Fira Sans", sans-serif;
  }
}

@media (min-width: 668px) and (max-width: 1024px) {
  .mastClList {
    width: 90%;
  }

  .mastCard {
    width: 32vw;
    min-height: 38vw;
  }

  .mastCard .v-sheet {
    min-height: 36vw;
    width: 28vw;
  }

  .mastCard .v-responsive {
    height: 28vw;
  }

  .mastCard .v-sheet h3 {
    font-size: 2.9vw;
  }

  .mastCard .v-sheet h5 {
    font-size: 1.5vw;
  }

  .hoverD {
    width: 29vw;
    left: 7.9vw;
    height: 36vw;
  }

  .hoverD h1 {
    font-size: 3vw;
    padding-left: 4.5vw;
  }

  .hoverD ul {
    max-width: 26.5vw;
    height: 10.8vw;
    padding-left: 5.7vw;
  }

  .hoverD ul li {
    font-size: 1.5vw;
  }

  .masterPrice {
    font-size: 2.5vw;
    padding-left: 4.5vw;
  }

  .hoverP {
    font-size: 2vw;
    padding-left: 4.5vw;
  }

  .masterBtn {
    width: 89vw !important;
    height: 7.7vw !important;
    margin-top: -0.5vw;
  }

  .masterBtn .v-btn__content {
    font-size: 2.5vw;
    font-family: "Fira Sans", sans-serif;
  }
}

/* @media (min-width: 992px) and (max-width: 1024px) {
  .mastClList {
    width: 90%;
  }

  .mastCard {
    width: 32vw;
    min-height: 38vw;
  }

  .mastCard .v-sheet {
    min-height: 36vw;
    width: 28vw;
  }

  .mastCard .v-responsive {
    height: 28vw;
  }

  .mastCard .v-sheet h3 {
    font-size: 2.9vw;
  }

  .mastCard .v-sheet h5 {
    font-size: 1.5vw;
  }

  .hoverD {
    width: 28vw;
    left: 8.5vw;
    height: 36vw;
  }

  .hoverD h1 {
    font-size: 3vw;
    padding-left: 4.5vw;
  }

  .hoverD ul {
    max-width: 26.5vw;
    height: 10.8vw;
    padding-left: 5.7vw;
  }

  .hoverD ul li {
    font-size: 1.5vw;
  }

  .masterPrice {
    font-size: 2.5vw;
    padding-left: 4.5vw;
  }

  .hoverP {
    font-size: 2vw;
    padding-left: 4.5vw;
  }

  .masterBtn {
    width: 89vw !important;
    height: 7.7vw !important;
    margin-top: -0.5vw;
  }

  .masterBtn .v-btn__content {
    font-size: 2.5vw;
    font-family: "Fira Sans", sans-serif;
  }
} */

/* @media (min-width: 901px) and (max-width: 1100px) {
  .mastClList {
    width: 90%;
  }

  .mastCard {
    width: 21vw;
    min-height: 34vw;
  }

  .mastCard .v-sheet {
    min-height: 28.5vw;
  }

  .mastCard .v-responsive {
    height: 20vw;
  }

  .mastCard .v-sheet h3 {
    font-size: 2.2vw;
  }

  .mastCard .v-sheet h5 {
    font-size: 1.5vw;
  }
} */
</style>


