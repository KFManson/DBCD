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
            window.location.href=("addRec.html"); 
        },
        goAddenterp:function () {
            window.location.href=("addEnterp.html"); 
        },
        goEnterp:function () {
            window.location.href=("enterp.html")
        }
    },
})