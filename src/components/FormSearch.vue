<template>
    <label>Search: </label>
    <label>
        <input
            type="text"
            placeholder="Search todo"
            v-model="search"
            class="text-align-center"
        />
    </label>
</template>

<script>
    export default {
        name: 'FormSearch',
        data() {
            return {
                'search': '',
            }
        },
        watch: {
            search: function(val) {
                this.$emit('search-todo', val);
            }
        }
    }
</script>

<style scoped>
    .text-align-center {
        height: 40px;
        margin-bottom: 10px;
        width: 50%;
    }
</style>