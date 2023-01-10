<template>
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
    </tr>
    <button class="dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Sortieren nach.
    </button>
    <ul class="dropdown-menu">
      <li><button @click="sortTasksByTitel" class="dropdown-item" type="button">Titel</button></li>
      <li><button @click="sortTasksByWiederholung" class="dropdown-item" type="button">Wiederholung</button></li>
      <li><button @click="sortTasksByDueDate" class="dropdown-item" type="button">Fällig am/bis</button></li>
    </ul>
    </tbody>

  </table>
  <div>
    {{ getEmptyMessage() }}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'CompletedTaskCardList',
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
      return this.tasks.filter(task => task.titel.includes('abgeschlossen') && task.status.includes(this.localSearchTerm))
    }
  },
  methods: {
    sortTasksByWiederholung () {
      this.tasksCopy.sort((a, b) => {
        const repetitionA = a.wiederholung.toLowerCase();
        const repetitionB = b.wiederholung.toLowerCase();
        if (repetitionA < repetitionB) {
          return -1;
        }
        if (repetitionA > repetitionB) {
          return 1;
        }
        return 0;
      });
    },
    sortTasksByTitel () {
      this.tasksCopy.sort((a, b) => {
        const titelA = a.status.toLowerCase();
        const titelB = b.status.toLowerCase();
        if (titelA < titelB) {
          return -1;
        }
        if (titelA > titelB) {
          return 1;
        }
        return 0;
      });
    },
    sortTasksByDueDate () {
      this.tasksCopy.sort((a, b) => {
        const dateA = a.duedate.split('.')
        const dateB = b.duedate.split('.')
        if (dateA[2] !== dateB[2]) {
          return dateA[2] - dateB[2]
        } else if (dateA[1] !== dateB[1]) {
          return dateA[1] - dateB[1]
        } else {
          return dateA[0] - dateB[0]
        }
      })
    },
    deleteTask (task) {
      axios.delete(`http://localhost:8080/api/v1/tasksss/${task.id}`)
        .then(response => {
          // Entfernt die Aufgabe aus der `tasks`-Liste
          const index = this.tasks.indexOf(task)
          if (index !== -1) {
            this.tasksCopy.splice(index, 1)
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
.dropdown{
  background-color: #cd7f32;
  color: white;
  padding: 10px 15px;
  padding: 5px 5px;
  border-radius: 30px;border-radius: 0;
  bottom: -20px;

}

</style>
