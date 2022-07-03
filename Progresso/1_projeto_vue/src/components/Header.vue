<template>
  <div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style scoped>
nav {
  padding: 1rem;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
}

ul {
  display: flex;
  gap: 3rem;
  list-style: none;
  transition: all 2s ease-in-out;
}

a {
  color: blue;
  font-size: 20px;
}

a:hover {
  color: skyblue;
  bottom: 1px solid skyblue;
  transition: all 2s ease-in-out;
}
</style>
