<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AboutMe msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
  },
};
</script>
