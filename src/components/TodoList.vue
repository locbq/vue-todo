<template>
  <h1>Todo List</h1>
  <FormSearch @search-todo="searchTodo" />
  <div 
    v-for="todo in todos" 
    :key="todo.id"
  >
    <TodoItem v-if="todo.isShow"
      :todo="todo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem';
  import FormSearch from './FormSearch';

  export default {
    name: 'TodoList',
    components: {
      FormSearch,
      TodoItem,
    },
    props: {
      todos: Array
    },
    methods: {
      searchTodo(val) {
        this.$emit('search-todo', val);
      },
      deleteTodo(id) {
        this.$emit('delete-todo', id);
      }
    }
  }
</script>