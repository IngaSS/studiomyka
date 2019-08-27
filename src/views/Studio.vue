<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <Slider />
    <descriptionMobile />
    <!-- <Team />
    <News />
    <newsMobile />
    <PhotoGallary /> -->
    <v-layout class="reviews">
      <b-carousel
        id="carousel-no-animation"
        class="review-carousel"
        indicators
        controls
        no-animation
        :interval="false"
        fade
      >
        <b-carousel-slide>
          <img :src="review" class="sliderImg" alt="#" />
          <p>Я была на таком мероприятии впервые и осталась очень довольна! Было здорово! Обстановка, настроение - всё очень располагало! Спасибо за организацию! Радостная атмосфера, ощущение праздника весь вечер, доброжелательный персонал, вкусная еда, панорамный вид из окон студии</p>
        </b-carousel-slide>
        <b-carousel-slide>
          <img :src="review" class="sliderImg" alt="#" />
          <p>Я была на таком мероприятии впервые и осталась очень довольна! Было здорово! Обстановка, настроение - всё очень располагало! Спасибо за организацию! Радостная атмосфера, ощущение праздника весь вечер, доброжелательный персонал, вкусная еда, панорамный вид из окон студии</p>
        </b-carousel-slide>
        <b-carousel-slide>
          <img :src="review" class="sliderImg" alt="#" />
          <p>Я была на таком мероприятии впервые и осталась очень довольна! Было здорово! Обстановка, настроение - всё очень располагало! Спасибо за организацию! Радостная атмосфера, ощущение праздника весь вечер, доброжелательный персонал, вкусная еда, панорамный вид из окон студии</p>
        </b-carousel-slide>
        <b-carousel-slide>
          <img :src="review" class="sliderImg" alt="#" />
          <p>Я была на таком мероприятии впервые и осталась очень довольна! Было здорово! Обстановка, настроение - всё очень располагало! Спасибо за организацию! Радостная атмосфера, ощущение праздника весь вечер, доброжелательный персонал, вкусная еда, панорамный вид из окон студии</p>
        </b-carousel-slide>
      </b-carousel>
    </v-layout>
    <MobContacts />
    <Footer />
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
// import Team from "../components/Team";
// import News from "../components/News";
// import PhotoGallary from "../components/PhotoGallary";
import descriptionMobile from "../components/descriptionMobile";
import newsMobile from "../components/newsMobile";
import MobContacts from "../components/MobContacts";

import review from "../img/review.png";

export default {
  name: "Studio",
  components: {
    Header,
    Toolbar,
    Footer,
    Slider,
    // Team,
    // News,
    newsMobile,
    descriptionMobile,
    MobContacts,
    // PhotoGallary
  },
  data: () => ({
    review: review
  }),
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style>
.review-carousel .carousel-indicators {
  margin-bottom: 0;
  display: none;
}

@media (min-width: 320px) and (max-width: 568px) {
  .description {
    display: none;
  }

  .list {
    max-width: 90%;
    min-width: 90%;
    flex-direction: column;
  }
}

.review-carousel {
  width: 80%;
  height: 250px;
  margin: auto;
  background-color: blueviolet;
}

.review-carousel .carousel-caption {
  padding-top: 0;
  padding-bottom: 0;
}

.review-carousel .carousel-item {
  height: 264px;
}

.review-carousel .carousel-inner {
  overflow: visible;
}

.sliderImg {
  width: 115px;
  height: 115px;
  border-radius: 55px;
  border: 3px solid #ffffff;
  margin-bottom: 6%;
}

.review-carousel p {
  margin-bottom: 3rem;
  text-align: left;
  font-size: 19px;
  font-weight: 300;
  font-family: "Fira Sans", sans-serif;
}

.reviews {
  margin-bottom: 5%;
  height: 400px;
  width: 90%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.3);
}

.review-carousel .carousel-control-prev,
.review-carousel .carousel-control-next {
  display: flex;
}

.review-carousel .carousel-control-prev-icon,
.review-carousel .carousel-control-next-icon {
  width: 60px;
  height: 60px;
}

@media (min-width: 1401px) and (max-width: 1680px) {
  .sliderImg {
    width: 105px;
    height: 105px;
    margin-bottom: 4%;
  }

  .review-carousel p {
    font-size: 18px;
  }

  .reviews {
    height: 400px;
  }
}

@media (min-width: 1242px) and (max-width: 1400px) {
  .sliderImg {
    width: 105px;
    height: 105px;
    margin-bottom: 4%;
  }

  .review-carousel p {
    font-size: 17.5px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 1201px) and (max-width: 1241px) {
  .sliderImg {
    width: 105px;
    height: 105px;
    margin-bottom: 2%;
  }

  .review-carousel p {
    font-size: 17.5px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 813px) and (max-width: 1200px) {
  .review-carousel .carousel-control-prev,
  .review-carousel .carousel-control-next {
    display: none;
  }

  .review-carousel .carousel-indicators {
    display: flex;
  }

  .sliderImg {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 8%;
  }

  .review-carousel p {
    font-size: 14px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 666px) and (max-width: 812px) {
  .review-carousel .carousel-control-prev,
  .review-carousel .carousel-control-next {
    display: none;
  }

  .review-carousel .carousel-indicators {
    display: flex;
  }

  .sliderImg {
    width: 95px;
    height: 95px;
    border-radius: 50px;
    margin-bottom: 8%;
  }

  .review-carousel p {
    font-size: 13px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 568px) and (max-width: 667px) {
  .review-carousel .carousel-control-prev,
  .review-carousel .carousel-control-next {
    display: none;
  }

  .review-carousel .carousel-indicators {
    display: flex;
  }

  .sliderImg {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-bottom: 8%;
  }

  .review-carousel p {
    font-size: 12px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 415px) and (max-width: 567px) {
  .review-carousel .carousel-control-prev,
  .review-carousel .carousel-control-next {
    display: none;
  }

  .review-carousel .carousel-indicators {
    display: flex;
  }

  .sliderImg {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin-bottom: 9%;
  }

  .review-carousel p {
    margin-bottom: 1rem;
    font-size: 12px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 371px) and (max-width: 414px) {
  .review-carousel .carousel-control-prev,
  .review-carousel .carousel-control-next {
    display: none;
  }

  .review-carousel .carousel-indicators {
    display: flex;
  }

  .sliderImg {
    width: 90px;
    height: 90px;
    border-radius: 50px;
    margin-bottom: 9%;
  }

  .review-carousel p {
    margin-bottom: 1rem;
    font-size: 11.5px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 320px) and (max-width: 370px) {
  .review-carousel .carousel-control-prev,
  .review-carousel .carousel-control-next {
    display: none;
  }

  .review-carousel .carousel-indicators {
    display: flex;
  }

  .sliderImg {
    width: 85px;
    height: 85px;
    border-radius: 50px;
    margin-bottom: 8%;
  }

  .review-carousel p {
    margin-bottom: 1rem;
    font-size: 11px;
  }

  .reviews {
    height: 350px;
  }
}

@media (min-width: 569px) and (max-width: 736px) {
  .description {
    max-width: 97%;
  }

  .list {
    max-width: 95%;
    min-width: 95%;
  }

  .slider {
    width: 100%;
  }

  .description p {
    text-align: justify;
  }
}

@media (min-width: 737px) and (max-width: 1024px) {
  .description {
    max-width: 97%;
  }

  .list {
    max-width: 80%;
    min-width: 80%;
  }

  .slider {
    width: 100%;
  }

  .description p {
    text-align: justify;
  }
}
</style>


