<template>
  <div class="home">
      <MenuBar/>
     <Carousel id="carousel"/> 
     <Dates :token="token" :gapi="gapi"/>

  </div>
</template>

<script>
// @ is an alias to /src
import MenuBar from '@/components/MenuBar.vue'
import Carousel from '@/components/Carousel.vue'
import Dates from '@/components/Dates.vue'

export default {
  name: 'Home',
  components: {
    MenuBar,
    Carousel,
    Dates
  }, 
  
  data() {
     return {
        token: "",
        gapi: Object
     }
  },
  
  created() {
    this.init();

  },
  methods: {
       init() {
        this.$gapi.getGapiClient().then((gapi) => {
            this.login(gapi);
            this.gapi = gapi;         
        })
      },
      
      login(gapi){
         gapi.auth2.getAuthInstance().signIn().then((response) =>{
                       
                        this.setToken(response);
                               

           });
           
      },
      
      setToken(response){
            this.token = response.uc.access_token;
      },
      
      getToken(){
         return this.token;
      }
  }
}
</script>
