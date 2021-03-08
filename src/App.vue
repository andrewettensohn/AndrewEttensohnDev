<template>
  <v-app>
    <v-app-bar
      app
      dark
      elevation="20"
      src="https://i.picsum.photos/id/1040/4496/3000.jpg?hmac=kvZONlBpTcZ16PuE_g2RWxlicQ5JKVq2lqqZndfafBY"
    >
      <v-spacer></v-spacer>

      <div class="d-flex" justify="center">
        <router-link to="/" tag="button" class="mr-3">HOME</router-link>

        <router-link to="/projects" tag="button" class="mr-3"
          >PROJECTS</router-link
        >
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
