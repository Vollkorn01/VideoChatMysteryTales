<template>
  <div>
    <div>Waiting Room</div>
    <div>Code:</div>
    <div>{{sessionCode}}</div>
    <div>Send this code to your friends, so they can join!</div>
      <v-btn @click="testGame">Refresh Player List</v-btn>

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
      sessions: null,
    };
  },
  firestore: {
    games: db.collection("games"),
    sessions: db.collection("sessions"),
  },
  computed: {
    ...mapGetters({
      selectedGame: "selectedGame",
      user: "user",
      sessionCode: "sessionCode"
    }),
  },
  methods: {
      testGame() {
          console.log('sessions', this.sessions)
          console.log('sessionCode:', this.sessionCode)
      }
  },
  created() {
      this.code = this.sessionCode;
  },
};
</script>

<style>
</style>
