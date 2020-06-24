<template>
  <div>
     <div id="container">
     <a href="https://order.dominos.co.nz/estore/en/Home?redirectTo=delivery" class="delivery button">
                   
          DELIVERY
        </a>
        <div class="or-div"><span>OR</span></div>
        <a href="https://order.dominos.co.nz/estore/en/Home?redirectTo=pickup" class="pickup button">
                  
          PICK UP
        </a>
   </div>
  </div>
</template>
s
<script>
export default {
  name: 'DeliveryOrPickup',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.or-div{

  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  display: inline;
  z-index: 2;
  position:absolute;
  font-weight: bolder;
  text-align: center;
  line-height: 50px;



}


.delivery{
  background: blue;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.button{
 display:inline;
 font-weight: bolder;
 z-index: 1;
 padding-top:20px;
 padding-bottom:20px;
 padding-left:100px;
 padding-right:100px;
 font-size: 30px;
 width: 100px;


}

.pickup{
  background: red;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

a{

}
a:link, a:visited{
  text-decoration: none !important;
  color: white;
  letter-spacing:2.5px;
 

}

.container{
background-color:rgba(0,0,0,.5);position:fixed;top:80px;z-index:1300;width:100%}




</style>
