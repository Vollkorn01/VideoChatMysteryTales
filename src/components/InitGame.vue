<template>
    <div class="container">
        <div class="init-game">
            <h1>Pick a game</h1>
            <li class="collection-item" v-for="(game, idx) in games" :key="idx">
                {{ game.name }}, ({{ game.nr_of_players }} players)
            </li>
        </div>
    </div>
</template>

<script>
    import {db} from '../firebase'

    export default {
        data() {
            return {
                games: []
            }
        },
        firestore: {
            games: db.collection('games')
        },
        methods: {},
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
