<template xmlns:margin-right="http://www.w3.org/1999/xhtml">
  <div class="search-container">
  <input v-model="searchTerm" type="text" placeholder="Suchen..." class="search-input">
  </div>
  <table class="table mb-0">
    <thead>
    <tr>
      <th scope="col">Mitarbeiter</th>
      <th scope="col">Aufgabe</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Duedate</th>
      <th scope="col">Wiederholung</th>
    </tr>
    </thead>
    <tbody>

    <tr class="fw-normal" v-for="task in filteredTasks" :key="task.id">
      <th>
        <img :src="getAvatar(task)" height="850" width="614"
             class="shadow-1-strong rounded-circle" alt="avatar 1"
             style="width: 55px; height: auto;">
        <span class="ms-2">{{task.mitarbeiter}}</span>
      </th>
      <td class="align-middle" >
        <span>{{task.status}}</span>
      </td>
      <td style="" class="align-middle">
        <span :id="task.id">{{task.beschreibung}}</span>
      </td>
      <td class="align-middle">
        <h6 class="mb-0"><span class="badge bg-danger">{{task.duedate}}</span></h6>
      </td>
      <td class="align-middle">
        <h6 class="mb-0"><span class="badge bg-primary">{{task.wiederholung}}</span></h6>
      </td>
      <td class="align-middle">
        <a @click="deleteTask(task)" data-mdb-toggle="tooltip" title="Delete"><i
          class="btn btn- btn-sm rounded-0"><img src="../assets/delete.png" height="20" width="20"/></i></a>
      </td>
      <td class="align-middle">
        <a @click="finishTasks" data-mdb-toggle="tooltip" title="Erledigt"><i
          class="btn btn-outline-"><img src="../assets/check-mark-1292787__340.jpg" height="20" width="20"/></i></a>
      </td>
    </tr>
    </tbody>

  </table>
  <div>
    {{ getEmptyMessage() }}
  </div>
</template>
<script>
import TaskCard from "@/components/TaskCard";
import axios from 'axios'
export default {

  name: 'TasksCardList',
  components: {

  },
  props: {
    tasks: {
      type: Array,
      required: true
    },
    searchTerm: {
      type: String,
      required: true
    }},
  data(){
    return{
      searchTerm: ''
    }
  },
    computed: {
      filteredTasks() {
        return this.tasks.filter(task => task.status.includes(this.searchTerm))
      }
    },
  methods: {
    deleteTask(task) {
      axios.delete(`http://localhost:8080/api/v1/tasksss/${task.id}`)
        .then(response => {
          // Entfernt die Aufgabe aus der `tasks`-Liste
          const index = this.tasks.indexOf(task)
          if (index !== -1) {
            this.tasks.splice(index, 1)
          }
        })
        .catch(error => {
          console.error(error)
        })
    },
    finishTasks(task) {
      const columnElement = document.getElementById(task.id);
      if (columnElement && columnElement.style) {
        columnElement.style.textDecoration = "line-through";
      }
    },
    getEmptyMessage() {
      return this.filteredTasks.length > 0 ? '' : 'Keine Aufgaben';
    },

    getAvatar (task) {
      if (task.mitarbeiter === 'MA_1') {
        return require('../assets/5x7.jpg')
      } else if (task.mitarbeiter === 'MA_2') {
        return require('../assets/5x7.jpg')
      }
    }
    }
  }

</script>

<style scoped>
.search-input {
  padding: 0.5rem;
  border: 2px solid #333;
  border-radius: 0.25rem;
  color: #bf8970;
  float:right;
  margin-right: 20px;
  margin-top: -50px;
}
.table
{
  color:#bf8970;
  margin-bottom: 50px;
}

</style>
