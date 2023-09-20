<template>
  <div></div>
</template>

<script>
import Login from "@/components/authentication/Login.vue";
export default {
  components: {
    Login,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
};
</script>
