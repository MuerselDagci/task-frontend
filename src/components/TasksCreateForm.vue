<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="tasks-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Task</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" novalidate>
        <div class="mb-3">
          <label for="titel" class="form-label">Titel</label>
          <input type="text" class="form-control" id="titel" v-model="titel" required>
          <div class="invalid-feedback">
            Bitte geben Sie einen Titel an.
          </div>
        </div>
        <div class="mb-3">
          <label for="beschreibung" class="form-label">Beschreibung</label>
          <input type="text" class="form-control" id="beschreibung" v-model="beschreibung" required>
          <div class="invalid-feedback">
            Bitte beschreiben Sie die Aufgabe.
          </div>
        </div>
        <div class="mb-3">
          <label for="wiederholung" class="form-label">Wiederholung</label>
          <select id="wiederholung" class="form-select" v-model="wiederholung" required>
            <option value="" selected disabled>Choose...</option>
            <option value="WOCHENTLICH">WOCHENTLICH</option>
            <option value="TAEGLICH">TAEGLICH</option>
            <option value="MONATLICH">MONATLICH</option>
            <option value="JAEHRLICH">JAEHRLICH</option>
            <option value="UNKNOWN">UNKNOWN</option>
          </select>
          <div class="invalid-feedback">
            Bitte wählen Sie eins aus.
          </div>
        </div>

        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <input type="text" class="form-control" id="status" v-model="status" >
        </div>

        <div class="mb-3">
          <label for="duedate" class="form-label">Duedate</label>
          <input type="text" class="form-control" id="duedate" v-model="duedate" >
        </div>

        <div class="mb-3">
          <label for="mitarbeiter" class="form-label">Mitarbeiter</label>
          <select id="mitarbeiter" class="form-select" v-model="mitarbeiter" >
            <option value="" selected disabled>Choose...</option>
            <option value="MA_1">MA_1</option>
            <option value="MA_2">MA_2</option>
            <option value="MA_3">MA_3</option>
            <option value="MA_4">MA_1</option>
            <option value="Geschaeftsfuehrer">Geschaeftsfuehrer</option>
            <option value="Buchhaltung">Buchhaltung</option>
            <option value="IT_Abteilung">IT_Abteilung</option>
          </select>
          <div class="invalid-feedback">
            Bitte wählen Sie eins aus.
          </div>
        </div>

        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createTask">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TasksCreateForm',
  data () {
    return {
      titel: '',
      beschreibung: '',
      status: '',
      wiederholung: '',
      duedate: '',
      mitarbeiter: ''
    }
  },
  methods: {
    createTask () {
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/tasksss'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const payload = JSON.stringify({
          titel: this.titel,
          beschreibung: this.beschreibung,
          status: this.status,
          wiederholung: this.wiederholung,
          duedate: this.duedate,
          mitarbeiter: this.mitarbeiter
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: payload,
          redirect: 'follow'
        }
        fetch(endpoint, requestOptions)
          .catch(error => console.log('error', error))
      }
    },
    validate () {
      let valid = true
      const forms = document.querySelectorAll('.needs-validation')

      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            valid = false
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
      return valid
    }
  }
}
</script>

<style scoped>

</style>
