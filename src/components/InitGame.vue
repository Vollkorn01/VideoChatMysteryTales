<template>
  <div>
    <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
            <v-select
            :items="games"
            @input="setGame"
            label="Standard"
            ></v-select>
        </v-col>
    </v-row>
    <v-row align ="center">
        <button
        @click="startGame">
            Start Game
        </button>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'InitGame',
  components: {
  },
  data: function () {
      return {
          games: ['Test Name of Game', 'Test Name of Game2'],
          selectedGame: '',
      }
  },
  methods: {
      /**
       * sets the game the user has selected from drop down
       */
      setGame(val) {
          this.selectedGame = val
      },
      
      startGame() {
          console.log('route here')
      }
  }
};

</script>

<style>
</style>
