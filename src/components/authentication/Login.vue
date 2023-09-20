<template>
  <b-form @submit.prevent="$emit('login')">
    <b-form-group label="Email" description="Private data">
      <b-form-input
        type="email"
        autocomplete="off"
        v-model="user.email"
        v-validate="'required|email'"
        :state="validateState('email')"
        name="email"
        placeholder="Type the email"
      ></b-form-input>
      <b-form-invalid-feedback>
        {{ errors.first("email") }}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Password">
      <b-form-input
        type="password"
        autocomplete="off"
        v-model="user.password"
        v-validate="'required|min:6|strength_password'"
        :state="validateState('password')"
        name="password"
        placeholder="Type the password"
      ></b-form-input>
      <b-form-invalid-feedback>
        {{ errors.first("password") }}
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
import validateMixin from "@/mixins/validation";
export default {
  mixins: [validateMixin],
  props: {
    user: {
      type: Object,
      required: true,
      validator: (user) => {
        if (!user.hasOwnProperty("email") || !user.hasOwnProperty("password")) {
          console.warn("Invalid User");
          return false;
        }
        return true;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
