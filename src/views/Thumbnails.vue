<template>
  <div class="container">
    
     <h1>Sabbath {{ getDate() }} {{ getMonthName() }} {{ getYear() }}</h1>

     <div class="thumbnail-container" v-for="item in items" :key="item.id">
   
       <router-link :to="{ name: 'Slideshow', params: {items: items } }"><img class="thumbnail" :src="item.baseUrl"/></router-link> 

     </div>
  </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  props: ['date', 'gapi'],

  data() {
    return {
      photoApi: Object,
      items: [],
      resource: {"filters":
           {"dateFilter":
             {"dates":[
                        {"day": this.getDate(),
                         "month": this.getMonthIndex(),
                         "year": this.getYear()
                        }
                      ]
              }
           }
        }
    }
  },

  created() {
    this.makeRequest();

 
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
     },
     
     makeRequest() {  
          this.gapi.client.request({
                'path': 'https://content-photoslibrary.googleapis.com/v1/mediaItems:search?alt=json&key=',
                'method': 'POST',
                'body': this.resource
           }).then(response =>  (this.items = response.result.mediaItems, console.log(this.items)))
        
     } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thumbnail-container {
    display: inline-block;
}

.thumbnail {
  width: 304px;
  height: 228px;
  margin: 10px;
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
