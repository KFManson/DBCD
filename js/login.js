var vm = new Vue({
    el: "#login",
    data: {
        username: '',
        password: '',
    },
    methods: {
        login: function () {
            console.log(1);
            var username = this.username;
            var password = this.password;
            axios.get('http://localhost:8080/loginAPI?id='+username+'&password='+password).then(response => {
                console.log(response.data)
            })
        }
    },
})