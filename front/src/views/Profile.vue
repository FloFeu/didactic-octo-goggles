<template>
  <div>
    {{ user.username }}
  </div>
</template>
  
<script>

import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.getters.stateUser),
    };
  },
};
</script>

<style>
</style>