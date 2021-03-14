<template>
  <div>
    <MenuBar/>

    <Carousel id="carousel"/>
 
    <Dates/>
    <Sermons/>
  </div>
</template>

<script>

import MenuBar from './MenuBar.vue'

import Carousel from './Carousel.vue'
import Sermons from './Sermons.vue'
import Dates from './Dates.vue'
export default {
  name: 'Homepage',
  props: {
    msg: String
  },
  components: {
    MenuBar,
    Carousel,
    Sermons,
    Dates
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
