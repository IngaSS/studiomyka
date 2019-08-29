<template>
  <div class="mainDiv">
    <div class="mapCont">
      <div class="map">
        <h3>Карта</h3>
        <yandex-map
          :coords="[55.758443, 37.549238]"
          zoom="18"
          :behaviors="['multiTouch', 'dblClickZoom', 'scrollZoom', 'drag']"
          :controls="['geolocationControl', 'typeSelector', 'zoomControl']"
          map-type="map"
        >
          <ymap-marker
            marker-type="placemark"
            markerId="1"
            :coords="[55.758443, 37.549238]"
            :balloon="{header: 'header', body: 'body', footer: 'footer'}"
            :options="this.properties"
            :properties="this.marker"
          />
        </yandex-map>
      </div>
      <div class="contactsFull">
        <h3>Контакты</h3>
        <div class="contactsText">
          <p class="p1">
            123 Москва
            Шмитовский пр-д, д. 16, стр. 1.
            <br />Тел. +7 (495) 123-37-99
            office@studiomyka.ru
            http://studiomyka.ru
            studio_myka
          </p>
          <p class="p2">
            Режим работы:
            Пн-вс: 10:00-22:00
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    marker: {
      iconCaption: "Россия, Москва, Шмитовский пр-д, д.16, стр. 1"
    },
    properties: {
      preset: "islands#violetDotIcon"
    }
  })
};
</script>

<style>
.map .ymaps-2-1-74-copyright {
  height: 0.9vw;
  top: -47px;
}

.map .ymaps-2-1-74-copyright__content {
  font: 0.7vw Verdana, Arial, sans-serif;
}

.map .ymaps-2-1-74-map-copyrights-promo {
  display: none;
}

.map .ymaps-2-1-74-float-button-icon {
  width: 1.4vw;
  height: 1.4vw;
}

.map .ymaps-2-1-74-float-button {
  width: 2vw;
  max-width: 2vw !important;
  height: 2vw;
}

.map .ymaps-2-1-74-float-button-icon_icon_geolocation {
  background-size: contain;
}

.map .ymaps-2-1-74-zoom {
  height: 7vw !important;
  width: 2vw;
}

.map .ymaps-2-1-74-controls__control {
  top: 8vw !important;
}

.map .ymaps-2-1-74-zoom__runner {
  top: 0.1vw !important;
  left: -0.94vw;
}

.map .ymaps-2-1-74-zoom__scale {
  width: 0.1vw;
  left: 55px;
  top: 120px;
  bottom: 120px;
}

.map .ymaps-2-1-74-zoom__minus .ymaps-2-1-74-zoom__icon,
.map .ymaps-2-1-74-zoom__plus .ymaps-2-1-74-zoom__icon,
.map .ymaps-2-1-74-listbox__button-icon.ymaps-2-1-74-_icon_layers,
.map .ymaps-2-1-74-_visible-arrow .ymaps-2-1-74-listbox__button-arrow {
  background-size: contain;
}

.map .ymaps-2-1-74-listbox {
  width: 7vw !important;
  height: 2.3vw;
}

.map .ymaps-2-1-74-listbox__button {
  height: 2.3vw;
  width: 7vw;
}

.map .ymaps-2-1-74-listbox__button-icon {
  width: 2vw;
  height: 2vw;
}

.map .ymaps-2-1-74-listbox__button-text {
  font-size: 1vw;
  padding: 0 12px 0 0.3vw;
  line-height: 2.2vw;
}

.map .ymaps-2-1-74-listbox__button-arrow {
  width: 0.7vw;
  height: 0.7vw;
  right: 0.6vw;
  top: 0.8vw;
}

.mainDiv {
  min-height: 30vw;
  max-width: 95%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 1vw;
  background-color: rgba(157, 52, 205, 0.2);
}

.mapCont {
  display: flex;
  justify-content: space-around;
  min-height: 21vw;
  max-width: 100%;
  margin: 3vw auto;
}

