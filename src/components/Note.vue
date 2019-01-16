<template>
  <v-card class="my-3" hover>
    <v-img class="white--text" :src="note.imgUrl">
      <v-container fill-height fluid>
        <v-layout>
          <v-flex xs12 align-end d-flex>
            <span class="headline">{{ note.title }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-text> {{ note.content }} </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat class="blue--text">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Note",
  props: ["note"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus"></style>
