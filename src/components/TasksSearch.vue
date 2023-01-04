<template>
  <div class="search-container">
    <form @submit.prevent="handleSearch">
      <input type="text" class="form-control" v-model="searchTerm" placeholder="Suche nach Titel...">
      <button type="submit" class="btn btn-primary">Suchen</button>
    </form>
  </div>

</template>

<script>
export default {
  name: 'TasksSearch',
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    handleSearch () {
      // Senden Sie eine HTTP-Anforderung an den Backend-Endpunkt, um die Aufgaben anhand des Suchbegriffs zu suchen
      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/tasksss?titel=${this.searchTerm}`

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      fetch(endpoint, { headers })
        .then(response => response.json())
        .then(tasks => {
          // Finde alle Objekte im Array, die einen Titel enthalten, der den Suchbegriff enthält
          const tasksWithMatchingTitles = tasks.filter(task => task.status.includes(this.searchTerm))
          console.log(tasksWithMatchingTitles)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}

</script>

<style scoped>

</style>
