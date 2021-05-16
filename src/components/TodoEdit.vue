<template>
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
    export default {
        name: 'TodoEdit',
        data() {
            return {
                errorMessage: '',
                todoName: this.nameAfterEdited,
            }
        },
        props: {
            todo: Object,
            idEdited: String,
            nameAfterEdited: String,
        },
        methods: {
            handleUpdateSubmit(event) {
                event.preventDefault();
                console.log(this.idEdited, this.todoName);
            }
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