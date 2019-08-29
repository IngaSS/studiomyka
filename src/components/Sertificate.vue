<template>
  <v-layout class="sertificate">
    <div class="sertDiv">
      <div class="textSert">
        <h2>Подарочный сертификат</h2>
        <p>«МУКÁ» - это самая большая кулинарная студия Европы, которая ждет вас в гости в самом центре Москвы.</p>
      </div>
      <v-btn class="buySert" to="/SertificatesPage">Купить</v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "Sertificete"
};
</script>

<style>
.sertificate {
  margin-top: 3vw;
  background-image: url(../img/sertBack.png);
  background-repeat: repeat-x;
  background-size: contain;
}

.sertDiv {
  margin: 0 auto;
  display: flex;
  min-width: 100%;
  min-height: 17vw;
  justify-content: space-around;
}

.textSert {
  margin: auto 0;
  max-width: 35vw;
}

.textSert h2 {
  font-family: "Fira Sans", sans-serif;
  font-size: 2.7vw;
  font-weight: 500;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}

.textSert p {
  font-family: "Fira Sans", sans-serif;
  font-size: 1.5vw;
  font-weight: 100;
  color: #ffffff;
}

.buySert {
  margin: auto 0;
  width: 16vw;
  min-height: 6.5vw;
  border-radius: 0.9vw;
  border: solid 0.5vw #895aac;
  background-color: #895aac !important;
}

.buySert .v-btn__content {
  font-family: "Fira Sans", sans-serif;
  font-size: 2.1vw;
  font-weight: 300;
  color: #ffffff;
}

@media (min-width: 320px) and (max-width: 499px) {
  .sertificate {
    background-size: unset;
  }

  .sertDiv {
    text-align: -webkit-center;
    flex-direction: column;
    min-width: 100%;
  }

  .textSert {
    margin: 1vw auto;
    margin-bottom: 0;
    max-width: 96vw;
    text-align: justify;
  }

  .textSert h2 {
    font-size: 8vw;
    text-align: center;
  }

  .textSert p {
    text-align: justify;
    font-size: 5vw;
  }

  .buySert {
    margin-bottom: 2vw;
    width: 40vw;
    height: 13vw !important;
  }

  .buySert .v-btn__content {
    font-size: 6vw;
  }
}

@media (min-width: 500px) and (max-width: 823px) {
  .sertificate {
    background-size: unset;
  }

  .sertDiv {
    text-align: -webkit-center;
    flex-direction: column;
    min-width: 100%;
  }

  .textSert {
    margin: 1vw auto;
    margin-bottom: 0;
    max-width: 96vw;
    text-align: justify;
  }

  .textSert h2 {
    font-size: 5vw;
    text-align: center;
  }

  .textSert p {
    text-align: justify;
    font-size: 3vw;
  }

  .buySert {
    margin-bottom: 2vw;
    width: 31vw;
    height: 11vw !important;
  }

  .buySert .v-btn__content {
    font-size: 4vw;
  }
}

@media (min-width: 1023px) and (max-width: 1250px) {
  .textSert {
    max-width: 400px;
  }
}

/* @media (min-width: 640px) and (max-width: 823px) {
  .sertDiv {
    text-align: -webkit-center;
    flex-direction: column;
  }

  .textSert {
    max-width: 500px;
    text-align: justify;
  }

  .textSert h2 {
    font-size: 40px;
  }

  .buySert {
    margin-bottom: 2%;
  }
} */

/* @media (min-width: 320px) and (max-width: 639px) {
  .sertDiv {
    text-align: -webkit-center;
    flex-direction: column;
    min-width: 100%;
  }

  .textSert {
    margin: 10px auto;
    margin-bottom: 0;
    max-width: 315px;
    text-align: justify;
  }

  .textSert h2 {
    font-size: 32px;
    text-align: center;
  }

  .textSert p {
    text-align: justify;
    font-size: 16px;
  }

  .buySert {
    margin-bottom: 2%;
    width: 220px;
    min-height: 80px;
  }

  .buySert .v-btn__content {
    font-size: 25px;
  }
} */
</style>

