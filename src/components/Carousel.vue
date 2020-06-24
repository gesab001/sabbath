<template>
   <div>

    <div id="overlay">
        <DeliveryOrPickup/>
    </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="black"

      style="text-shadow: 1px 1px 2px #333; text-align:center"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img

            width="70%"
            height="300px"
            src="https://picsum.photos/1024/480/?image=52"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
 <b-carousel-slide>
        <template v-slot:img>
          <img

            width="0%"
            height="300px"

            src="https://picsum.photos/1024/480/?image=52"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> 
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>

  </div>
</template>



<script>

import DeliveryOrPickup from './DeliveryOrPickup.vue'


export default {
  name: 'Carousel',
  props: {
    msg: String
  },
  components: {
    DeliveryOrPickup
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
#overlay{
  position: fixed;
  display: block;
  padding: 70px 0;
  width: 100%;
  height: 10%;
  text-align: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  cursor: pointer;
  
}
</style>
