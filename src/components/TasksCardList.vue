<template >
  <button class="btn bronze-button sticky-button" data-bs-toggle="offcanvas" data-bs-target="#tasks-create-offcanvas" aria-controls="#tasks-create-offcanvas">
    Task anlegen
    <i class="bi bi-tasks-plus-fill"></i>
  </button>

  <div class="search-container">
  <input v-model="localSearchTerm" type="text" placeholder="Suchen..." class="search-input">
  </div>
  <table class="table mb-0">
    <thead>
    <tr>
      <th scope="col">Mitarbeiter</th>
      <th scope="col">Aufgabe</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Fällig am/bis</th>
      <th scope="col">Wiederholung</th>
      <th scope="col">Status</th>

    </tr>
    </thead>
    <tbody>

    <tr class="fw-normal" v-for="task in filteredTasks" :key="task.id" :id="task.id">
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
        <h6 class="mb-0"><span class="badge bg-success">{{task.titel}}</span></h6>
      </td>
      <td class="align-middle">
        <a @click="deleteTask(task)" data-mdb-toggle="tooltip" title="Delete"><i
          class="btn btn- btn-sm rounded-0"><img src="../assets/delete.png" height="20" width="20"/></i></a>
      </td>
      <td class="align-middle">
        <a @click="finishTasks(task);updateTaskStatus(task);showTaskCompletedWindow()" data-mdb-toggle="tooltip" title="Erledigt">
          <i class="btn btn-outline-"><img src="../assets/check-mark-1292787__340.jpg" height="20" width="20"/></i>
        </a>
      </td>
    </tr>
    </tbody>

  </table>
  <div>
    {{ getEmptyMessage() }}
  </div>
</template>
<script>

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
    SearchTerm: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      localSearchTerm: '',
      tasksCopy: this.tasks
    }
  },
  computed: {
    filteredTasks () {
      return this.tasks.filter(task => task.status.includes(this.localSearchTerm))
    }
  },
  methods: {
    deleteTask (task) {
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
    finishTasks (task) {
      const element = document.querySelector(`tr.fw-normal[id='${task.id}']`)
      if (element) {
        element.style.textDecoration = 'line-through'
      }
    },
    updateTaskStatus (task) {
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        id: task.id,
        status: 'abgeschlossen',
        titel: task.status,
        wiederholung: task.wiederholung,
        duedate: task.duedate,
        beschreibung: task.beschreibung,
        mitarbeiter: task.mitarbeiter
      })

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: payload,
        redirect: 'follow'
      }
      const m = `http://localhost:8080/api/v1/tasksss/${task.id}`
      fetch(m, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    },
    getEmptyMessage () {
      return this.filteredTasks.length > 0 ? '' : 'Keine Aufgaben'
    },

    getAvatar (task) {
      if (task.mitarbeiter === 'MA_1') {
        return require('../assets/ma1.jpg')
      } else if (task.mitarbeiter === 'MA_2') {
        return require('../assets/ma2.jpg')
      } else if (task.mitarbeiter === 'MA_3') {
        return require('../assets/ma2.jpg')
      } else if (task.mitarbeiter === 'Geschaeftsfuehrer') {
        return require('../assets/elon.jpg')
      } else if (task.mitarbeiter === 'Buchhaltung') {
        return require('../assets/buchhaltung.jpeg')
      } else if (task.mitarbeiter === 'IT_Abteilung') {
        return require('../assets/it.jpg')
      }
    },
    showTaskCompletedWindow () {
      const div = document.createElement('div')
      div.innerHTML = 'Ihre Aufgabe wurde erledigt'
      div.style.textAlign = 'center'
      div.style.color = '#CD7F32'
      document.body.appendChild(div)

      setTimeout(function () {
        div.style.display = 'none'
      }, 5000)
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
.bronze-button{
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
  background-color: #cd7f32;
  color: white;
  border-radius: 0;
}

</style>
