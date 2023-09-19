<template>
  <div></div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        if (!user.hasPorperty("email") || !user.hasPorperty("password")) {
          console.warn("Invalid User");
          return false;
        }
        return tru;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
