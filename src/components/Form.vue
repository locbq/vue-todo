<template>
  <form @submit="handleSubmit">
    <input 
      id="text" 
      type="text" 
      name="text" 
      placeholder="Enter todo"
      v-model="text"
      :disabled="isEdited"
    />
    <input 
      type="submit" 
      value="Add"
      :disabled="isEdited"
      :class="{ 'cursor-no-drop': isEdited }"
    />
  </form>
  <p 
    v-show="errorMessage !== ''"
  >
    {{errorMessage}}
  </p>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';

  export default {
    name: 'Form',
    props: {
        isEdited: Boolean,
    },
    data() {
      return {
        text: '',
        errorMessage: '',
      }
    },
    methods: {
      handleSubmit(event) {
        event.preventDefault();
        if (this.text === '') {
          this.errorMessage = 'Please enter a todo';
        } else {
          this.errorMessage = '';
          const newTodo = {
            id: uuidv4(),
            text: this.text,
            isShow: true,
          }
          this.$emit('on-submit', newTodo);
          this.text = '';
        }
      },
    }
  }
</script>

<style scoped>
  form {
    width: 100%;
    display: flex;
  }

  form input[type="text"] {
    width: 100%;
    height: 40px;
    margin-right: 20px;
  }
  
  form input[type="submit"] {
    background: green;
    color: white;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    width: 10%;
  }

  p {
    color: red;
  }

  .cursor-no-drop {
    cursor: no-drop !important;
  }
</style>