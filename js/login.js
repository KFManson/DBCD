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
            axios.get('http://localhost:8080/Stu/test?id=123').then(response => {
                console.log(response);
            })
        }
    },
})