<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades.</p>
    <p>Utilizo as seguintes tecnologias para back-end:</p>

    <ul>
      <li v-for="(technology, index) in backend-tecnologies" v-bind:key="index">
        {{technology}}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para front-end:</p>
    <ul>
      <li v-for="technology in frontend_technologies">{{ technology.language }}</li>
    </ul>
    <div>
        <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p>Para acessar o meu portifólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
    <Picture />
  </div>
</template>

<script>
import Picture from './Picture.vue'

export default {
  name: "Info",
  components: {
      Picture
  },
  data() {
    return {
        esta_trabalhando: false,
        mostrar_email: false,
        email: 'jefersonoliveira@hotmail.com',
        meu_link: 'http://google.com',
        textoBotao: 'Mostrar e-mail',
        backend_technologies: ["JavaScript","PHP","Python"],
        frontend_tachnologies: [
          {id: 1, language: 'HTML5'},
          {id: 2, language: 'CSS3'},
          {id: 3, language: 'Vue'}
        ]
    }
  },
  methods: {
      showEmail(){
          this.mostrar_email = !this.mostrar_email
          console.log("Testando methods");
          if(!this.mostrar_email){
              this.textoBotao = 'Mostrar e-mail'
          }else{
              this.textoBotao = 'Esconder e-mail '
          }
      }
  }
};
</script>
