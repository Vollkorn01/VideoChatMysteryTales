<template>
  <div>
    <div>Waiting Room</div>
    <div>Code:</div>
    <div>{{code}}</div>
    <div>Send this code to your friends, so they can join!</div>
  </div>
</template>
<script>
import { db } from "../firebase";

export default {
  name: "WaitingRoom",
  components: {},
  data() {
    return {
      games: [],
      code: "",
      gameOne: {}
    };
  },
  firestore: {
    games: db.collection("games"),
    gameOne: db.collection("games").doc("8eouFSKemqC5niZiGu2U")
  },
  computed: {},
  methods: {
    /**
     * generates a random code
     */
    generateCode() {
      const length = 5;
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      this.code = result;
    },

    /**
     * creates a new game session on firestore and sets the code
     */
    createSessionFirestore(code) {
      let data = {
        code,
        gameID: "",
        playerIds: [2134, 1234, 1234],
        zoomIds: [1234, 1234, 1234]
      };
      // eslint-disable-next-line no-unused-vars
      let createSession = db
        .collection("sessions")
        .doc(code)
        .set(data);
    }
  },
  created() {
    this.generateCode();
    this.createSessionFirestore(this.code);
  }
};
</script>

<style>
</style>
