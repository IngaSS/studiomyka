<template>
  <v-layout class="news">
    <h3>Новости</h3>
    <v-layout wrap class="newsList">
      <v-flex v-for="item in news" class="newsCard" :key="item.h3">
        <div class="newsItem">
          <div class="newsText">
            <h3>{{ item.h3 }}</h3>
            <h5>{{ item.h5 }}</h5>
          </div>
        </div>
        <div class="newsPic">
          <v-card flat tile>
            <v-img :src="item.img"></v-img>
          </v-card>
        </div>
        <p class="newsP">{{ item.p }}</p>
        <button class="newsBtn">{{ item.btn }}</button>
      </v-flex>
    </v-layout>
    <v-btn class="moreNewsBtn">Больше новостей</v-btn>
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
.news {
  flex-direction: column;
  text-align: center;
  max-width: 90%;
  margin: 0 8% 0 4.5%;
}

.newsList {
  margin-top: 3%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
}

.newsItem {
  position: absolute;
  top: 0;
  left: 12%;
  width: 100%;
  min-height: 30vw;
  left: 14%;
  top: 0;
  background-color: #895aac;
  z-index: -1;
  text-align: -webkit-right;
}

.newsText {
  text-align: right;
}

.newsText h3,
.newsText h5 {
  padding-top: 2%;
  font-size: 2vw;
  max-width: 23vw;
  text-align: right;
  color: #ffffff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
  margin-bottom: 0;
}

.newsText h5 {
  font-weight: 100;
  margin-top: 0;
}

.newsPic {
  margin-top: 27%;
}

.newsCard {
  max-width: 28%;
  position: relative;
}

.newsP {
  color: #ffffff;
  font-size: 1.3vw;
  text-align: initial;
  padding-top: 2vw;
  font-family: "Fira Sans", sans-serif;
  font-weight: 100;
}

.newsBtn {
  width: 100%;
  height: 4vw;
  background-color: #895aac;
  border-radius: 0.5vw;
  font-size: 1.5vw;
  text-transform: uppercase;
  color: white;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
}

.moreNewsBtn {
  margin: 0 auto;
  border-radius: 0.5vw;
  border: solid 0.07vw #ffffff;
  background-color: transparent !important;
  font-weight: 500;
  margin-top: 4vw;
  height: 5vw !important;
  width: 30%;
}

.moreNewsBtn .v-btn__content {
  font-size: 1.7vw;
  font-family: "Fira Sans", sans-serif;
  font-weight: 200;
  color: #ffffff;
}

@media (min-width: 320px) and (max-width: 450px) {
  .news {
    display: none;
  }

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
