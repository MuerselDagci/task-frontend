<template>
  <h1>Tasks</h1>

  <div class="container-fluid">
    <tasks-card-list :tasks="this.tasks"></tasks-card-list>
  </div>
  <tasks-create-form :persons="this.persons"></tasks-create-form>
  <label for="search">Suche:</label><br>
  <input type="text" id="search" name="search"><br>
  <input type="submit" value="Suchen">


</template>
<script>
import TasksCreateForm from '@/components/TasksCreateForm'
import TasksCardList from '@/components/TasksCardList'
import TasksSearch from "@/components/TasksSearch";
export default {
  name: 'Tasks',
  components: {TasksSearch, TasksCardList, TasksCreateForm },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasksss'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(task => {
        this.tasks.push(task)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>


</style>
