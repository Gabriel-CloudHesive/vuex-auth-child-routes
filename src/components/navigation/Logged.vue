<template>
  <b-nav>
    <b-nav-item exact to="/secret">Secret page</b-nav-item>
    <b-nav-item exact to="/secret/notes">Secret notes</b-nav-item>
    <b-nav-item @click="_logout">Logout</b-nav-item>
  </b-nav>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("authentication", ["logout"]),
    _logout() {
      this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
