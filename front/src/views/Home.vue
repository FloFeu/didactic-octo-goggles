<template>
  <div class="home">
    <p v-if="stateUser">Salut, bienvenue {{ stateUser.username }} !</p>
    <p v-else>Bonjour, n'hésitez pas à vous inscrire !</p>
  </div>
  <section>
    <ul>
      <Game v-for="game in games" :key="game.id" :game="game" />
    </ul>
    <div v-if='isAuthenticated'>
      <p>Ajoute ton jeu préféré !</p>
      <addGame />
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import Game from "@/components/Game.vue";
import addGame from "@/components/addGame.vue";

export default {
  name: "Home",
  components: { Game, addGame },
  data() {
    return {
      games: [],
    };
  },
  computed: {
    ...mapGetters(["stateUser", "isAuthenticated"]),
  },
  created(){
    console.log(this.stateUser.token)
  }
};
</script>