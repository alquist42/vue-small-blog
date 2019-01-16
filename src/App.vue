<template>
  <v-app>
    <app-toolbar></app-toolbar>
    <app-sidebar></app-sidebar>
    <v-content>
      <transition>
        <keep-alive> <router-view></router-view> </keep-alive>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppToolbar from "./components/Toolbar";
import AppSidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    AppToolbar,
    AppSidebar
  },
  data() {
    return {
      //
    };
  },
  methods: {
    logout() {},
    handleDrawerToggle() {},
    handleFullScreen() {}
  }
};
</script>
