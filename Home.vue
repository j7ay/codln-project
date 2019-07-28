<template>
  <div class="home">
   <AppNav></AppNav>
   <span>
     <AppGrid></AppGrid>
     <AppThumbnail></AppThumbnail>
     <AppFooter></AppFooter>
   </span>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNav from "@/components/AppNav.vue";
import AppGrid from "@/components/AppGrid.vue";
import AppThumbnail from "@/components/AppThumbnail.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  name: "home",
  components: {
    AppNav,
    AppGrid,
    AppThumbnail,
    AppFooter,
  }
};
</script>
