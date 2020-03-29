<template>
  <div class="container">
    <div class="init-game">
      <h1>Pick a game</h1>
      <li class="collection-item" v-for="game in games" :key="game.id">
        {{ game.name }}, ({{ game.nr_of_players }} players)
      </li>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      games: [],
      game: {
        id: "",
        name: "",
        nr_of_players: ""
      }
    };
  },
  name: "InitGame",
  //   props: {
  //     msg: String
  //   },
  methods: {
    getGames: function() {
      var gamesRef = firebase.firestore().collection("games");
      console.log(gamesRef);

      // TODO change on snapshot to simple get call
      gamesRef.onSnapshot(snap => {
        this.games = [];
        snap.forEach(doc => {
          console.log(doc);
          var game = doc.data();
          game.id = doc.id;
          game.name = doc.name;
          game.nr_of_players = doc.nr_of_players;
          this.games.push(game);
        });
      });
    }
  },
  beforeMount() {
    this.getGames();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
