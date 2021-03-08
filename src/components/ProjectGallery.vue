<template>
  <v-container>
    <v-row class="text-center mt-15">
      <v-col class="mb-4" justify="center">
        <h1 class="display-3 font-weight-bold mb-3">Project Gallery</h1>
        <p class="subheading font-weight-regular">
          Here's a few projects that I'm proud of.
        </p>
      </v-col>
    </v-row>
    <template v-for="project in projects">
      <v-row class="text-center" justify="center" :key="project">
        <h1 class="display-1 font-weight-bold mb-3">
          {{ project.name }}
        </h1>
      </v-row>
      <v-row justify="center my-8" :key="project">
        <template v-for="language in project.languageIcons">
          <div :key="language">
            <v-icon :class="language" x-large></v-icon>
          </div>
        </template>
      </v-row>

      <v-row justify="center my-5 mx-1 text-center" :key="project">
        <p class="subheading font-weight-regular">
          {{ project.description }}
        </p>
      </v-row>

      <v-row
        class="text-center my-10"
        justify="center"
        v-if="project.hasDesktopGallery"
        :key="project"
      >
        <h1 class="display-2 headline font-weight-bold">
          Large Screen Gallery
        </h1>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(image, i) in project.desktopGallery"
            :key="i"
          >
            <img :src="image.src" class="desktop-gallery-img" />
          </v-carousel-item>
        </v-carousel>
      </v-row>

      <v-row
        justify="center"
        class="text-center my-10"
        v-if="project.hasMobileGallery"
        :key="project"
      >
        <h1 class="display-2 headline font-weight-bold mb-10">
          Mobile Gallery
        </h1>
        <v-carousel hide-delimiters>
          <v-carousel-item v-for="(image, i) in project.mobileGallery" :key="i">
            <img :src="image.src" class="mobile-gallery-img" />
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "ProjectGallery",

  data: () => ({
    projects: [
      {
        name: "Portfolio Site Vue.js",
        description:
          "The site you're looking at uses Vue.js, Vue Router, and Vuetify.",
        languageIcons: ["devicon-vuejs-plain"],
        hasDesktopGallery: false,
        hasMobileGallery: false,
      },
      {
        name: "Hacker News Blazor WASM",
        description:
          "This app uses Y Combinator's Hacker News API to display top stories and comments, the app also allows the user to save articles and features a dark and light theme. By the time I made this app I had already made multiple tools for my team using Blazor. Blazor feels like not just the future of .NET but of web development in general.Not having to mess with JavaScript can make the code in your app much cleanier and component based frontends using only C# feel great. I experimented a lot in this project with the theme changing, using Blazorise, and using the browser's local storage.",
        languageIcons: ["devicon-csharp-plain"],
        hasDesktopGallery: true,
        hasMobileGallery: true,
        desktopGallery: [
          {
            src: require("../assets/BlazorNews/desktop-hnb-browse.png"),
          },
          {
            src: require("../assets/BlazorNews/desktop-hnb-comment.png"),
          },
          {
            src: require("../assets/BlazorNews/desktop-hnb-saved.png"),
          },
          {
            src: require("../assets/BlazorNews/desktop-hnb-light.png"),
          },
          {
            src: require("../assets/BlazorNews/desktop-hnb-settings.png"),
          },
        ],
        mobileGallery: [
          {
            src: require("../assets/BlazorNews/mobile-hnb-browse.jpg"),
          },
          {
            src: require("../assets/BlazorNews/mobile-hnb-saved.jpg"),
          },
          {
            src: require("../assets/BlazorNews/mobile-hnb-light.jpg"),
          },
          {
            src: require("../assets/BlazorNews/mobile-hnb-delete.jpg"),
          },
        ],
      },
      {
        name: "Hacker News Xamarin Forms Android",
        description:
          "This app shares the same features as Blazor News minus the theme changing. I started learning Xamarin in July of 2020 along with the MVVM design pattern. ProgrammerNews is my first MVVM Android app, it makes use of the Hacker News API to display 500 of the top user sumbitted stories from the site. The app also allows users to save stories and features endless scrolling, loading 15 stories at a time.",
        languageIcons: ["devicon-csharp-plain", "devicon-android-plain"],
        hasDesktopGallery: false,
        hasMobileGallery: true,
        mobileGallery: [
          {
            src: require("../assets/ProgrammerNews/mobile-hn-browse.png"),
          },
          {
            src: require("../assets/ProgrammerNews/mobile-hn-command.png"),
          },
          {
            src: require("../assets/ProgrammerNews/mobile-hn-saved.png"),
          },
          {
            src: require("../assets/ProgrammerNews/mobile-hn-icon.png"),
          },
          {
            src: require("../assets/ProgrammerNews/mobile-hn-about.png"),
          },
        ],
      },
      {
        name: "Endevrian ASP NET Core",
        description:
          "Endevrian combined all of the knowledge I had gained in the past 9 months about .NET. Taking the lessons I had learned from KanbanLite, I focused more on improving my understanding of MVC and web apps Endevrian uses EF Core, Identity Core, SQLite, and Azure Blob Storage. Endevrian also meets the installable requirement of a Progressive Web App and can be installed as an app on mobile and desktop operating systems. Endevrian allowed me to combine my love of Dungeons and Dragons with my love for programming. Endevrian helps a game master run their campaign by offering a place to store session notes (similar to One Note), a wiki, map gallery, and a blog.",
        languageIcons: [
          "devicon-csharp-plain",
          "devicon-microsoftsqlserver-plain",
          "devicon-javascript-plain",
        ],
        hasDesktopGallery: true,
        hasMobileGallery: true,
        desktopGallery: [
          {
            src: require("../assets/Endevrian/desktop-end-home.png"),
          },
          {
            src: require("../assets/Endevrian/desktop-end-note.png"),
          },
          {
            src: require("../assets/Endevrian/desktop-end-wiki.png"),
          },
          {
            src: require("../assets/Endevrian/desktop-end-tag.png"),
          },
          {
            src: require("../assets/Endevrian/desktop-end-gallery.png"),
          },
          {
            src: require("../assets/Endevrian/desktop-end-blog.png"),
          },
        ],
        mobileGallery: [
          {
            src: require("../assets/Endevrian/mobile-end-home.png"),
          },
          {
            src: require("../assets/Endevrian/mobile-end-log.png"),
          },
          {
            src: require("../assets/Endevrian/mobile-end-manage.png"),
          },
          {
            src: require("../assets/Endevrian/mobile-end-note.png"),
          },
          {
            src: require("../assets/Endevrian/mobile-end-noteList.png"),
          },
        ],
      },
      {
        name: "KanbanLite ASP NET Core",
        description:
          "My first ASP.NET Core MVC project. This project took me about 3 months to create, working on it in some part almost everyday. Through working on this project I had experience with Entity Framework Core, MSSQL Server, Identity Core, and deployments with Azure Web Apps. After completing KanbanLite I felt much more confident with the MVC design pattern. This application allows the user to create a project and assign tasks to the project in addition to subtasks. KanbanLite also offers a story view that displays the history of a project such as when a task is completed.",
        languageIcons: [
          "devicon-csharp-plain",
          "devicon-microsoftsqlserver-plain",
          "devicon-javascript-plain",
        ],
        hasDesktopGallery: true,
        hasMobileGallery: true,
        desktopGallery: [
          {
            src: require("../assets/KanbanLite/desktop-kanlite-home.png"),
          },
          {
            src: require("../assets/KanbanLite/desktop-kanlite-project.png"),
          },
          {
            src: require("../assets/KanbanLite/desktop-kanlite-story.png"),
          },
          {
            src: require("../assets/KanbanLite/desktop-kanlite-filters.png"),
          },
          {
            src: require("../assets/KanbanLite/desktop-kanlite-board.png"),
          },
          {
            src: require("../assets/KanbanLite/desktop-kanlite-archive.png"),
          },
        ],
        mobileGallery: [
          {
            src: require("../assets/KanbanLite/mobile-kanlite-filter.png"),
          },
          {
            src: require("../assets/KanbanLite/mobile-kanlite-nav.png"),
          },
          {
            src: require("../assets/KanbanLite/mobile-kanlite-projectDetail.png"),
          },
          {
            src: require("../assets/KanbanLite/mobile-kanlite-projectList.png"),
          },
          {
            src: require("../assets/KanbanLite/mobile-kanlite-story.png"),
          },
          {
            src: require("../assets/KanbanLite/mobile-kanlite-board.png"),
          },
        ],
      },
    ],
  }),
};
</script>

<style>
.desktop-gallery-img {
  width: 80%;
  height: auto;
}

@media screen and (max-width: 767px) {
  .desktop-gallery-img {
    width: 100%;
    height: 60%;
  }
}

@media screen and (min-width: 768px) {
  .desktop-gallery-img {
    width: 100%;
    height: auto;
  }
}
@media (min-width: 992px) {
  .desktop-gallery-img {
    width: 100%;
    height: auto;
  }
}
@media (min-width: 1200px) {
  .desktop-gallery-img {
    width: 80%;
    height: auto;
  }
}

.mobile-gallery-img {
  width: 80%;
  height: auto;
}

@media screen and (max-width: 767px) {
  .mobile-gallery-img {
    width: auto;
    height: 100%;
  }
}

@media screen and (min-width: 768px) {
  .mobile-gallery-img {
    width: auto;
    height: 100%;
  }
}
@media (min-width: 992px) {
  .mobile-gallery-img {
    width: 30%;
    height: auto;
  }
}
@media (min-width: 1200px) {
  .mobile-gallery-img {
    width: auto;
    height: 100%;
  }
}
</style>