<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex lg6 md8 xs12 offset-md3>
        <new-note></new-note>
        <div v-for="post in notes" :key="post.title">
          <note :note="post"></note>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Note from "@/components/Note";
import NewNote from "@/components/NewNote";
import NotesService from "@/services/notes";

export default {
  name: "Notes",
  components: {
    Note,
    NewNote
  },
  data() {
    return {
      notes: []
    };
  },

  async created() {
    this.$radio.$on("TOGGLE", () => {
      this.drawer = !this.drawer;
    });

    const res = await NotesService.all();
    this.notes = res.notes;
  },

  methods: {}
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
