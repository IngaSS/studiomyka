<template>
  <v-layout class="event">
    <div class="eventPrevue">
      <v-img :src="pic" class="eventPic"></v-img>
      <div class="eventContent">
        <div class="contText">
          <h3>{{ event }}</h3>
          <p>{{ text }}</p>
          <v-btn class="eventBtn">Забронировать</v-btn>
        </div>
      </div>
    </div>
    <div class="profits">
      <ul>
        <li>
          <i class="material-icons">done_all</i>
          {{ bonus1 }}
        </li>
        <li>
          <i class="material-icons">done_all</i>
          {{ bonus2 }}
        </li>
        <li>
          <i class="material-icons">done_all</i>
          {{ bonus3 }}
        </li>
      </ul>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: ["pic", "event", "text", "bonus1", "bonus2", "bonus3"]
};
</script>

<style>
.event {
  display: flex;
  flex-direction: column;
}

.v-responsive__content {
  display: none;
}

.eventPrevue {
  display: flex;
  position: relative;
  height: 30vw;
  margin-top: 2vw;
}

.eventPic {
  position: absolute;
  width: 40vw;
  height: 23vw;
  left: 6.5vw;
  z-index: 11;
  top: 2vw;
}

.eventContent {
  background-color: rgba(137, 90, 172, 0.5);
  position: absolute;
  width: 30vw;
  height: 27vw;
  right: 6.5vw;
}

.contText {
  max-width: 27vw;
  text-align: -webkit-right;
  height: 26vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.eventContent h3,
.eventContent p {
  max-width: 27vw;
  text-align: right;
  font-size: 2vw;
  margin-top: 2vw;
  font-family: "Fira Sans", sans-serif;
  color: white;
  font-weight: 500;
}

.eventContent p {
  font-size: 1vw;
  font-weight: 200;
  max-width: 21vw;
  text-align: right;
}

.eventBtn {
  width: 15vw;
  margin-top: 2vw;
  height: 4vw !important;
  border-radius: 0.9vw;
}

.eventBtn .v-btn__content {
  font-size: 1.2vw;
  color: rgba(137, 90, 172);
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
}
</style>