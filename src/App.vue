<template>
  <div id="app">
    <Loading :active.sync="loading"></Loading>
    <b-container>
      <Guest v-if="!isLogged"></Guest>
      <Logged v-else></Logged>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Logged from "@/components/navigation/Logged.vue";
import Guest from "@/components/navigation/Guest.vue";
import { mapState } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: { Logged, Guest, Loading },
  computed: {
    ...mapState("authentication", ["isLogged"]),
    ...mapState(["loading"]),
  },
};
</script>
