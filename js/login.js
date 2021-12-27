var vm = new Vue({
    el: "#login",
    data: {
        username: '',
        password: '',
    },
    methods: {
        loginA: function (id) {
            var username = this.username;
            var password = this.password;
            axios.get('http://dontj.top/dbcd/loginAPI?Id=' + username + "&Password=" + password + '&Auth=' + id).
                then(respons => {
                    if (respons.data.state) {
                        window.location.href = 'studentImfor.html';
                    } else {
                        console.log("账号或密码错误");
                    }
                })
            // window.location.href="studentImfor.html?username="+username;

        },
        loginS: function (id) {
            var username = this.username;
            var password = this.password;
            axios.get('http://dontj.top/dbcd/loginAPI?Id=' + username + "&Password=" + password + '&Auth=' + id).
                then(respons => {
                    if (respons.data.state) {
                        window.location.href = 'Srecruit.html';
                    } else {
                        console.log("账号或密码错误");
                    }
                })
            // window.location.href="studentImfor.html?username="+username;

        },
    },
})
axios.defaults.withCredentials = true;
