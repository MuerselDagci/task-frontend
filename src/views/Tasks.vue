<template>
  <h1>
    <img src="../assets/aufgabenicon.jpg" height="35" width="35" alt="Icon"/>
    Ihre Tasks
  </h1>
  <div class="container-fluid">
    <tasks-card-list :tasks="this.tasks"></tasks-card-list>
  </div>
  <tasks-create-form :tasks="this.tasks"></tasks-create-form>

</template>
<script>
import TasksCreateForm from '@/components/TasksCreateForm'
import TasksCardList from '@/components/TasksCardList'

export default {
  name: 'Tasks',
  components: { TasksCardList, TasksCreateForm },
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
h1 {
  text-align: left;
  margin-left: 30px;
  margin-top: 20px;
}
body {
  background-color: #cd7f32;
}
</style>
