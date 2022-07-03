<template>
  <img v-bind:src="avatar" alt="descricao" />
  <Reutilizacao />
</template>

<script>
import Reutilizacao from "./Reutilizacao.vue";
export default {
  name: "Picture",
  components: {
    Reutilizacao,
  },
  data() {
    return {
      avatar: "/img/avatar.png",
      decricao: "Jeferson Oliveira",
    };
  },
  components: { Reutilizacao },
};
</script>
