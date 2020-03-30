<template>
  <div>
    <h1>Waiting Room</h1>
    <div>Code:</div>
    <div>{{sessionCode}}</div>
    <div>Send this code to your friends, so they can join!</div>
    <p></p>
    <h2>The Setting</h2>
    <p>The Phelps Case 2040 is set in the year 2040 in the Phelps Video Chat Group. The Phelps Chat Group was set up by the programmer Seth Phelps who has been mysteriously killed yesterday afternoon. Seth Phelps hacked the bank account of a big hedge fund, and there are multiple relatives who may benefit from his last will and testament distributing his fortune. Phelps’ lawyer has asked the family to gather together in the Phelps Chat Group, the day after the murder, to hear the reading of the will. The Police chat Bots are also present – because the Phelps family are the prime suspects in the murder case. Everyone listens attentively, as the Lawyer reads out the will. The main clause is very simple, as Phelps must have had a premonition or warning of his dreadful end. The whole of Phelps splendid fortune is left to whoever identifies his murderer!</p>
    <h2></h2>
    <div></div>
    <div></div>
    <div>
      <v-btn @click="refreshPlayerList">Refresh Player List</v-btn>
    </div>
    <p>
        </p>
    <div>
      <v-btn @click="routeToDashboard">Start Game</v-btn>
    </div>
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
      playersInSession: []
    };
  },
  firestore: {
    games: db.collection("games"),
    sessions: db.collection("sessions")
  },
  computed: {
    ...mapGetters({
      selectedGame: "selectedGame",
      user: "user",
      sessionCode: "sessionCode"
    })
  },
  methods: {
    refreshPlayerList() {
      console.log("session:", this.sessions);
      console.log("sessionCode:", this.sessionCode);
      const result = this.sessions.filter(obj => {
        return obj.id === this.sessionCode;
      });
      this.playerList = result.playerIds;
    },
    routeToDashboard() {
      this.$router.push("game_dashboard");
    }
  },
  created() {
    this.code = this.sessionCode;
  }
};
</script>

<style>
</style>
