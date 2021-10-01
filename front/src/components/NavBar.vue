<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <span v-if="isAuthenticated">
      <router-link :to="{ name: 'Profile' }"> Profile </router-link> |
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link :to="{ name: 'Register' }">Register</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(['isAuthenticated']),

  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>