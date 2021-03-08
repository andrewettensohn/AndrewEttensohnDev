<template >
  <v-container>
    <v-row class="mt-15">
      <v-col>
        <h2 class="headline font-weight-bold mb-3">Welcome to my Portfolio!</h2>
        <h1 class="display-1">Andrew Ettensohn</h1>
        <p>Full Stack Developer</p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-img
        :src="require('../assets/munich.jpg')"
        class="my-3 mr-3 portrait"
      />
    </v-row>

    <template v-for="section in aboutMeSections">
      <v-row justify="start" :key="section">
        <v-col class="mb-4" cols="12" md="8">
          <h2 class="headline font-weight-bold mb-3">{{ section.heading }}</h2>

          <p class="subheading font-weight-regular">
            {{ section.description }}
          </p>
        </v-col>
      </v-row>
    </template>

    <v-row justify="start">
      <v-col class="mb-4" cols="12" md="8">
        <a
          class="mr-3"
          href="https://www.linkedin.com/in/andrew-ettensohn-685721187"
          target="_blank"
        >
          <v-icon class="devicon-linkedin-plain" x-large />
        </a>

        <a href="https://github.com/andrewettensohn" target="_blank">
          <v-icon class="devicon-github-original" x-large />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "ProjectGallery",

  data: () => ({
    aboutMeSections: [
      {
        heading: "About Me",
        description:
          "Thank you for taking a look at my portfolio app! I’m very passionate about programming and I love having the chance to show off my projects and skills. Programming is a huge part of my life, it’s not just my job, I’ve been afflicted with a condition that gives me happiness from programming so I usually find myself coding projects for fun.",
      },
      {
        heading: "Where I've Been",
        description:
          "Publix Super Markets is the only company I've ever worked for. I started at Publix as a retail associate in the store, mainly working in the grocery department while attending Polk State College for Bussiness IT. At PSC I had classes in Java, web development, and database design. I finished up my degree working at Publix's Information Systems help desk where I had the chance to write some scripts in PowerShell that made my job easier. In 2019 I moved over to development as a SQA analyst, mainly focusing on automated testing using C#, Selenium, Appium, and Publix's inital automated API testing framework while working on a scrum team. In 2020 I became a full-stack developer and have designed and coded multiple features using .NET.",
      },
      {
        heading: "What I'm Up To",
        description:
          "As much as I love .NET, I'm currently trying to learn other programming languages and frameworks. I hope to become proficent in Vue.js and Kotlin and use my skills to make some great apps that don't use .NET like this site.",
      },
    ],
  }),
};
</script>

<style scoped>
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

.portrait {
  max-width: 15%;
  max-height: 100%;
  border-radius: 20%;
}

@media screen and (max-width: 767px) {
  .portrait {
    max-width: 40%;
    max-height: 100%;
    border-radius: 20%;
  }
}

@media screen and (min-width: 768px) {
  .portrait {
    max-width: 25%;
    max-height: 100%;
    border-radius: 20%;
  }
}
@media (min-width: 992px) {
  .portrait {
    max-width: 20%;
    max-height: 100%;
    border-radius: 20%;
  }
}
@media (min-width: 1200px) {
  .portrait {
    max-width: 15%;
    max-height: 100%;
    border-radius: 20%;
  }
}
</style>
