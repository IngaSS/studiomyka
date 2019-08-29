<template>
  <div class="wrapperDiv">
    <div class="brandDiv">
      <router-link to="/Home">
        <img :src="logo" alt="#" class="moblogo" />
      </router-link>
    </div>
    <b-navbar toggleable="lg" class="mobMenu">
      <b-navbar-toggle target="menu-collapse" class="hideicon">
        <i class="material-icons">dehaze</i>
      </b-navbar-toggle>
      <b-collapse id="menu-collapse" class="collapseMenu row" is-nav>
        <!-- <b-nav-item-dropdown text="Студия" left class="col-auto withpad">
          <b-dropdown-item to="/Studio">Наша команда</b-dropdown-item>
          <b-dropdown-item to="/Studio">Новости</b-dropdown-item>
          <b-dropdown-item to="/Studio">Фотогаллерия</b-dropdown-item>
          <b-dropdown-item to="/Studio">Оставить отзыв</b-dropdown-item>
        </b-nav-item-dropdown>-->
        <!-- <b-nav-item-dropdown text="Детские мероприятия" class="col-auto">
          <b-dropdown-item to="/ChildrenEvents">Дни рождения</b-dropdown-item>
          <b-dropdown-item to="/ChildrenEvents">Школьные</b-dropdown-item>
          <b-dropdown-item to="/ChildrenEvents">Выпускные</b-dropdown-item>
        </b-nav-item-dropdown>-->
        <b-navbar-nav class="noDropDown col-auto">
          <b-nav-item to="/MasterClassesPage">Мастер-классы</b-nav-item>
          <!-- <b-nav-item href="#">Специальные мероприятия</b-nav-item> -->
        </b-navbar-nav>
        <!-- <b-nav-item-dropdown text="Корпоративы и праздники" class="col-auto">
          <b-dropdown-item to="/Festivals">Корпоративы</b-dropdown-item>
          <b-dropdown-item to="/Festivals">Тимбилдинги</b-dropdown-item>
          <b-dropdown-item to="/Festivals">Презентации</b-dropdown-item>
          <b-dropdown-item to="/Festivals">Дни рождения</b-dropdown-item>
          <b-dropdown-item to="/Festivals">Девичники</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Бизнес" class="styled col-auto">
          <b-dropdown-item to="/Business">Партнерские программы</b-dropdown-item>
          <b-dropdown-item to="/Business">Аренда студии</b-dropdown-item>
        </b-nav-item-dropdown>-->
        <b-navbar-nav class="noDropDown col-auto">
          <b-nav-item to="/3Dtour">3D тур</b-nav-item>
          <!-- <b-nav-item to="/3Dtour">Контакты</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import logo from "../img/logo.png";

export default {
  name: "Toolbar",
  data: () => ({
    logo: logo
  })
};
</script>

<style>
.mobMenu {
  background-color: #895aac;
  min-height: 4vw;
  justify-content: flex-end;
}

.moblogotipe {
  display: none;
}

.brandDiv {
  display: none;
}

.collapseMenu {
  justify-content: space-around;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-preferred-size: auto;
  flex-basis: auto;
}

.collapseMenu li {
  list-style-type: none;
}

.collapseMenu .dropdown-item {
  word-break: unset;
  white-space: unset;
  font-size: 14px;
  padding: 0.25rem 2rem;
}

.collapseMenu .dropdown-menu a {
  font-size: 1vw;
  padding: 0.4vw;
  font-family: "Fira Sans", sans-serif;
}

.collapseMenu .dropdown-menu {
  width: -webkit-fill-available;
  min-width: 8vw;
}

.collapseMenu .dropdown-toggle::after {
  display: none;
}

.noDropDown {
  justify-content: inherit;
  padding: 0;
}

.nav-item a,
.nav-link {
  font-family: "Fira Sans", sans-serif;
  font-size: 1.2vw;
  font-weight: 300;
  font-style: normal;
  font-stretch: extra-condensed;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff !important;
}

.nav-item ul {
  background-color: rgba(137, 90, 172, 0.5);
}

.btnCallapse {
  margin-right: 0.5%;
}

.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}

@media (min-width: 320px) and (max-width: 990px) {
  .moblogo {
    padding: 1% 0;
  }

  .brandDiv {
    display: block;
    text-align: center;
    background-color: black;
  }

  .mobMenu {
    background-color: black !important;
    position: absolute;
    top: 10px;
    max-width: 240px;
    justify-content: unset;
    z-index: 111;
  }

  .nav-link {
    padding: 0.5rem 0rem !important;
  }

  .collapseMenu {
    display: flex;
    margin: 0;
  }
}

@media (min-width: 500px) and (max-width: 991px) {
  .nav-item a,
  .nav-link {
    font-family: "Fira Sans", sans-serif;
    font-size: 2.5vw;
    font-weight: 300;
    font-style: normal;
    font-stretch: extra-condensed;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff !important;
  }
}

@media (min-width: 320px) and (max-width: 499px) {
  .nav-item a,
  .nav-link {
    font-family: "Fira Sans", sans-serif;
    font-size: 4vw;
    font-weight: 300;
    font-style: normal;
    font-stretch: extra-condensed;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff !important;
  }
}

@media (max-width: 1285px) {
  /* .collapseMenu li {
    padding: 0;
  } */

  .nav-collapseRow {
    justify-content: flex-end;
  }
}

@media (min-width: 992px) {
  .nav-item a,
  .nav-link {
    padding: 0;
  }
}

@media (min-width: 320px) and (max-width: 991px) {
  .col-4 {
    max-width: 100%;
  }

  .collapseMenu {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    display: block;
  }

  .collapseMenu .dropdown-menu {
    position: static !important;
    float: none;
  }

  .collapseMenu li {
    padding-right: 15px;
    padding-left: 15px;
  }

  /* .links {
    margin-left: 0;
  } */
}

@media (min-width: 991px) and (max-width: 1500px) {
  .nav-item a,
  .nav-link {
    font-size: 1.5vw;
  }
}
</style>


