<template>
  <v-carousel>
    <v-carousel-item v-for="item in colors" :key="item">
      <v-sheet :item="item" height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }
    },
  }
</script>