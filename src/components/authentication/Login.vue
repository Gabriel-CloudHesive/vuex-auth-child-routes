<template>
  <b-form @submit.prevent="$emit('login')">
    <b-form-group label="Email" description="Private data">
      <b-form-input
        type="email"
        autocomplete="off"
        v-model="user.email"
        v-validate="'required|email'"
        name="email"
        placeholder="Type the email"
      ></b-form-input>
      <b-form-invalid-feedback>
        {{ error.first("email") }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Password">
      <b-form-input
        type="password"
        autocomplete="off"
        v-model="user.password"
        v-validate="'required|min:6'"
        name="password"
        placeholder="Type the password"
      ></b-form-input>
      <b-form-invalid-feedback>
        {{ error.first("email") }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-button
      :disabled="errors.any() || !user.password"
      type="submit"
      variant="primary"
      >Login</b-button
    >
  </b-form>
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
