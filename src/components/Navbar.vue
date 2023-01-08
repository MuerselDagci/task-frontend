<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">myToDo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/" prefetch>Home</router-link>
          <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="tasksDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tasks
            </a>
            <div class="dropdown-menu" aria-labelledby="tasksDropdown">
              <router-link class="dropdown-item" to=/tasks prefetch>Alle Tasks</router-link>
              <router-link class="dropdown-item" to=/about prefetch>Abgeschlossene Aufgaben</router-link>
              <router-link class="dropdown-item" to=/today prefetch>Ihre Aufgaben für heute</router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar{
  background-color:#bf8970;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 50px;
}
</style>
