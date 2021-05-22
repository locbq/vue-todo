<template>
    <h1>Edit Todo</h1>
    <div class="edit-card">
        <form @submit="handleUpdateSubmit">
            <input
                type="text"
                placeholder="Edit todo"
                v-model="todoName"
            />
            <input type="submit" value="Update" />
        </form>
        <p v-show="errorMessage !== ''">
            {{errorMessage}}
        </p>
    </div>
</template>

<script>
    import router from "../router";
    export default {
        name: 'TodoEdit',
        data() {
            return {
                errorMessage: '',
                todoEdit: Object,
                todoName: '',
                index: '',
            }
        },
        props: {
            todos: Array,
        },
        created: function () {
            this.index = this.todos.findIndex((obj => obj.id === this.$route.params.todoId));
            this.todoName = this.todos[this.index].text;
        },
        methods: {
            handleUpdateSubmit(event) {
                event.preventDefault();
                if (this.todoName === '') {
                    this.errorMessage = 'Please enter a todo';
                } else {
                    this.errorMessage = '';
                    this.$emit('update-todo', this.index, this.todoName);
                    router.push('/');
                }
            }
        },
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
    }

    p {
        color: red;
    }
</style>