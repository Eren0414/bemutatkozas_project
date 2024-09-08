<template>
<header class="masthead">
  <h1 class="masthead-heading"></h1>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
</header>

<div class="conatner">
  <div class="card" style="width: 20rem;">
  <img src="../../public/feri.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Nagy Ferenc</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>



</template>

<script>
export default {

}
</script>

<style>


.card{
  background-color:aquamarine;
}

.card-img-top{
 max-width: 100%; 
height: auto;
align-items: center;
}

.conatner{
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}


</style>