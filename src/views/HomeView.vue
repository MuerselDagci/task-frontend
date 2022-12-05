<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Willkommen bei Ihrer myToDo App - klicken sie auf die Schaltfläche Tasks um ihre Aufgaben anzusehen oder welche zu erstellen."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