.ymap-container {
  width: 27vw;
  height: 22vw;
  margin: 0 auto;
}

.ymaps-2-1-74-svg-icon {
  background-size: 52px 60px !important;
  width: 56px !important;
  height: 59px !important;
  left: -20px !important;
  top: -69px !important;
}

.ymaps-2-1-74-inner-panes {
  border-radius: 20px;
}

.ymaps-2-1-74-map {
  width: 27vw !important;
  height: 22vw !important;
}

.map {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: -webkit-center;
}

.contactsFull {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  text-align: -webkit-center;
}

.contactsText {
  min-height: 22vw;
  border-radius: 20px;
  text-align: -webkit-center;
  background-color: rgba(255, 255, 255, 0.27);
  width: 28vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}

.contactsFull .p1,
.contactsFull .p2 {
  max-width: 21vw;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.5vw;
  font-weight: 300;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  margin: 0 auto;
}

.contactsFull .p2 {
  max-width: 23vw;
  margin-top: 0;
  font-size: 1.2vw;
}

.mapCont h3 {
  font-family: "Fira Sans", sans-serif;
  font-size: 2vw;
  font-weight: 300;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .mapCont {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    /* -ms-flex-direction: column; */
    /* flex-direction: column; */
    text-align: center;
  }

  .contactsFull {
    max-width: 100%;
  }

  .contactsText {
    width: 38vw;
    min-height: 30vw;
  }

  .contactsFull .p1 {
    max-width: 35vw;
    font-size: 2vw;
  }

  .contactsFull .p2 {
    max-width: 31vw;
    font-size: 1.7vw;
  }

  .mapCont h3 {
    font-size: 3vw;
  }

  .ymap-container {
    width: 38vw;
    height: 30vw;
  }

  .map .ymaps-2-1-74-map {
    width: 38vw !important;
    height: 30vw !important;
  }

  .map {
    /* margin-bottom: 2%; */
    /* height: 39vw; */
  }
}

@media (min-width: 500px) and (max-width: 769px) {
  .mapCont {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }

  .contactsFull {
    max-width: 100%;
  }

  .contactsText {
    width: 55vw;
    min-height: 40vw;
  }

  .contactsFull .p1 {
    max-width: 48vw;
    font-size: 2.5vw;
  }

  .contactsFull .p2 {
    max-width: 37vw;
    font-size: 2.3vw;
  }

  .mapCont h3 {
    font-size: 4vw;
  }

  .ymap-container {
    width: 55vw;
    height: 40vw;
  }

  .map .ymaps-2-1-74-map {
    width: 55vw !important;
    height: 40vw !important;
  }

  .map {
    margin-bottom: 2%;
  }
}

@media (min-width: 320px) and (max-width: 499px) {
  .mapCont {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center;
  }

  .contactsFull {
    max-width: 100%;
  }

  .contactsText {
    width: 70vw;
    min-height: 55vw;
  }

  .contactsFull .p1 {
    max-width: 62vw;
    font-size: 3.5vw;
  }

  .contactsFull .p2 {
    max-width: 54vw;
    font-size: 3vw;
  }

  .mapCont h3 {
    font-size: 5vw;
  }

  .ymap-container {
    width: 70vw;
    height: 55vw;
  }

  .map .ymaps-2-1-74-map {
    width: 70vw !important;
    height: 55vw !important;
  }

  .map {
    margin-bottom: 2%;
  }
}

/* @media screen and (min-width: 1380px) {
  .contactsText {
    width: 690px;
    min-height: 493px;
  }

  .contacts {
    max-width: 690px;
  }

  .mapCont {
    max-width: 90%;
    margin: 5% auto;
  }

  .ymap-container {
    width: 690px;
    height: 493px;
  }
} */

@media screen and (max-width: 320px) {
  .mainDiv {
    max-width: 100%;
  }
}
</style>


