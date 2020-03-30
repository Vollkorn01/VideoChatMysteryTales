<template>
  <v-card>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab>Map</v-tab>
      <v-tab>Characters</v-tab>
      <v-tab>Story</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
              <GameMap></GameMap>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
              <GameCharacters></GameCharacters>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
              TODO
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import GameMap from "./GameMap";
import GameCharacters from "./GameCharacters";

export default {
  components: { GameMap, GameCharacters },
  data() {
    return {
      tab: null,
    };
  }
};
</script>
