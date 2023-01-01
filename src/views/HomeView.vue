<template>
  <div class="home">
    <h1>Willkommen bei meiner Todo-App</h1>
    <p>Dies ist meine neue Todo-App, mit der Sie Ihre Aufgaben einfach verwalten können. Legen Sie los, indem Sie auf den Button unten rechts auf der Tasks Seite klicken.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
body {
  background-color: #fff1e6; /* neue Hintergrundfarbe */
  font-family: Arial, sans-serif;
  color: #333;
}

/* Stil für die Überschrift */
h1 {
  text-align: center;
  color: #00b8d4;
}

/* Stil für den Text */
p {
  width: 50%;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.5;
}

</style>
