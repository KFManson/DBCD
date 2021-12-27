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
            axios.get('http://dontj.top/dbcd/loginAPI?Id=' + username + "&Password=" + password + '&Auth=' + id).
                then(respons => {
                    if (respons.data.state) {
                        window.location.href = 'studentImfor.html';
                    }
                })
            // window.location.href="studentImfor.html?username="+username;

        }
    },
})
axios.defaults.withCredentials = true;
