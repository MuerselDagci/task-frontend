<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="card" v-for="task in tasks" :key="task.id">
      <div class="card-body">
        <h5 class="card-title">{{task.status}}</h5>
        <p class="card-text">{{task.beschreibung}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ task.titel }}</small>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ task.wiederholung }}</small>
      </div>
      <div class="card-footer">
        <small class="text-muted">{{ task.mitarbeiter }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCard'
}
</script>

<style scoped>

</style>
