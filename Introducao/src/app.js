const MyNameApp = {
    data(){
        return {
            name: '',
            input_name: ''
        }
    },
    methods: {
        formSubmit(e){
            e.preventDefault();

            this.name = this.input_name;
            
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");