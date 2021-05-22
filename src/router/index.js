import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList'
import TodoAdd from '../components/Form'
import TodoEdit from '../components/TodoEdit'

const routes = [
    {
        path: '/',
        name: 'Todo List',
        component: TodoList
    },
    {
        path: '/addtodo',
        name: 'Add Todo',
        component: TodoAdd
    },
    {
        path: '/edittodo/:todoId',
        name: 'Edit Todo',
        component: TodoEdit,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
