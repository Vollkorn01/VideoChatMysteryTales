<template>
    <div class="container">
        <div class="init-game">
            <h1>Pick a game</h1>
            <v-row align="center">
                <v-col class="d-flex" cols="12" sm="6">
                   <v-select
                    :items="games"
                     @input="setGame"
                  label="Standard"
                    ></v-select>
        </v-col>
    </v-row>
    <v-row align ="center">
        <button
        @click="startGame">
            Start Game
        </button>
    </v-row>
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
                games: [],
                selectedGame: '',
            }
        },
        name: 'InitGame',
        firestore: {
            games: db.collection('games')
        },
        methods: {
      /**
       * sets the game the user has selected from drop down
       */
      setGame(val) {
          this.selectedGame = val
      },

      startGame() {
          console.log('route here')
      }
  }
    };
</script>

  
<script>
export default {
  name: 'InitGame',
  components: {
  },
  data: function () {
      return {
          games: ['Test Name of Game', 'Test Name of Game2'],
          selectedGame: '',
      }
  },
  
};
</script>

<style>
</style>
