import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Home from '../components/Home'
import InitGame from '../components/InitGame'
import JoinGame from '../components/JoinGame'
import WaitingRoom from '../components/WaitingRoom'
import GameMap from '../components/GameMap'
import GameCharacters from '../components/GameCharacters'
import GameDashboard from '../components/GameDashboard'
import YourRole from '../components/YourRole'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path: '/home',
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
        path: '/init_game',
        name: 'InitGame',
        component: InitGame,
    },
    {
        path: '/waiting_room',
        name: 'WaitingRoom',
        component: WaitingRoom,
    },
    {
        path: '/join_game',
        name: 'JoinGame',
        component: JoinGame,
    },
    {
        path: '/game_map',
        name: 'GameMap',
        component: GameMap,
    },
    {
        path: '/game_characters',
        name: 'GameCharacter',
        component: GameCharacters,
    },
    {
        path: '/game_dashboard',
        name: 'GameDashboard',
        component: GameDashboard,
    },
    {
        path: '/your_role',
        name: 'YourRole',
        component: YourRole,
    },
]
});

export default router