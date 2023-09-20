<template>
  <div>
    <h3 class="text-center text-muted mt-4">Login</h3>
    <b-alert v-if="error" show variant="danger">{{ errorMessage }}</b-alert>
    <Login :user="user" @login="submit"></Login>
  </div>
</template>

<script>
import Login from "@/components/authentication/Login.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    Login,
  },
  data() {
    return {
      user: {
        email: "admin@vue.com",
        password: "@Password1",
      },
    };
  },
  computed: {
    ...mapState("authentication", ["error", "errorMessage"]),
  },
  methods: {
    ...mapActions("authentication", ["signIn"]),
    async submit() {
      const validate = await this.$validator.validateAll();
      if (!validate) {
        return false;
      }
      await this.signIn(this.user);
      this.$router.push("/secret");
    },
  },
};
</script>
