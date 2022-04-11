<template>
  <div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Contatos</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  background-color: black;
}

li {
  margin-right: 30px;
}

a {
    text-decoration: none;
     color: green;
     transition: .5s;
}

a:hover {
  color: limegreen;
}
</style>
