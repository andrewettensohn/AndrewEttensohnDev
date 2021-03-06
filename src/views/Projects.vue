<template>
  <div class="projects">
    <ProjectGallery />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectGallery from "@/components/ProjectGallery.vue";

export default {
  name: "Projects",
  components: {
    ProjectGallery,
  },
};
</script>