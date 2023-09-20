import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import validatorEn from "vee-validate/dist/locale/en";
Vue.use(VeeValidate, {
  fieldsBagName: "veeFields",
});
Validator.localize("en", validatorEn);

Validator.extend('strength_password', {
  getMessage: field => `Invalid pass`,
  validate: value => {
    let strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return strongRegex.test(value)
  }
})