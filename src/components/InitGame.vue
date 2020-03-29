<template>
  <div class="container">
    <div class="init-game">
      <h1>Pick a game</h1>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="games" @input="setGame" label="Standard"></v-select>
        </v-col>
      </v-row>
      <v-row align="center">
        <router-link v-show="selectedGame" to="/waiting_room">Start Game</router-link>
      </v-row>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      games: [],
      selectedGame: ""
    };
  },
  name: "InitGame",
  methods: {
    /**
     * sets the game the user has selected from drop down
     */
    setGame(val) {
      this.selectedGame = val;
    },

    /**
     * Fetch games collection from firebase
     * and create an array containing names of the games
     */
    fetchGames() {
      let firestoreGames = [];
      db.collection("games")
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data());
          documents.forEach(gameItem => {
            var name = gameItem.name;
            var nr_of_players = gameItem.nr_of_players;
            var gameString = `${name} (${nr_of_players} players)`;
            firestoreGames.push(gameString);
          });
        });
      this.games = firestoreGames;
    }
  },
  created() {
    this.fetchGames();
  }
};
</script>

<style></style>
