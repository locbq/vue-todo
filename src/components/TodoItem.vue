<template>
  <div class="mt-20">
    <div class="card">
      <h3 class="text">{{ todo.text }}</h3>
      <router-link :to="{ name: 'Edit Todo', params: { todoId: todo.id } }" class="btn btn-info right-side">
        Edit Todo
      </router-link>
      <button class="delete-btn" @click="handleClick">x</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    methods: {
      handleClick() {
        this.$emit('delete-todo', this.todo.id);
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
    width: 75%;
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

  .right-side {
    text-align: right;
    width: 25%;
    margin-right: 10px;
  }
</style>