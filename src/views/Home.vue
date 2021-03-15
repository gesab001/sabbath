<template>
  <div class="home">
      
     <Dates :token="token" :gapi="gapi"/>

  </div>
</template>

<script>
// @ is an alias to /src

import Dates from '@/components/Dates.vue'

export default {
  name: 'Home',
  components: {
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
            console.log(gapi);     
            if (gapi.auth2.getAuthInstance().isSignedIn.get()){
				this.gapi = gapi;         
            }else{
				this.login(gapi);
				this.gapi = gapi;         
            }           
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
