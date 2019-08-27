<template>
  <v-layout class="team">
    <h3>Наша команда</h3>
    <mdb-carousel :interval="false" showIndicators thumbnails>
      <mdb-carousel-item img :src="man5" :thumbnail="man5" alt="First slide">
        <mdb-card-body>
          <h1>Ярослав Белолапотков</h1>
          <p>
            Шеф-повар
            <br />Кулинарная студия "МУКА"
          </p>
        </mdb-card-body>
      </mdb-carousel-item>
      <mdb-carousel-item img :src="man2" :thumbnail="man2" alt="Second slide">
        <mdb-card-body>
          <h1>Олег Томилин</h1>
          <p>
            Шеф-повар
            <br />Кулинарная студия "МУКА"
          </p>
        </mdb-card-body>
      </mdb-carousel-item>
      <mdb-carousel-item img :src="man1" :thumbnail="man1" alt="Third slide">
        <mdb-card-body>
          <h1>Сергей Кузнецов</h1>
          <p>
            Шеф-повар
            <br />Кулинарная студия "МУКА"
          </p>
        </mdb-card-body>
      </mdb-carousel-item>
      <mdb-carousel-item img :src="man4" :thumbnail="man4" alt="Third slide">
        <mdb-card-body>
          <h1>Михаил Вельчинский</h1>
          <p>
            Шеф-повар
            <br />Кулинарная студия "МУКА"
          </p>
        </mdb-card-body>
      </mdb-carousel-item>
      <mdb-carousel-item img :src="man3" :thumbnail="man3" alt="Third slide">
        <mdb-card-body>
          <h1>Павел Атаманов</h1>
          <p>
            Шеф-повар
            <br />Кулинарная студия "МУКА"
          </p>
        </mdb-card-body>
      </mdb-carousel-item>
    </mdb-carousel>
  </v-layout>
</template>

<script>
import man1 from "../img/man1.png";
import man2 from "../img/man2.png";
import man3 from "../img/man3.png";
import man4 from "../img/man4.png";
import man5 from "../img/man5.png";

import {
  mdbCarousel,
  mdbCarouselItem,
  mdbCarouselCaption,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText
} from "mdbvue";

export default {
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText
  },
  data: () => ({
    man1: man1,
    man2: man2,
    man3: man3,
    man4: man4,
    man5: man5
  })
};
</script>

<style>
/* .team {
    flex-direction: column;
}  */

.team {
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
}

.team .card-body {
  position: absolute;
  top: 20%;
  width: 35%;
  left: 7%;
  min-height: 14%;
  background-color: #895aac;
  padding: 1%;
}

.team .carousel-indicators {
  margin-left: 0;
  margin-right: 0;
  position: static;
  margin-top: -11%;
}

.team .carousel .carousel-indicators li {
  width: 20%;
  height: 0.625rem;
}

.team .carousel-inner {
  z-index: -1;
}

.team h1 {
  font-size: 2vw;
  text-align: left;
  text-indent: 5%;
  color: #ffffff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
}

.team p {
  font-size: 1vw;
  text-align: left;
  color: #ffffff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 100;
  padding-left: 5%;
}
</style>