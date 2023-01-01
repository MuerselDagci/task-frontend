<template>
  <form>
    <label for="search">Suche:</label><br>
    <input type="text" id="search" name="search"><br>
  </form>
  <div id="results"></div>
</template>

<script>
export default {
  name: "TasksSearch",
  data(){
    return {
      titel:''
    }
  },
  methods:{
    searchTasks() {
      // Eingabewert aus der Suchleiste auslesen
      const searchValue = document.getElementById('search').value;

      // Ergebnis-Div leeren
      document.getElementById('results').innerHTML = '';

      // Durch das Array iterieren und nach Übereinstimmungen suchen
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].includes(searchValue)) {
          // Wenn eine Übereinstimmung gefunden wurde, wird der Titel angezeigt
          const p = document.createElement('p');
          p.innerText = tasks[i];
          document.getElementById('results').appendChild(p);
        }
      }

    // Suchleiste auf Eingabe reagieren lassen
    document.getElementById('search').addEventListener('input',searchTasks);
  }
},}
</script>

<style scoped>

</style>
