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
import store from "../store";
import { mapGetters } from "vuex";

//import { firestore } from 'firebase';

export default {
  components: {},
  data() {
    return {
      games: [],
    };
  },
  name: "InitGame",
  firestore: {
    games: db.collection("games")
  },
  computed: {
    ...mapGetters({
      selectedGame: "selectedGame"
    })
  },
  methods: {
    /**
     * stores the game id from the game the user has selected from drop down
     */
    setGame(val) {
      store.dispatch("setSelectedGame", val);
      console.log("selectedGame", this.selectedGame);
    },

    /**
     * Fetch games collection from firebase
     * and create an array containing names of the games
     */
    fetchGames() {
      let firestoreGames = [
        { text: "", value: "" },
        { text: "", value: "" }
      ];
      db.collection("games")
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data());
          console.log(documents);
          documents.forEach((gameItem, key) => {
            console.log(gameItem);
            var name = gameItem.name;
            var nr_of_players = gameItem.nr_of_players;
            var gameString = `${name} (${nr_of_players} players)`;
            const id = gameItem.id;

            firestoreGames[key].text = gameString;
            firestoreGames[key].value = id;
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
