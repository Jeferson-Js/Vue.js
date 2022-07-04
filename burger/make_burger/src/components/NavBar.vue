<template>
  <div>
    <nav id="nav">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo" />
      </router-link>
      <router-link to="/home">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["logo", "alt"],
};
</script>

<style scoped>
#logo {
  width: 40px;
  height: 40px;
}

#nav {
  display: flex; 
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  background-color: #222;
  padding: 1rem;
  border-bottom: 1px solid #333;
  width: 100%;
  height: 70px;
}


</style>
