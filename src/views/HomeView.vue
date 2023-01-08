<template>
  <div class="home">
    <h1>Willkommen bei der ultimativen To-do App</h1> <p>Verwalten Sie Ihre Aufgaben und erreichen Sie Ihre Ziele mit unserer benutzerfreundlichen App. Fügen Sie Aufgaben hinzu, markieren Sie sie als abgeschlossen und halten Sie Ihren Fortschritt im Auge. </p>

  </div>

</template>

<script>

export default {
  path: 'home',
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
body {
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
}

/* Stil für die Überschrift */
h1 {
  text-align: center;
  color: #bf8970;
}

/* Stil für den Text */
p {
  width: 50%;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.5;

}
.home{
  background-color: #D2B773;
}


</style>
