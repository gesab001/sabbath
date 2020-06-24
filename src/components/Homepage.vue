<template>
  <div>
    <MenuBar/>

    <Carousel id="carousel"/>
  </div>
</template>

<script>

import MenuBar from './MenuBar.vue'

import Carousel from './Carousel.vue'
export default {
  name: 'Homepage',
  props: {
    msg: String
  },
  components: {
    MenuBar,
    Carousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.delivery{

}

.carousel{

}
</style>
