<template>
<div>
	<fullscreen ref="fullscreen" @change="fullscreenChange">

		<b-carousel
			id="carousel-1"
			v-model="slide"
			:interval="4000"
			controls
			indicators
			
			class="carousel-container"
		>
			<div class="fullscreen"><button  type="button" @click="toggle" >{{fullscreenButtonText}}</button></div>
			<b-carousel-slide class="carousel-slide" v-for="item in items" :key="item" >
				<template v-slot:img v-bind:class="{bigSlide: fullscreen, smallSlide: notfullscreen}" >
					<img :src="getImageUrl(item.baseUrl)" v-bind:class="{imagesSmall: notfullscreen}" alt="image slot">
				</template>
			</b-carousel-slide>

		</b-carousel>
      
	</fullscreen>

	


</div>
</template>



<script>

import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)
export default {
	name: 'Slideshow',
	props: ['items']
	,
	components: {

	},
	methods: {
		toggle () {
		this.$refs['fullscreen'].toggle() // recommended
		// this.fullscreen = !this.fullscreen // deprecated
		},
		fullscreenChange (fullscreen) {
			this.fullscreen = fullscreen
			if (fullscreen){
				this.notfullscreen = false;
				this.fullscreenButtonText = "close";
			}else{
				this.notfullscreen  = true;
				this.fullscreenButtonText = "fullscreen";
			}
		},
		
		getImageUrl(baseUrl){
			return baseUrl+"=w2048-h1024";
		}
	},
	data() {
		return {
		fullscreen: false,
		notfullscreen: true,
		fullscreenButtonText: "fullscreen"
		}
	}
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

.carousel-slide {
   z-index: 0;
}
.fullscreen {
  background-color: white;
  width: 100;
  position: absolute;
  right: 0;
  z-index: 100;

}
.carousel-container {
	background-color: black;
	height: 100%;
  
} 

.fullSlide {
    width: 100%;
}

.smallSlide {
   width: 50%;
}

.imagesFull {
   width: 80%;
}

.imagesSmall {
   width: 300px;
}
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
