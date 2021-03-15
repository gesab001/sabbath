<template>
  <div class="card">
    <div>Sabbath</div>
    <div>{{getDate()}}</div>
    <div>{{getMonth()}}</div>
    <div>{{getYear()}}</div>    
  </div>
</template>

<script>
export default {
  name: 'DateCard',
  props: {message: Date},
  methods: {
     getYear(){
       return  new Date(this.message).getFullYear();
     },
     getMonth(){
       var monthLong= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
       var monthindex = new Date(this.message).getMonth();
       return monthLong[monthindex]; 
     },
     getDate() {
       return new Date(this.message).getDate();
     }
    

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  padding: 10px;
  margin: 10px;
  width: 110px;
  text-align: center;
  cursor: pointer;
}

.card:hover {
  background-color: green;
  color: white;
  font-weight: bold;
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
