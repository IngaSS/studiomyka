<template>
  <b-container class="partners">
    <b-row class="partIcons">
      <b-img :src="icon1" width="190" height="100" alt="Image 1" class="withMargin"></b-img>
      <b-img :src="icon2" width="250" height="150" alt="Image 1"></b-img>
      <b-img :src="icon3" alt="Image 1" width="230" height="100" class="withMargin"></b-img>
      <b-img :src="icon4" alt="Image 1" height="180" class="icon4"></b-img>
    </b-row>
  </b-container>
</template>

<script>
import icon1 from "../img/groupIcon1.png";
import icon2 from "../img/groupIcon2.png";
import icon3 from "../img/groupIcon3.png";
import icon4 from "../img/groupIcon4.png";
export default {
  data: () => ({
    icon1: icon1,
    icon2: icon2,
    icon3: icon3,
    icon4: icon4
  })
};
</script>

<style>
.partners {
  margin-top: 5%;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.56);
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 10%;
}

.partIcons {
  margin-left: 0;
  margin-right: 0;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 85%;
  justify-content: space-between;
  margin: 3% auto;
}

.extra {
  text-align: right;
}

.withMargin {
  margin: auto 0;
}

@media (min-width: 320px) and (max-width: 567px) {
  .partIcons {
    min-height: 650px;
    justify-content: space-around;
    flex-direction: column;
  }

  .partIcons img {
    margin: 0 auto;
  }
}

@media (min-width: 568px) and (max-width: 1024px) {
  .partIcons {
    flex-direction: column;
    min-height: 600px;
    text-align: -webkit-center;
  }

  .icon4 {
    width: 110px;
  }

  .partIcons img {
    margin: 0 auto;
  }
}
</style>


