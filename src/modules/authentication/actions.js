import Vue from "vue";
export async function signIn(context, user) {
  try {
    context.commit("setLoading", true, { root: true });
    await Vue.axios({
      method: "POST",
      url: "/login",
      data: user,
    });
    context.commit("setUser", user);
  } catch (error) {
    context.commit("authError", error.message);
  } finally {
    context.commit("setLoading", false, { root: true });
  }
}
