<template>
  <div>
    <div>Waiting Room</div>
    <div>Code:</div>
    <div>{{displayCode}}</div>
    <div>Send this code to your friends, so they can join!</div>
  </div>
</template>
<script>
import { db } from "../firebase";
import { mapGetters } from "vuex";

export default {
  name: "WaitingRoom",
  components: {},
  data() {
    return {
      games: [],
      gameOne: {},
      code: "bla",
    };
  },
  firestore: {
    games: db.collection("games"),
    gameOne: db.collection("games").doc("8eouFSKemqC5niZiGu2U")
  },
  computed: {
    ...mapGetters({
      selectedGame: "selectedGame",
      user: "user",
      sessionCode: "sessionCode"
    }),
    displayCode() {
        return this.code
    }
  },
  methods: {

  },
  created() {
      this.code = this.sessionCode;
  }
};
</script>

<style>
</style>
