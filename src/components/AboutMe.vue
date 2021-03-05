<template >
  <v-container>
    <v-row class="mt-4" justify="center">
      <h1 class="display-1">Andrew Ettensohn</h1>
    </v-row>

    <v-row class="mt-4" justify="center">
      <p>Programmer</p>
    </v-row>

    <v-row justify="center">
      <v-img :src="require('../assets/me.jpg')" class="my-3 portrait" />
    </v-row>

    <v-row>
      <v-col class="mb-4" cols="8">
        <h2 class="headline font-weight-bold mb-3">About Me</h2>

        <p class="subheading font-weight-regular">
          Thank you for taking a look at my portfolio app! I’m very passionate
          about programming and I love having the chance to show off my projects
          and skills. Programming is a huge part of my life, it’s not just my
          job, I’ve been afflicted with a condition that gives me happiness from
          programming so I usually find myself coding projects for fun.
        </p>
        <a
          href="https://www.linkedin.com/in/andrew-ettensohn-685721187"
          target="_blank"
        >
          <mdicon size="64" name="Linkedin" />
        </a>

        <a href="https://github.com/andrewettensohn" target="_blank">
          <mdicon size="64" name="Github" />
        </a>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-4" cols="8">
        <h2 class="headline font-weight-bold mb-3">About Me</h2>

        <p class="subheading font-weight-regular">
          Thank you for taking a look at my portfolio app! I’m very passionate
          about programming and I love having the chance to show off my projects
          and skills. Programming is a huge part of my life, it’s not just my
          job, I’ve been afflicted with a condition that gives me happiness from
          programming so I usually find myself coding projects for fun.
        </p>
        <a
          href="https://www.linkedin.com/in/andrew-ettensohn-685721187"
          target="_blank"
        >
          <mdicon size="64" name="Linkedin" />
        </a>

        <a href="https://github.com/andrewettensohn" target="_blank">
          <mdicon size="64" name="Github" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.portrait {
  max-width: 30%;
  max-height: 100%;
  border-radius: 20%;
}

a {
  color: #ffffff;
} /* Unvisited link  */
a:visited {
  color: #ffffff;
} /* Visited link    */
a:hover {
  color: #ffffff;
} /* Mouse over link */
a:active {
  color: #ffffff;
} /* Selected link   */
</style>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
