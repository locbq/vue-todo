<template>
    <div class="col-12">
        <div id="nav">
            <router-link :to="{ name: 'Todo List' }" class="btn btn-info">
                Home
            </router-link>
            |
            <router-link :to="{ name: 'Add Todo' }" class="btn btn-info">
                Add Todo
            </router-link>
        </div>
    </div>
</template>