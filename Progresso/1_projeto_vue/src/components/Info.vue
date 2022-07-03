<template>
  <div>
    <p v-if="trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias para backend:</p>
    <ul>
      <li v-for="(Tecnologia, index) in backendTecnologias" v-bind:key="index">
        {{ Tecnologia }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para frontend:</p>
    <ul>
      <li v-for="Tecnologia in tecnologiasFrontend" :key="Tecnologia.id">
        {{ Tecnologia.language }}
      </li>
    </ul>
    <p v-show="mostrar">Mande um email para: {{ email }}</p>
    <button @click="showEmail">Mostrar email</button>
    <p>
      Para acessar o meu portifólio
      <a v-bind:href="link" target="_blank">Clique aqui</a>
    </p>
    <Picture />
  </div>
</template>

<script>
import Picture from "./Picture.vue";
export default {
  name: "Info",
  components: {
    Picture,
  },
  data() {
    return {
      trabalhando: false,
      mostrar: false,
      email: "teste@teste.com",
      link: "https://google.com.br",
      backendTecnologias: ["JavaScript", "Vue", "Lua"],
      tecnologiasFrontend: [
        { id: 1, language: "JavaScript" },
        { id: 2, language: "PhP" },
        { id: 3, language: "Lua" },
      ],
    };
  },
  methods: {
    showEmail() {
      this.mostrar = !this.mostrar;
    },
  },
};
</script>
