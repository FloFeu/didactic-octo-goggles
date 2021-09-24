<template>
  <div class="register">
      <div>
          <form @submit.prevent="submit">
            <div>
              <label for="username">Nom d'utilisateur:</label>
              <input type="text" name="username" v-model="form.username">
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" name="email" v-model="form.email">
            </div>
            <div>
              <label for="password">Mot de passe:</label>
              <input type="password" name="password" v-model="form.password">
            </div>
            <button type="submit"> Inscription </button>
          </form>
      </div>
      <p v-if="showError" id="error">L'email est déjà utilisé !</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "Register",
    components: {},
    data() {
        return {
            form: {
                username: "",
                email: "",
                password: ""
            },
            showError: false
        };
    },
    methods: {
        ...mapActions(["register"]),
        async submit() {
            try {
                await this.register(this.form);
                this.$router.push("/login");
                this.showError = false
            } catch(error){
                this.showError = true
            }
        }
    }    
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
#error {
  color: red;
}
</style>