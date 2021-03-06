<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="deep-purple accent-3"
      elevation="20"
      src="https://i.picsum.photos/id/220/1920/1080.jpg?hmac=jSW8ORCAXnLjyQRq4vl3nBiTXuTMiTg6nsaDRvR7GXE"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <v-spacer></v-spacer>

      <div class="d-flex" justify="center">
        <router-link to="/" tag="button" class="mr-3">HOME</router-link>

        <router-link to="/projects" tag="button" class="mr-3"
          >PROJECTS</router-link
        >

        <router-link to="/projects" tag="button">CONTACT</router-link>
      </div>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
