<template>
  <div>
    <v-text-field v-model="codeTextField" label="Code"></v-text-field>
    <v-btn @click="joinSession()">Join Game</v-btn>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { db } from "../firebase";
import { mapGetters } from "vuex";
import store from "../store";

export default {
  name: "JoinGame",
  components: {},
  data() {
    return {
      codeTextField: "",
      label: "",
      code: ""
    };
  },
  computed: {
    ...mapGetters({
      selectedGame: "selectedGame",
      user: "user",
      sessionCode: "sessionCode"
    })
  },
  methods: {
    joinSession() {
      // eslint-disable-next-line no-unused-vars
      let joinSession = db
        .collection("sessions")
        .doc(this.codeTextField)
        .get()
        .then(snapshot => {
          const session = snapshot.data();
          if (!session) {
            alert("Game Not Found");
          } else {
            this.setPlayer(session);
            this.$router.push('waiting_room')
            //store session code in store if successfully joined
            store.dispatch("setSessionCode", session.code);
          }
        });
    },
    setPlayer(session) {
      session.playerIds.push(this.user.data.email);
      // eslint-disable-next-line no-unused-vars
      let createSession = db
        .collection("sessions")
        .doc(this.codeTextField)
        .set(session);
    }
  },
  created() {}
};
</script>

<style>
</style>
