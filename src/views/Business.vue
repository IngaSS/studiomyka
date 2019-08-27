<template>
  <v-container class="container" fluid>
    <Header />
    <Toolbar />
    <v-layout class="businessPic"></v-layout>
    <v-layout class="businessText">
      <h1>Производителям продуктов питания и товаров</h1>
      <details>
        <summary>Одним из наиболее эффективных вариантов коммуникации с потенциальным потребителем на сегодняшний день считается реклама в формате product-placement. Но, мы пошли дальше! Все продукты и товары можно будет еще и протестировать в реальном времени – вот это новый уровень рекламных возможностей и это точно лучшая реклама. Тест-драйв! </summary> Если вы уверены в качестве своего товара и вам нечего скрывать – мы с удовольствием предоставим вам нашу площадку!
        Мы заинтересованы и готовы к различным вариантам сотрудничества с производителями продуктов питания и различных товаров для домашнего пользования, чтобы представить продукцию гостям Кулинарной студии «МУКА».
        Предлагаем определить формат взаимовыгодных отношений на совместной встрече!
      </details>
      <p>
        Одним из наиболее эффективных вариантов коммуникации с потенциальным потребителем на сегодняшний день считается реклама в формате product-placement. Но, мы пошли дальше! Все продукты и товары можно будет еще и протестировать в реальном времени – вот это новый уровень рекламных возможностей и это точно лучшая реклама. Тест-драйв! Если вы уверены в качестве своего товара и вам нечего скрывать – мы с удовольствием предоставим вам нашу площадку!
        Мы заинтересованы и готовы к различным вариантам сотрудничества с производителями продуктов питания и различных товаров для домашнего пользования, чтобы представить продукцию гостям Кулинарной студии «МУКА».
        Предлагаем определить формат взаимовыгодных отношений на совместной встрече!
      </p>
      <v-btn class="businessBtn">Связаться</v-btn>
    </v-layout>
    <div class="line"></div>
    <v-layout class="businessText">
      <h1>Арендаторам</h1>
      <p
        class="p2"
      >Помещения кулинарной студии – идеальная площадка для съемок тематических программ, репортажей, рекламных материалов и, конечно же презентаций новых продуктов. Абсолютно новая площадка, оборудованная современной техникой, позволит быстро и качественно подготовить и провести специальные мероприятия для Вас или Вашего Клиента/Заказчика.</p>
      <v-btn class="businessBtn">Связаться</v-btn>
    </v-layout>
    <div class="line"></div>

    <Partners />
    <MobContacts />
    <Footer />
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Toolbar from "../components/Toolbar";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import MobContacts from "../components/MobContacts";
export default {
  name: "Business",
  components: {
    Header,
    Toolbar,
    Partners,
    Footer,
    MobContacts
  },
  computed: {
    Cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style>
details {
  display: none;
}

.businessPic {
  background-image: url(../img/businessPic.png);
  /* min-height: 610px; */
  background-size: 100%;
}

.line {
  background-image: url(../img/lineForBuss1.png);
  width: 100%;
  height: 115px;
  background-repeat: repeat;
  margin: 5% 0;
}

.businessText {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  max-width: 80%;
  margin-top: 2%;
}

.businessText p {
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: 100;
}

.businessText h1 {
  color: white;
  /* font-size: 55px; */
  font-family: "Fira Sans", sans-serif;
  font-weight: 500;
  margin-bottom: 2%;
}

@media (min-width: 320px) and (max-width: 823px) {
  .businessText p {
    display: none;
  }

  details {
    display: inline;
    font-family: "Fira Sans", sans-serif;
    font-size: 18px;
    color: white;
    text-align: center;
    font-weight: 100;
  }

  details[open] {
    display: contents; /* спрятанный текст на текущей строке (в Google Chrome отсутствует реализация на момент написания статьи) */
  }

  details summary {
    cursor: pointer;
  }

  details[open] summary::after {
    display: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details summary::after {
    content: " ...читать далее";
    color: #895aac;
  }

  .p2 {
    display: block !important;
  }
}
</style>

