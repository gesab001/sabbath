<template>
  <div class="dates">
    <h1>Dates</h1>
    <div>{{selectedYear}}</div>
    <div>
       <select v-model="selectedYear" v-on:change="changeSelectedYear($event)">
          <option v-for="option in years" :key="option" v-bind:value="option">
              {{option}}
          </option>
       </select>
    </div>
    <div v-for="item in sabbaths" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Dates',
  props: {
    msg: String
  },

  data() {
    return {
      selectedYear: 2021,
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
        return years;

     },
     generateSabbaths(year) {
        var d = new Date();
	var now = new Date(year, 11, 31);
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
