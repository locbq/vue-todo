<template>
    <FormSearch @search-todo="searchTodo" :isEdited="isEdited" />
    <Form @on-submit="addTodo" :isEdited="isEdited"/>
  <div 
    v-for="todo in todos" 
    :key="todo.id"
  >
    <TodoItem v-if="todo.isShow"
      :todo="todo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @disable-form-add="disableFormAdd"
    />
  </div>
</template>

<script>
  import Form from './Form';
  import TodoItem from './TodoItem';
  import FormSearch from './FormSearch';

  export default {
    name: 'TodoList',
    components: {
      FormSearch,
      Form,
      TodoItem,
    },
    data() {
      return {
        todos: [],
        isEdited: false,
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
        this.isEdited = false;
      },
      disableFormAdd() {
        this.isEdited = true;
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