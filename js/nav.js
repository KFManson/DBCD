var vm = new Vue({
    el: "#nav",
    methods: {
        goImfor: function () {
            window.location.href = ("studentImfor.html");
        },
        goAdd: function () {
            window.location.href = ("add.html");
        },
        goRecruit: function () {
            window.location.href = ("recruit.html");
        },
        goAddrecruit: function () {
            window.location.href = ("addRec.html");
        },
        goAddenterp: function () {
            window.location.href = ("addEnterp.html");
        },
        goEnterp: function () {
            window.location.href = ("enterp.html")
        },
        goSEnterp:function () {
            window.location.href =("Senterp.html")
        },
        goSRecruit:function () {
            window.location.href=("Srecruit.html")
        }
    },
})
var vm = new Vue({
    el: "#top",
    data() {
        return {
            flag: 0,
        }
    },
    methods: {
        change: function (flag) {
            this.flag = flag;
        },
        esc: function () {
            window.location.replace("login.html");
        }
    },
})