var vm = new Vue({
    el: "#login",
    data: {
        username: '',
        password: '',
    },
    methods: {
        login: function (id) {
            var username = this.username;
            var password = this.password;
          
            axios.get('http://localhost:8080/Stu/test').then(response => {
                console.log(response);
                 window.location.replace("http://localhost:8080/Stu/test"); 

            })
        }
    },
})