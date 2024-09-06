<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Homepage.vue'
</script>

<template>
  <header>
    <title>Hello, world!</title>
  <body>
    <header>
     <div class="container my-container my-border">
        <div class="logo">
           <p class="main">Bemutatkozás</p>
           <p class="sub">Nagy Ferenc & Jáger Kristóf</p>
        </div>
        <div class="links">
            <ul class="sec1">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
            </ul>
        </div>
     </div>
    </header>
  </body>
</header>
  <RouterView />
</template>

