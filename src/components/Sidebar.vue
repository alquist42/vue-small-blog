<template>
  <v-navigation-drawer
    :app="$vuetify.breakpoint.smAndDown"
    fixed
    clipped
    width="240"
    v-model="drawer"
    mobile-break-point="960"
    :class="{ menu: true, transparent: $vuetify.breakpoint.mdAndUp }"
  >
    <v-list class="mail-list" dense>
      <template v-for="item in menus">
        <v-layout row v-if="item.heading" align-center :key="item.heading">
          <v-flex xs12>
            <v-subheader v-if="item.heading"> {{ item.heading }} </v-subheader>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
        <!-- Top level -->
        <v-list-tile v-else :key="item.text" :to="item.to">
          <!--<v-list-tile-action v-if="item.icon">-->
          <!--<v-icon :color="item.iconColor" :small="item.iconSize">{{-->
          <!--item.icon-->
          <!--}}</v-icon>-->
          <!--</v-list-tile-action>-->
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-chip
            class="caption red lighten-2 white--text chip--x-small mx-0"
            v-if="item.chip"
            label="label"
            small
            >{{ item.chip }}</v-chip
          >
        </v-list-tile>
      </template>
    </v-list>
    <tag-cloud></tag-cloud>
  </v-navigation-drawer>
</template>

<script>
import TagCloud from "./TagCloud";

export default {
  name: "AppSidebar",
  components: {
    TagCloud
  },
  data() {
    return {
      menus: [
        {
          title: "Feed",
          group: "notes",
          icon: "email",
          to: { path: "/feed" },
          chip: 10
        },
        {
          title: "My Notes",
          group: "notes",
          icon: "start",
          to: { path: "/notes" },
          chip: 5
        },
        { heading: "Tags" }
      ],
      drawer: true
    };
  },

  created() {
    this.$radio.$on("TOGGLE", () => {
      this.drawer = !this.drawer;
    });
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '~vuetify/src/stylus/main'
@media (min-width: $grid-breakpoints.md)
    .menu {
        top: 68px;
        right: 75%;
        left: auto;
    }
</style>
