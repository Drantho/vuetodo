const app = Vue.createApp({
    data(){
        return {
            firstName: 'Anthony',
            lastName: 'Mitchell',
            email: 'mitchellanthonyd@gmail.com',
            gender: 'male',
            picture: 'https://avatars.githubusercontent.com/u/24540925?v=4'
        }
    }
});

app.mount('#app');