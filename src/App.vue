<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Feriv from './views/Feriv.vue';
import Kristofv from './views/Kristofv.vue';
</script>

<template>
  <header>
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bemutatkozás</title>
  </head>
  <body>
    <header>
     <div class="container my-container my-border">
        <div class="logo">
           <h1 class="main">Bemutatkozás</h1>
           <p class="sub">Nagy Ferenc & Jáger Kristóf</p>
        </div>
        <div class="links">
            <ul class="sec1">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/aboutferenc">About Ferenc</RouterLink></li>
                <li><RouterLink to="/aboutkristof">About Kristóf</RouterLink></li>
            </ul>
        </div>
     </div>
    </header>
  </body>
</header>
  <RouterView />
</template>

<style>
</style>

