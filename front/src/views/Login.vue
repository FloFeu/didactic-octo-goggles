<template>
  <div class="login">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Mot de passe:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <button type="submit">Connexion</button>
      </form>
      <p v-if="showError" id="error">
        Le nom d'utilisateur ou le mot de passe est incorrect.
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["login"]),

    async submit() {
      try {
        await this.login(this.form);
        console.log(this.$store.getters.stateUser);
        this.$router.push("/");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>
