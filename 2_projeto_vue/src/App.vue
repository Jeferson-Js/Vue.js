<template>
<div>
  <PrimeiroComponente/>
  <LifeCicle/>
  <Pessoa />
  <Header />
</div>
</template>

<script>
import Header from './components/Header.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCicle from './components/LifeCicle.vue'
import Pessoa from './components/Pessoa.vue'

export default {
  name: 'App',
  components: {
  Header,
  PrimeiroComponente,
  LifeCicle,
  Pessoa
  }

}
</script> 