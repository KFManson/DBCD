var vm = new Vue({
    el: "#nav",
    methods: {
        goImfor: function () {
            window.location.replace("studentImfor.html");
        },
        goAdd:function () {
            window.location.replace("add.html"); 
        }
    },
})