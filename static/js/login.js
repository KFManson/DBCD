var vm = new Vue({
    el: "#login",
    data: {
        username: '',
        password: '',
    },
    methods: {
        login: function () {
            var username = this.username;
            var password = this.password;
            axios.get('http://localhost:8080/loginAPI?id'+username+"&password"+password).then(response => {
                console.log(date())
                ;
            })
        }
    },
})