<template>
  <Form @on-submit="addTodo"/>
  <div 
    v-for="todo in todos" 
    :key="todo.id"
  >
    <TodoItem 
      :todo="todo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
  </div>
</template>

<script>
  import Form from './Form';
  import TodoItem from './TodoItem';

  export default {
    name: 'TodoList',
    components: {
      Form,
      TodoItem,
    },
    data() {
      return {
        todos: []
      }
    },
    methods: {
      addTodo(todo) {
        this.todos = [...this.todos, todo]
      },
      deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
      },
      updateTodo(id, text) {
        let index = this.todos.findIndex((obj => obj.id === id));
        this.todos[index].text = text;
      }
    }
  }
</script>

<style scoped>

</style>