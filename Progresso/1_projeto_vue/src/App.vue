<template>
  <div>
    <Header />
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";
import LifeCycle from "./components/LifeCycle.vue";
import Pessoa from "./components/Pessoa.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: blueviolet;
  color: white;
}

a {
  color: black;
  text-decoration: none;
}
</style>
