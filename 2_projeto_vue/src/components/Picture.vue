<template>
    <img v-bind:src="avatar" v-bind:alt="descricao">
</template>

<script>
export default {
    name: 'Picture',
    data(){
        return {
            avatar: '/img/avatar.png',
            descricao: 'Jeferson Oliveira'
        }
    }

}
</script>

