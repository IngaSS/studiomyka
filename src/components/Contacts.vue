<template>
  <div class="mainDiv">
    <div class="mapCont">
      <div class="map">
        <h3>Карта</h3>
        <yandex-map
          :coords="[55.758443, 37.549238]"
          zoom="17"
          :behaviors="['multiTouch', 'dblClickZoom', 'scrollZoom', 'drag']"
          :controls="['fullscreenControl', 'geolocationControl', 'typeSelector', 'zoomControl']"
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
.mainDiv {
  min-height: 545px;
  max-width: 95%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 6%;
  background-color: rgba(157, 52, 205, 0.2);
}

.mapCont {
  display: flex;
  justify-content: space-around;
}

.ymap-container {
  width: 590px;
  height: 460px;
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

.mapCont {
  min-height: 514px;
  max-width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
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
  font-size: 42px;
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

@media screen and (min-width: 1380px) {
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
}

@media screen and (max-width: 320px) {
  .mainDiv {
    max-width: 100%;
  }
}
</style>


