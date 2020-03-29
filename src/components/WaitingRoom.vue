<template>
  <div>
      WaitingRoom
  </div>
</template>
<script>
export default {
  name: 'WaitingRoom',
  components: {
  },
  created() {
      console.log('user: ', this.$store.getters.user);
  }
};

</script>

<style>
</style>
