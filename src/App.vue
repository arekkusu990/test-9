<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="container mx-auto">
      <img alt="Vue logo" src="./assets/logo.png" class="mx-auto" />
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
html,
body,
#app {
  min-height: 100vh;
}
</style>
