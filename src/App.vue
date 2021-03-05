<template>
  <v-app>
    <v-app-bar app color="deep-purple">
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Projects</span>
      </v-btn>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Contact </span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <AboutMe />
    </v-main>
  </v-app>
</template>

<script>
import AboutMe from "./components/AboutMe";

export default {
  name: "App",

  components: {
    AboutMe,
  },

  data: () => ({
    //
  }),
};
</script>
