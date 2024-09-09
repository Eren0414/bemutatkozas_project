<template>
<header class="masthead">
  <h1 class="masthead-heading"></h1>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  <link rel="stylesheet" href="../assets/feri.css">

</header>

<div class="kepek">
  <div class="cardBox">
    <div class="card">
      <img src="../../public/feri.jpg" alt="">
    </div>
  </div>
  
  <div class="thing ms-5">
    <h2>Nagy Ferenc</h2>
    <p>Sziasztok, szeretek zenét hallgatni és játszani és programozni.</p>
  </div>
</div>


<div class="card2">
      <div class="cover">
        <img src="https://th.bing.com/th/id/OIP.29xtrNFOXZHRPveP8vxHZgHaHa?rs=1&pid=ImgDetMain" alt="cover" />
        <div class="play-icon">
          <i class="fa fa-play"></i>
        </div>
      </div>
      <div class="card-content">
        <h4 class="betu">BLEACH</h4>
        <h6 class="betu">$uicideBoy$</h6>
      </div>
    </div>




</template>

<script>
export default {

}
</script>

<style>





.kepek{

  display: flex;
    flex-wrap: wrap;
    max-width: 95%;
    width: 100%;
    margin: 0 auto;
    justify-content: left;
    margin-top: 12rem;

}


.cardBox {
  width: 270px;
  height: 300px;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
    rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
}

.betu{
  color: white;
}

.card {
  position: absolute;
  width: 95%;
  height: 95%;
  background: #000814;
  border-radius: 20px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #ffffff;
  overflow: hidden;
  padding: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;
    object-fit: cover;

}

.card h3, span {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  font-weight: 800;
  pointer-events: none;
  opacity: 0.1;
}

.text {
  top: 50%;
}

.card .content h3 {
  font-size: 3rem;
  padding-bottom: 10px;
}

.card .content p {
  font-size: 1.6rem;
  line-height: 25px;
}

.card .content {
  transform: translateY(100%);
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.card:hover .content {
  transform: translateY(0);
  opacity: 1;
}

.cardBox::before {
  content: "";
  position: absolute;
  width: 40%;
  height: 150%;
  background: #40E0D0;
  background: -webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
  background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0);
  animation: glowing01 5s linear infinite;
  transform-origin: center;
  animation: glowing 5s linear infinite;
}

@keyframes glowing {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
.thing {
  padding: 1rem;
  width: 420px;
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
    0 5px 15px 0 rgba(0,0,0,0.08);
  background-color: #ffffff;
  border-radius: 0.5rem;
  margin-top: 12rem;
  
  border-left: 0 solid #00ff99;
  transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
}

.thing:hover {
  padding-left: 0.5rem;
  border-left: 0.5rem solid #00ff99;
}

.thing > :first-child {
  margin-top: 0;
}

.thing > :last-child {
  margin-bottom: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  text-decoration: underline;
}

.card2 {
  display: inline-block;
  width: 270px;
  justify-content: right;
  place-items: left;
  float: right;
  margin-top: -21rem;
  margin-right: 12rem;
  border-radius: 4px;
  padding: 16px;
  overflow: hidden;
  background-color: #181818;
  transition: background-color 0.4s;
  cursor: pointer;
  margin-bottom: 2rem;
  transform: rotateX(0deg) rotateY(-6deg) rotateZ(10deg);
}
.card2:hover {
  background-color: #282828;
}

.cover {
  position: relative;
  margin-bottom: 18px;
}
.cover img {
  display: block;
  width: 100%;
  box-shadow: 0 8px 20px -4px hsl(0, 0%, 5%);
}
.cover.artist img {
  border-radius: 50%;
}

.play-icon {
  position: absolute;
  bottom: -2px;
  right: 6px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fafafa;
  background-color: #1db954;
  box-shadow: 0 4px 16px -4px #121212;
  opacity: 0;
  transition: 0.4s, transform 0.1s;
}
.play-icon:hover {
  transform: scale(1.1);
}
.card2:hover .play-icon {
  bottom: 6px;
  opacity: 1;
}

.fa-play {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 52%;
  top: 50%;
  font-size: 1rem;
}

.card2-content {
  font-family: "Montserrat", sans-serif;
  color: #fafafa;
}
.card2-content h4 {
  margin-bottom: 6px;
}
.card2-content p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.5em;
  font-size: 14px;
  color: hsl(0, 0%, 70%);
}

</style>