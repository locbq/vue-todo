<template>
  <div class="container">
    <div class="col-12">
        <div id="nav">
          <router-link :to="{ name: 'Todo List' }" class="btn btn-info">
            Home
          </router-link>
           |
          <router-link :to="{ name: 'Add Todo' }" class="btn btn-info">
            Add Todo
          </router-link>
        </div>
    </div>
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
export default {
  name: 'App',
  data() {
    return {
      todos: [],
    }
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
