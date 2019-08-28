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
      <div class="contacts">
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
  width: 1.7vw;
  height: 1.7vw;
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

/* iframe {
  width: 5vw !important;
  max-width: 5vw !important;
  min-width: 8vw !important;
  height: 1.5vw !important;
  max-height: 1.5vw !important;
  min-height: 2vw !important;
} */

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

.contacts {
  display: flex;
  flex-direction: column;
  max-width: 590px;
  justify-content: space-between;
  text-align: center;
  text-align: -webkit-center;
}

.contactsText {
  min-height: 460px;
  border-radius: 20px;
  text-align: -webkit-center;
  background-color: rgba(255, 255, 255, 0.27);
  width: 493px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}

.contacts .p1,
.contacts .p2 {
  max-width: 269px;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-size: 23px;
  font-weight: 300;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  margin: 0 auto;
}

.contacts .p2 {
  max-width: 170px;
  margin-top: 0;
  font-size: 20px;
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

@media (min-width: 320px) and (max-width: 767px) {
  .mapCont {
    margin-top: 5%;
    flex-direction: column;
    text-align: center;
  }

  .contacts {
    max-width: 100%;
  }

  .contactsText {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 320px;
    min-height: 300px;
  }

  .ymap-container {
    width: 320px;
    height: 300px;
  }

  .map {
    margin-bottom: 2%;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .mapCont {
    flex-direction: column;
    text-align: center;
  }

  .contacts {
    max-width: 100%;
  }

  .contactsText {
    width: 590px;
    min-height: 493px;
  }

  .ymap-container {
    width: 590px;
    height: 460px;
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


