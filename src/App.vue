<template>
  <div id="app">
    <v-app>
      <navbar></navbar>

      <main style="background-color:#f5f5f5;" class="py-4">
        <router-view></router-view>
      </main>
    </v-app>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    navbar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
