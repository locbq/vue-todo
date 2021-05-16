<template>
  <div>
    <div class="card" v-show="idEdited !== todo.id">
      <h3 @click="editTodo" class="text">{{todo.text}}</h3>
      <button class="delete-btn" @click="handleClick">x</button>
    </div>
    <TodoEdit v-show="idEdited"
        :todo="todo"
        :idEdited="idEdited"
        :nameAfterEdited="nameAfterEdited"
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
        idEdited: "",
        nameAfterEdited: "",
      }
    },
    props: {
      todo: Object
    },
    methods: {
      handleClick() {
        this.$emit('delete-todo', this.todo.id);
      },
      editTodo() {
        this.idEdited = this.todo.id;
        this.nameAfterEdited = this.todo.text;
      },
      updateTodo(id, text) {
        this.$emit('update-todo', id, text);
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

</style>