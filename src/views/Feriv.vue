<template>
<header class="masthead">
  <p class="masthead-intro">Heooo, én</p>
  <h1 class="masthead-heading">Feri vagyok</h1>
</header>
<section class ="introduction-section">
  <h1>Introduction</h1>
  <p>I am an aspiring Web Developer and Designer living in Los Angeles, CA with my girlfriend and two dogs. My background is in healthcare consulting but I am looking to implement my love for design into a new career.</p>
  <p>Happiness is always going to be the most important thing to me. Happiness is easy. A lot of people might say “Well, if it’s easy, then it probably isn’t worth anything.” Wrong – life should be easy. If it’s not easy, then you might be doing it wrong.</p>
</section>
<section class="location-section">
  <h1>Where I'm From</h1>
  <p>I’m from a small mountain town in Colorado and I have lived all around both Colorado and California.</p>
</section>
<section class="questions-section">
  <h1>More About Me</h1>
  <h2>What are your favorite hobbies?</h2>
  <p>My favorite hobbies are design and illustration, music, writing, and lately I have been really getting into becoming an amateur barista.</p>
  <h2>What's your dream job?</h2>
  <p>My dream job would be in a Front-End Web Developer position where I also got to use my design skills to their full potential. I definitely like being part of smaller, more cohesive teams.</p>
  <h2>What music have you been listening to lately?</h2>
  <p>I have been listening to everything from Band of Horses to Leon Bridges to Boston and everything in between.</p>
</section>
<footer class="content-footer">
  
</footer>
</template>

<script>
export default {

}
</script>

<style>
body {
  color: #222222;
  font-size: 1em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

.masthead-heading,
.masthead-intro,
.content-footer {
  text-align: center;
}

a {
  text-decoration: none;
  color: #104E8B;
}

a:hover {
  color: #1874CD;
}

a:visited {
  color: #6183A6;
}

.masthead-intro {
  margin-bottom: 0.1em;
  margin-top: 0.1em;
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 5em;
  color: #fff;
  letter-spacing: 0.1em;
}

.masthead-heading {
  margin-top: -0.2em;
  font-family: "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 6em;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #B0E0E6;
  text-shadow: 2px 2px #000;
}

.masthead {
  padding: 6em 0;
  background-image: url(https://download.unsplash.com/photo-1432234525151-015bc7937f1c);
  background-size: cover;
  background-repeat: no-repeat;
  border-top: solid 1em #B0E0E6;
}

.masthead-intro {
  margin-bottom: 0.1em;
}

.masthead-heading {
  margin-bottom: -0.2em;
}

.content-footer,
.introduction-section,
.location-section,
.questions-section {
  max-width: 38em;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2em;
}

.social > li {
  display: inline-block;
  padding-left: 1em;
  padding-right: 1em;
}

.content-footer {
  background-color: #B0E0E6;
  max-width: 100%;
}

.content-footer > p {
  color: white;
  padding-top: 2em;
  padding-bottom: 2em;
}

.introduction > p,
.location > p,
.content-footer > p {
  font-weight: 300;
  letter-spacing: 0.05em;
}

.questions-section > h2 {
  font-family: "Gentium Book Basic", Georgia, serif;
  font-size: 1.2em;
  font-weight: bold;
  color: #FBEC5D;
}

/* MEDIA QUERIES */

@media only screen and (max-width: 500px) {
  .masthead {
    padding: 3em 0;
  }
  .masthead-intro {
    font-size: 3em;
  }
  .masthead-heading {
    font-size: 3em;
  }
  .introduction-section,
  .location-section,
  .questions-section {
    max-width: 85%;
  }
}

</style>