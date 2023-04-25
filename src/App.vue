<template>
  <v-app>
    <v-app-bar
    app
    color="blue"
    dark
    >
    <div class="d-flex align-center">
    <h2>VueFire Todo</h2>
    </div>
  </v-app-bar>
  <v-main>
    <todo-list></todo-list>
  </v-main>
  </v-app>
  
</template>

<script>
import TodoList from './components/TodoList.vue'



export default {
  data(){
    return {
      
    }
  },
  name: 'App',

  components: {
    TodoList
    
  },


   
}
</script>
