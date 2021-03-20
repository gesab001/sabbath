<template>
  <div class="container">
    
     <h1>Sabbath {{ getDate() }} {{ getMonthName() }} {{ getYear() }}</h1>
   <!--  <div><button v-on:click="createAlbum">share</button></div>-->
     <div class="thumbnail-container" v-for="item in items" :key="item.id">
     <!--  <input class="checkboxInput" :value="item.id" v-model="mediaItemIds"  type="checkbox"/> -->
       <!--<router-link :to="{ name: 'Slideshow', params: {items: items } }">-->
		<a :href="item.productUrl"> <img class="thumbnail" :src="item.baseUrl"/> </a>
		
     <!--  </router-link>  -->
       
     </div>
  </div>
</template>

<script>
export default {
  name: 'Thumbnails',
  props: ['date', 'gapi'],

  data() {
    return {
      mediaItemIds: [],
      photoApi: Object,
      items: [],
      resource: {"pageSize": 100, "filters":
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
     displayCheckedPhotos(){
      var albumTitle = this.getDate().toString() + this.getMonthIndex().toString() + this.getYear().toString(); 
       console.log(albumTitle);
     },
     
     createAlbum(){
       var albumTitle = this.getDate().toString() + this.getMonthIndex().toString() + this.getYear().toString(); 
       var body = {"album": {"title": albumTitle}};
       

       console.log("share");
       this.gapi.client.request({
                'path': 'https://photoslibrary.googleapis.com/v1/albums',
                'method': 'POST',
                'body': body
            }).then(response =>  (this.addPhotosToAlbum(response)))
     },   
     addPhotosToAlbum(response){
       var body = {"mediaItemIds": this.mediaItemIds};
       var albumId = response.result.id;
       var url = 'https://photoslibrary.googleapis.com/v1/albums/'+albumId+':batchAddMediaItems';
       console.log(response);
       console.log(url);
       console.log(albumId);
       console.log(body);
       this.gapi.client.request({
                'path': url,
                'header': 'Content-type: application/json',
                'method': 'POST',
                'body': body
            }).then(response =>  (console.log(response)))
     },   
     login(){
         this.gapi.auth2.getAuthInstance().signIn().then((response) =>{
                       
                        console.log(response);
                this.makeRequest();               

           });
           
      },
              
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
		if (this.gapi.auth2.getAuthInstance().isSignedIn.get()){
			this.gapi.client.request({
                'path': 'https://content-photoslibrary.googleapis.com/v1/mediaItems:search?alt=json&key=',
                'method': 'POST',
                'body': this.resource
            }).then(response =>  (this.items = response.result.mediaItems, console.log(this.items)))
                  
		}else{
			this.login();      
		}  
     } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.checkboxInput{
   position: absolute;

}
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
