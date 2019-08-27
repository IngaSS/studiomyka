<template>
  <v-carousel :show-arrows="false" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import slider from "../img/slider.png";
 export default {
    data () {
      return {
        items: [
          {
            src: slider
          },
          {
            src: slider
          },
          {
            src: slider
          },
          {
            src: slider
          }
        ]
      }
    }
  }
</script>