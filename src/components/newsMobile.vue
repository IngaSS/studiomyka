<template>
  <v-layout class="newsMobile">
    <h2>Новости</h2>
    <v-layout wrap class="newsListMobile">
      <v-flex v-for="item in news" class="newsCardMobile" :key="item.h3">
        <div class="newsItemMobile">
          <div class="newsTextMobile">
            <h3>{{ item.h3 }}</h3>
            <h5>{{ item.h5 }}</h5>
          </div>
        </div>
        <div class="newsPicMobile">
          <v-card flat tile>
            <v-img :src="item.img" height="460px"></v-img>
          </v-card>
        </div>
        <p class="newsPMobile">{{ item.p }}</p>
        <button class="newsBtnMobile">{{ item.btn }}</button>
      </v-flex>
    </v-layout>
    <v-btn class="moreNewsBtnMobile">Больше новостей</v-btn>
  </v-layout>
</template>

<script>
import img from "../img/newsPic.png";

export default {
  data: () => ({
    news: [
      {
        img: img,
        h3: "Открытие студии",
        h5: "1 февраля",
        p: "В парке открывается зона Day Time Party для самых...",
        btn: "Подробнее"
      },
      {
        img: img,
        h3: "Открытие студии",
        h5: "1 февраля",
        p: "В парке открывается зона Day Time Party для самых...",
        btn: "Подробнее"
      }
    ]
  })
};
</script>

<style>
.newsMobile {
  display: none;
}

@media (min-width: 320px) and (max-width: 450px) {
  .newsMobile {
    display: flex;
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 5%;
  }

  .newsMobile h2:before {
    content: url(../img/lineMin2.png);
    top: -5px;
    position: relative;
    right: 14px;
  }

  .newsMobile h2:after {
    content: url(../img/lineMin2.png);
    top: -5px;
    position: relative;
    left: 14px;
  }

  .newsMobile h2 {
    font-size: 22px;
    max-width: 290px;
    margin: 0 auto;
    color: #ffffff;
  }

  .newsMobile {
    max-width: 80%;
  }

  .newsListMobile {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .newsCardMobile {
    max-width: 103px;
    min-width: 103px;
    min-height: 245px;
    margin-top: 4%;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
  }

  .newsItemMobile {
    max-width: 103px;
    min-width: 103px;
    min-height: 130px;
    position: absolute;
    left: 14%;
    top: 0;
    background-color: #895aac;
    z-index: -1;
    text-align: -webkit-right;
  }

  .newsItemMobile h3,
  .newsItemMobile h5 {
    text-align: left;
    max-width: 130px;
    font-family: "Fira Sans", sans-serif;
    font-size: 10px;
    font-weight: 100;
    font-stretch: extra-condensed;
    line-height: 1.7;
    color: #ffffff;
    text-transform: uppercase;
  }

  .newsTextMobile {
    margin: 5% 3%;
  }

  .newsItemMobile h3,
  .newsItemMobile p {
    margin: 0;
    font-size: 7px;
  }

  .newsPicMobile {
    width: 103px;
    position: absolute;
    top: 12%;
    min-height: 130px;
  }

  .newsCardMobile .v-sheet {
    max-width: 103px;
    min-width: 103px;
    min-height: 130px;
    margin-top: 4%;
  }

  .newsCardMobile .v-responsive {
    height: 130px !important;
  }

  .newsPMobile {
    text-align: -webkit-left;
    margin: 0 auto;
    text-align: left;
    font-family: "Fira Sans", sans-serif;
    font-size: 9.5px;
    font-weight: 100;
    font-stretch: extra-condensed;
    color: #ffffff;
    width: 118px;
  }

  .newsBtnMobile {
    margin: 0 auto;
    margin-top: 3%;
    width: 100%;
    background-color: #895aac;
    min-height: 25px;
    font-family: "Fira Sans", sans-serif;
    font-size: 10px;
    font-weight: 500;
    font-stretch: extra-condensed;
    color: #ffffff;
    text-transform: uppercase;
    border-radius: 8px;
  }

  .moreNewsBtnMobile {
    max-width: 120px;
    min-width: 120px;
    margin: 0 auto;
    border-radius: 8px;
    border: solid 1px #ffffff;
    margin: 2% auto;
    background-color: transparent !important;
    font-family: "Fira Sans", sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: #ffffff !important;
    margin-top: 10%;
  }
}
</style>
