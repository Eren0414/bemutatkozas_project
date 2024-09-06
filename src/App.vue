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
     <div class="container">
        <div class="logo">
           <p class="main">H-H Travels</p>
           <p class="sub">Travel with Us</p>
        </div>
        <div class="links">
            <ul class="sec1">
                <li><a href="">Home</a></li>
                <li><a href="">Tours</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">About</a></li>
            </ul>
        </div>
     </div>
    </header>

    <section class="section1"> 
        <div class="subsec">
        <div>
            <p class="heading">H-H Travels</p>
        </div>
        <div>
            <p class="subheading">Travel with Us</p>
        </div>
        <div>
            <button class="butt">
                Explore Packages
            </button>
        </div></div>
    </section>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </body>
</header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
