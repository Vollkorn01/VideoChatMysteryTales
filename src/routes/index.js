import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Home from '../components/Home'
import InitGame from '../components/InitGame'
import JoinGame from '../components/JoinGame'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/init_gane',
        name: 'InitGame',
        component: InitGame,
    },
    {
        path: '/join_game',
        name: 'JoinGame',
        component: JoinGame,
    }
    
]
});

export default router