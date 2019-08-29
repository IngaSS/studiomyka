<template>
  <b-container class="partners">
    <b-row class="partIcons">
      <b-img :src="icon1" alt="Image 1" class="withMargin"></b-img>
      <b-img :src="icon2" alt="Image 1"></b-img>
      <b-img :src="icon3" alt="Image 1" class="withMargin"></b-img>
      <b-img :src="icon4" alt="Image 1" class="icon4"></b-img>
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
  margin-top: 4vw;
  max-width: 100%;
  background-color: rgba(255, 255, 255, 0.56);
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 5vw;
}

.partIcons {
  margin-left: 0;
  margin-right: 0;
  max-width: 80%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 4vw auto;
}

.partIcons img {
  width: 16vw;
  height: 9vw;
}

.partIcons img:nth-child(4) {
  width: 5.5vw;
  height: 9vw;
}

.extra {
  text-align: right;
}

.withMargin {
  margin: auto 0;
}

@media (min-width: 320px) and (max-width: 500px) {
  .partIcons {
    flex-direction: column;
    flex-wrap: wrap;
    text-align: -webkit-center;
  }

  .partIcons img {
    width: 40vw;
    height: 23vw;
  }

  .partIcons img:nth-child(3) {
    margin-left: 0;
    margin-top: 9vw;
  }

  .partIcons img:nth-child(4) {
    width: 13.5vw;
    height: 21vw;
    margin: 0 auto;
    margin-top: 7vw;
  }
}

@media (min-width: 501px) and (max-width: 991px) {
  .partIcons {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .partIcons img {
    width: 33vw;
    height: 17vw;
  }

  .partIcons img:nth-child(3) {
    margin-left: 0;
    margin-top: 7vw;
  }

  .partIcons img:nth-child(4) {
    width: 11.5vw;
    height: 19vw;
    margin-top: 8vw;
    margin-right: 10.3vw;
  }
}
</style>


