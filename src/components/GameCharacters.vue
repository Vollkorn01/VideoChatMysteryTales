<template>
  <div class="container">
    <h1>Characters</h1>
    <v-expansion-panels multiple popout hover>
      <v-expansion-panel v-for="character in characters" :key="character.id">
        <v-expansion-panel-header>{{
          character.name
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ character.short }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { db } from "../firebase";

export default {
  data() {
    return {
      characters: {}
      // characters: {
      //   qegsdvb: {
      //     name: "Jasmine Phelps",
      //     publicDescription: "Seth Phelps’ widow, his second marriage – formerly an influencer and model for cgi design"
      //   },
      //   nvnklv: {
      //     name: "Marianne Pfyffer",
      //     publicDescription: "Seth’s oldest child, she is a full-time streamer. "
      //   },
      //   nvadsf: {
      //     name: "Thomas Pfyffer",
      //     publicDescription: "Marianne’s husband, who owns a fueldriven motor vehicles sales and repair business"
      //   },
      //   khadfg: {
      //     name: "Megan Ross",
      //     publicDescription: "Seth’s middle child, a well-known writer of a detective blog."
      //   },
      //   sdgb: {
      //     name: "Carl Ross",
      //     publicDescription: "Megan’s husband, a programmer."
      //   },
      //   bbkbk: {
      //     name: "Jamie Phelps",
      //     publicDescription: "Seth’s youngest child, an online refuser, who still lives with her father."
      //   }
      // }
    };
  },
    name: "GameCharacters",
  firestore: {
    characters: db.collection("characters"),
  }
};
</script>

<style></style>
