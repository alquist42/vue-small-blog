<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex xs12 md5>
        <v-navigation-drawer class="mail-drawer" clipped v-model="drawer">
          <v-list class="mail-list" dense>
            <template v-for="item in menus">
              <v-layout
                row
                v-if="item.heading"
                align-center
                :key="item.heading"
              >
                <v-flex xs12>
                  <v-subheader v-if="item.heading">
                    {{ item.heading }}
                  </v-subheader>
                  <v-divider></v-divider>
                </v-flex>
              </v-layout>
              <!-- Top level -->
              <v-list-tile v-else :key="item.text" :to="item.to">
                <v-list-tile-action v-if="item.icon">
                  <v-icon :color="item.iconColor" :small="item.iconSize">{{
                    item.icon
                  }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <!-- <v-chip class="caption red lighten-2 white--text chip--x-small mx-0" v-if="item.chip" label="label" small>{{ item.chip }}</v-chip> -->
              </v-list-tile>
            </template>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-flex xs12 md5 offset-md2>
        <v-card>
          <v-card-text class="pa-0">
            <v-textarea
              class=""
              counter
              placeholder="Share something..."
              full-width
              multi-line
            ></v-textarea>
          </v-card-text>
          <v-toolbar dense flat>
            <v-btn icon> <v-icon>attach_file</v-icon> </v-btn>
            <v-btn icon> <v-icon>link</v-icon> </v-btn>
            <v-btn icon> <v-icon>camera</v-icon> </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat icon> <v-icon>send</v-icon> </v-btn>
          </v-toolbar>
        </v-card>
        <div v-for="post in posts" :key="post.title">
          <v-card class="my-3" hover>
            <v-img class="white--text" :src="post.imgUrl">
              <v-container fill-height fluid>
                <v-layout>
                  <v-flex xs12 align-end d-flex>
                    <span class="headline">{{ post.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-text> {{ post.content }} </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="blue--text">Read More</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      menus: [
        {
          title: "Email",
          group: "email",
          icon: "email",
          to: { path: "/mail/all" },
          chip: 10
        },
        {
          title: "Sent",
          group: "email",
          icon: "send",
          to: { path: "/mail/sent" },
          chip: 5
        },
        {
          title: "Starred",
          group: "email",
          icon: "star",
          to: { path: "/mail/starred" },
          chip: 2
        },
        {
          title: "Draft",
          group: "email",
          icon: "content_copy",
          to: { path: "/mail/draft" },
          chip: 3
        },
        {
          title: "Trash",
          group: "email",
          icon: "delete",
          to: { path: "/mail/trashed" },
          chip: 1
        },
        { heading: "Label" },
        {
          icon: "radio_button_checked",
          iconColor: "yellow",
          title: "Work",
          iconSize: "small"
        },
        {
          icon: "radio_button_checked",
          iconColor: "green",
          title: "Client",
          iconSize: "small"
        },
        {
          icon: "radio_button_checked",
          iconColor: "red",
          title: "Project",
          iconSize: "small"
        },
        {
          icon: "radio_button_checked",
          iconColor: "grey",
          title: "Peronal",
          iconSize: "small"
        }
      ],
      drawer: null,
      title: "Your Logo",
      posts: [
        {
          title: "Fusce ullamcorper tellus",
          content:
            "Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/08/06/16/30/mushroom-3587888_960_720.jpg"
        },
        {
          title: "Donec vitae suscipit lectus, a luctus diam.",
          content:
            "Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.",
          imgUrl:
            "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"
        },
        {
          title: "Vestibulum condimentum quam",
          content:
            "At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.",
          imgUrl:
            "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
