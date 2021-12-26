var vm = new Vue({
    el: "#nav",
    methods: {
        goImfor: function () {
            window.location.href=("studentImfor.html");
        },
        goAdd:function () {
            window.location.href=("add.html"); 
        },
        goRecruit:function () {
            window.location.href=("recruit.html"); 
        },
        goAddrecruit:function () {
            console.log(1);
            window.location.href=("addRec.html"); 
        }
    },
})