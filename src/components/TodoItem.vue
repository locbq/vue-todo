<template>
  <div class="mt-20">
    <div class="card" v-show="idEditing !== todo.id">
      <h3 @click="editTodo" class="text">{{todo.text}}</h3>
      <button class="delete-btn" @click="handleClick">x</button>
    </div>
    <TodoEdit v-if="idEditing"
        :todo="todo"
        :idEditing="idEditing"
        @update-todo="updateTodo"
    />
  </div>
</template>

<script>
  import TodoEdit from "./TodoEdit";

  export default {
    name: 'TodoItem',
    components: {
      TodoEdit,
    },
    data() {
      return {
        idEditing: "",
      }
    },
    props: {
      todo: Object,
    },
    methods: {
      handleClick() {
        this.$emit('delete-todo', this.todo.id);
      },
      editTodo() {
        this.idEditing = this.todo.id;
        this.$emit('disable-form-add', true);
      },
      updateTodo(id, text) {
        this.$emit('update-todo', id, text);
        this.idEditing = "";
      },
    }
  }
</script>

<style scoped>
  .card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    background: #d6d6d6;
  }

  .card .text {
    color: #333;
    padding-left: 15px;
  }

  .card .delete-btn {
    background: red;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-color: red;
    cursor: pointer;
    font-weight: bold;
  }

  .mt-20 {
    margin-top: 20px;
  }
</style>