<template>
<div>
 <h2>Esta é a descrição da pessoa {{ nome }}</h2>
 <info/>
</div>
</template>

<script>
import Info from './Info.vue'
export default {
  components: { 
      Info 
      
    },
    name: 'Pessoa',
    data(){
        return {
            nome: 'Jeferson'
        }
    }

}
</script>

<style>

</style>