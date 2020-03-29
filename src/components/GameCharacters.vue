<template>
<div class="container">
  <h1>Characters</h1>
    <v-expansion-panels multiple popout hover>
      <v-expansion-panel
        v-for="character in characters"
        :key="character.id"
      >
        <v-expansion-panel-header>{{ character.name }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ character.publicDescription }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
// import { db } from "../firebase";

export default {
  data() {
    return {
      characters: {
        qegsdvb: {
          name: "Sepperl",
          publicDescription: "Sepperl lives in the mountains",
        },
        nvnklv: {
          name: "Hannes",
          publicDescription: "Hannes lives by the river",
        },
        nvadsf: {
          name: "Rosina",
          publicDescription: "Rosina lives in a castle",
        },
      },
    };
  },
  // name: "GameCharacters",
  //     firestore: {
  //       //   TODO
  //     },
};
</script>

<style></style>
