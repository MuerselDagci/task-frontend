<template><h1>
  <img src="../assets/aufgabenicon.jpg" height="35" width="35" alt="Icon"/>
  Ihre Aufgaben für Heute
</h1>
<div class="container-fluid">
  <TodayTasks :tasks="this.tasks"></TodayTasks>
</div>
</template>

<script>
import TodayTasks from '@/components/TodayTasks'
export default {
  name: 'Tasks',
  components: {
    TodayTasks
  },
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
</style>
