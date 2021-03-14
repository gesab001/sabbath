<template>
  <div class="home">
      <MenuBar/>
     <Carousel id="carousel"/> 
     <Dates/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue'
import Carousel from '@/components/Carousel.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Dates from '@/components/Dates.vue'

export default {
  name: 'Home',
  components: {
    MenuBar,
    Carousel,
    HelloWorld,
    Dates
  }
}
</script>
