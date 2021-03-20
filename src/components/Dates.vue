<template>
  <div class="mainContainer">
    <Carousel id="carousel"/> 
    <h1>{{selectedYear}}</h1>
    <h2>{{token}}</h2>
    <div>
       <select v-model="selectedYear" v-on:change="changeSelectedYear($event)">
          <option v-for="option in years" :key="option" v-bind:value="option">
              {{option}}
          </option>
       </select>
    </div>
    <div class="cardContainer" v-for="item in sabbaths" :key="item">
   

        <router-link :to="{ name: 'Thumbnails', params: {date: item, gapi:gapi } }"><DateCard :message="item"/></router-link> 
             
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import DateCard from './DateCard.vue'

export default {
  name: 'Dates',
  props: {
    msg: String,
    token: String,
    gapi: Object
  },
  components: {
    DateCard,
    Carousel
  },
  data() {
    return {
      selectedYear: this.getCurrentYear(),
      years: this.getYears(),
      sabbaths: []
    }
  },

  created() {

    this.generateSabbaths(this.selectedYear);
  },
  methods: {
     getCurrentYear(){
       return  new Date().getFullYear();
     },
     getYears(){
        var now = new Date().getFullYear();
        var years = [];
        for (var year=2013; year <= now; year++) {
            years.push(year);
             
        }
        return years.reverse();

     },
     generateSabbaths(year) {
        var d = new Date();
	var now = new Date(year, 11, 31);
        if (year==this.getCurrentYear()){
           now = new Date();
        }
	var sabbathsOfTheYear = [];
	for (d = new Date(year, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
             var dayoftheweek = new Date(d).getDay();
             if(dayoftheweek==6){
               sabbathsOfTheYear.push(new Date(d));
             } 
	}
        this.sabbaths = sabbathsOfTheYear;
        
     },

    changeSelectedYear(event) {
      console.log(event.target.value);
      this.generateSabbaths(event.target.value);
    }  

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mainContainer {
  text-align: center;
}
.cardContainer {
   display: inline-block;
   background-color: blue;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
