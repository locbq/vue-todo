<template>
  <div class="container">
    <Nav />
    <div class="content">
      <router-view
        :todos="todos"
        @add-todo="addTodo"
        @delete-todo="deleteTodo"
        @update-todo="updateTodo"
        @search-todo="searchTodo" />
    </div>
  </div>
</template>

<script>
  import Nav from './components/Nav'

  export default {
    name: 'App',
    data() {
      return {
        todos: [],
      }
    },
    components: {
      Nav
    },
    methods: {
      addTodo(todo) {
        this.todos = [...this.todos, todo]
      },
      deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
      },
      updateTodo(index, text) {
        this.todos[index].text = text;
      },
      searchTodo(val) {
        this.todos = this.todos.map(obj => {
          obj.isShow = obj.text.includes(val);
          return obj;
        });
      }
    }
  }
</script>

<style>
  .container {
    width: 40%;
    margin: 0 auto;
  }
</style>
