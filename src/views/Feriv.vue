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
</div>

<div class="thing ms-5">
  <h2>Nagy Ferenc</h2>
  <p>Sziasztok, szeretek zenét hallgatni és játszani és programozni.</p>
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
    justify-content: right;
    margin-top: 1rem;
    position: fixed;
    transform: rotateX(0deg) rotateY(-6deg) rotateZ(10deg);
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





</style>