<template>
  <div class="container">
    
     <h1>Sabbath {{ getDate() }} {{ getMonthName() }} {{ getYear() }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  props: ['date'],

  data() {
    return {
      selectedYear: 2021,
      years: this.getYears(),
      sabbaths: []
    }
  },

  created() {

  
 
  },
  methods: {
    getYear(){
       return  new Date(this.date).getFullYear();
     },
     getMonthName(){
       var monthLong= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
       var monthindex = new Date(this.date).getMonth();
       return monthLong[monthindex]; 
     },
     getMonthIndex(){

       var monthindex = new Date(this.date).getMonth() + 1;
       return monthindex; 
     },
     getDate() {
       return new Date(this.date).getDate();
     }


    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
