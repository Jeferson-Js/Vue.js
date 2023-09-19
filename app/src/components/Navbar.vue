<template>
  <div>
    <header class="flex">
      <nav
        class="flex justify-between items-center w-full h-16 shadow-md bg-purple-400 px-3"
      >
        <span class="flex items-center gap-2">
          <img :src="imgUrl" alt="aplication" class="w-11 h-11" />
          <h2 class="text-white lg:text-lg md:text-base text-sm animate-pulse">
            Aplication
          </h2>
        </span>
        <button
          @click="menuMobile"
          class="text-2xl text-white flex items-center outline-none lg:hidden ml-auto"
        >
          <ion-icon :name="menuOpen ? 'close' : 'menu'"></ion-icon>
        </button>
        <ul class="hidden lg:flex lg:items-center gap-3">
          <li
            class="text-white lg:text-lg md:text-base text-sm hover:text-gray-200 duration-500"
          >
            <router-link to="/home">Home</router-link>
          </li>
          <li
            class="text-white lg:text-lg md:text-base text-sm hover:text-gray-200 duration-500"
          >
            <router-link to="/configuracao">Configuração</router-link>
          </li>
        </ul>

        <!-- Mobile -->
        <div class="lg:hidden md:hidden" v-if="isOpen">
          <ul
            class="absolute top-16 left-0 bg-purple-400 w-full h-28 shadow-md"
          >
            <li
              class="text-white lg:text-lg md:text-base text-sm hover:text-purple-400 duration-500 w-20 hover:bg-white py-2 pl-2 rounded-r-full m-3"
            >
              <router-link to="/home">Home</router-link>
            </li>
            <li
              class="text-white lg:text-lg md:text-base text-sm hover:text-purple-400 duration-500 w-28 hover:bg-white py-2 pl-2 rounded-r-full m-3"
            >
              <router-link to="/configuracao">Configuração</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: "Navbar",
  data() {
    return {
      imgUrl: "/img/application.png",
      isOpen: false,
      menuOpen: false,
    };
  },
  methods: {
    menuMobile() {
      this.isOpen = !this.isOpen;
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
