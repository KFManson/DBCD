var vm = new Vue({
    el: "#add",
    data() {
        return {
            EnterpId: "",
            EnterpName: "",
            EnterpAddress: "",
            EnterpIndustry: "",
            EnterpIntroduction: "",
        }
    },
    methods: {
        reset: function () {
            this.enterpId = "";
            this.enterpName = "";
            this.enterpAddress = "";
            this.enterpIndustry = "";
            this.enterpIntroduction = ""
        },

        addEnterp: function () {
            let EnterpId = this.EnterpId;
            let EnterpName = this.EnterpName;
            let EnterpAddress = this.EnterpAddress;
            let EnterpIndustry = this.EnterpIndustry;
            let EnterpIntroduction = this.EnterpIntroduction;

            let data = {
                "enterpId": EnterpId,
                "enterpName": EnterpName,
                "enterpAddress": EnterpAddress,
                "enterpIndustry": EnterpIndustry,
                "enterpIntroduction": EnterpIntroduction,
            }
            
            if (!(/\d{8}/.test(EnterpId))) {
                alert("企业ID应为8位");
            } else if (!(/\S/.test(EnterpName))) {
                alert("企业名称不能为空");
            } else if (!(/\S/.test(EnterpAddress))) {
                alert("企业地址不能为空");
            } else if(!(/\S/.test(EnterpIndustry))){
                alert("企业领域不能为空");
            } else if(!(/\S/.test(EnterpIntroduction))){
                alert("企业介绍不能为空");
            }else {
                axios.post("http://dontj.top/dbcd/Enterp/addEnterpAPI", data).
                    then((result) => {
                        console.log(result);
                        if (result.data) {
                            alert('添加成功');
                            this.reset();
                        } else {
                            alert('添加失败')
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
            }
        }
    },
})
