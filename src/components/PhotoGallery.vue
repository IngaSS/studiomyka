<template>
  <v-layout class="photoGal">
    <h3>Фотогаллерия</h3>
    <div class="photo">
      <mdb-carousel :interval="false" showIndicators thumbnails>
        <mdb-carousel-item img :src="gal1" :thumbnail="gal1" alt="First slide"></mdb-carousel-item>
        <mdb-carousel-item img :src="gal2" :thumbnail="gal2" alt="Second slide"></mdb-carousel-item>
        <mdb-carousel-item img :src="gal3" :thumbnail="gal3" alt="Third slide"></mdb-carousel-item>
        <mdb-carousel-item img :src="gal4" :thumbnail="gal4" alt="Third slide"></mdb-carousel-item>
      </mdb-carousel>
    </div>
    <div class="mobPhoto">
      <mdb-carousel :interval="false" showIndicators thumbnails>
        <mdb-carousel-item img :src="gal1" :thumbnail="gal1" alt="First slide"></mdb-carousel-item>
        <mdb-carousel-item img :src="gal2" :thumbnail="gal2" alt="Second slide"></mdb-carousel-item>
        <mdb-carousel-item img :src="gal3" :thumbnail="gal3" alt="Third slide"></mdb-carousel-item>
      </mdb-carousel>
    </div>
  </v-layout>
</template>

<script>
import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption } from "mdbvue";

import gal1 from "../img/gal1.png";
import gal2 from "../img/gal2.png";
import gal3 from "../img/gal3.png";
import gal4 from "../img/gal4.png";
export default {
  name: "ThumbnailsCarouselPage",
  components: {
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  },
  data: () => ({
    gal1: gal1,
    gal2: gal2,
    gal3: gal3,
    gal4: gal4
  })
};
</script>

<style>
.photoGal {
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
}

.mobPhoto {
  display: none;
}

.photoGal h3, .team h3, .news > h3 {
  color: white;
  font-size: 2vw;
}

.photo .carousel {
  display: flex;
  max-width: 70%;
  margin: 0 auto;
}

.photo .carousel-indicators {
  position: relative;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;
}

.photo .carousel-indicators li {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  cursor: pointer;
  border-top: 0px;
  border-bottom: 0px;
  /* margin-right: 20px; */
  margin-left: 20px;
}

@media (min-width: 1500px) and (max-width: 1700px) {
  .photo .carousel-indicators li {
    width: 10em;
    height: 10em;
  }
}

@media (min-width: 1360px) and (max-width: 1499px) {
  .photo .carousel-indicators li {
    width: 9em;
    height: 9em;
  }
}

@media (min-width: 1220px) and (max-width: 1359px) {
  .photo .carousel-indicators li {
    width: 8em;
    height: 8em;
  }
}

@media (min-width: 1060px) and (max-width: 1219px) {
  .photo .carousel-indicators li {
    width: 6.9em;
    height: 6.9em;
  }
}

@media (min-width: 840px) and (max-width: 1059px) {
  .photo {
    display: none;
  }

  .mobPhoto {
    display: block;
    margin-bottom: 10%;
    margin-top: 5%;
    min-height: 300px;
  }

  .mobPhoto .carousel-inner {
    display: none;
  }

  .mobPhoto .carousel .carousel-indicators li {
    width: 15.625rem;
  }

  .mobPhoto .carousel-indicators {
      position: unset;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(3) {
    left: 45px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(2) {
    top: 30px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(1) {
    right: 45px;
    position: absolute;
  }

  .mobPhoto .carousel-indicators .active {
      z-index: 10;
  }
}

@media (min-width: 640px) and (max-width: 839px) {
  .photo {
    display: none;
  }

  .mobPhoto {
    display: block;
    margin-bottom: 0;
    margin-top: 5%;
    min-height: 300px;
  }

  .mobPhoto .carousel-inner {
    display: none;
  }

  .mobPhoto .carousel .carousel-indicators li {
    width: 13.625rem;
  }

  .mobPhoto .carousel-indicators {
      position: unset;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(3) {
    left: 15px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(2) {
    top: 30px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(1) {
    right: 15px;
    position: absolute;
  }

  .mobPhoto .carousel-indicators .active {
      z-index: 10;
  }
}

@media (min-width: 540px) and (max-width: 639px) {
  .photo {
    display: none;
  }

  .mobPhoto {
    display: block;
    margin-bottom: 0;
    margin-top: 5%;
    min-height: 300px;
  }

  .mobPhoto .carousel-inner {
    display: none;
  }

  .mobPhoto .carousel .carousel-indicators li {
    width: 13.625rem;
  }

  .mobPhoto .carousel-indicators {
      position: unset;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(3) {
    left: 0;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(2) {
    top: 30px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(1) {
    right: 0;
    position: absolute;
  }

  .mobPhoto .carousel-indicators .active {
      z-index: 10;
  }

  .photoGal {
      width: 90%;
  }
}

@media (min-width: 420px) and (max-width: 539px) {
  .photo {
    display: none;
  }

  .mobPhoto {
    display: block;
    margin-bottom: 0;
    margin-top: 5%;
    min-height: 300px;
  }

  .mobPhoto .carousel-inner {
    display: none;
  }

  .mobPhoto .carousel .carousel-indicators li {
    width: 10.625rem;
  }

  .mobPhoto .carousel-indicators {
      position: unset;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(3) {
    left: 0;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(2) {
    top: 30px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(1) {
    right: 0;
    position: absolute;
  }

  .mobPhoto .carousel-indicators .active {
      z-index: 10;
  }

  .photoGal {
      width: 90%;
  }
}

@media (min-width: 320px) and (max-width: 419px) {
  .photo {
    display: none;
  }

  .mobPhoto {
    display: block;
    margin-bottom: 0;
    margin-top: 5%;
    min-height: 220px;
  }

  .mobPhoto .carousel-inner {
    display: none;
  }

  .mobPhoto .carousel .carousel-indicators li {
    width: 8.5rem;
  }

  .mobPhoto .carousel-indicators {
      position: unset;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(3) {
    left: 0;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(2) {
    top: 30px;
    position: absolute;
  }

  .mobPhoto .carousel .carousel-indicators li:nth-child(1) {
    right: 0;
    position: absolute;
  }

  .mobPhoto .carousel-indicators .active {
      z-index: 10;
  }

  .photoGal {
      width: 90%;
  }
}
</style>