<template >
  <v-container>
    <v-row class="mt-15">
      <v-col>
        <h2 class="headline font-weight-bold mb-3">Welcome to my Portfolio!</h2>
        <h1 class="display-1">Andrew Ettensohn</h1>
        <p>Full Stack Developer/Game Dev</p>
      </v-col>
    </v-row>

        <v-row justify="center">
          <v-btn elevation="2">
              <router-link to="/projects" tag="button" class="mr-3">See My Projects Here!</router-link>
          </v-btn>
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
          <iframe frameborder="0" src="https://itch.io/embed/1686671" width="552" height="167"><a href="https://andrewettensohn.itch.io/fell-deeds">Fell Deeds by Fell Games</a></iframe>
      </v-col>
    </v-row>

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
          "I started at Publix as a retail associate in the store, mainly working in the grocery department while attending Polk State College for Bussiness IT. At PSC I had classes in Java, web development, and database design. I finished up my degree working at Publix's Information Systems help desk where I had the chance to write some scripts in PowerShell that made my job easier. In 2019 I moved over to development as a SQA analyst, mainly focusing on automated testing using C#, Selenium, Appium, and Publix's inital automated API testing framework while working on a scrum team. In 2020 I started work as a Software Engineer and helped deliver the first couple versions of Publix's new inventory system.",
      },
      {
        heading: "What I'm Up To",
        description:
          "I'm current working at ProbablyMonsters, a new independent game company based out of Bellevue, Washington. I recently completed my first game with Unity and published it on Itch. I'm learning C++ so that I can move over to Unreal but in the mean time I hope to put out a few more Unity games. Check out the game I made below!",
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
