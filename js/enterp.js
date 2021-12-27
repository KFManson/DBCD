var vm = new Vue({
    el: "#stu",
    data: {
        entImfor: [
        ],
        searchIm: "",
        enterpId: "",
        enterpName: "",
        enterpAddress: "",
        enterpIndustry: "",
        enterpIntroduction: "",
        flag: false,
    },
    methods: {
        del: function (index) {
            let flag = confirm('确认删除？');
            if (flag) {
                axios.get("http://dontj.top/dbcd/Enterp/delEnterpAPI?string=git" + this.entImfor[index].enterpId).
                    then(respons => {
                        console.log(respons);
                    });
                this.entImfor.splice(index, 1);
            }

        },
        search: function () {
            var searchIm = this.searchIm;
            axios.get("http://dontj.top/dbcd/Enterp/QueryEnterpAPI?string=" + searchIm).
                then(respons => {
                    this.entImfor = undefined;
                    this.entImfor = new Array();
                    for (var i = 0; i < respons.data.length; i++) {
                        this.$set(this.entImfor, i, respons.data[i]);
                    }
                    console.log(this.entImfor);
                })
        },
        goUpdate: function (index) {
            var searchIm = this.entImfor[index].enterpId;
            console.log();
            axios.get("http://dontj.top/dbcd/Enterp/QueryEnterpAPI?string=" + searchIm).
                then(respons => {
                    let data = respons.data[0];
                    console.log(respons);
                    this.enterpId = data.enterpId;
                    this.enterpName = data.enterpName;
                    this.enterpAddress = data.enterpAddress;
                    this.enterpIndustry = data.enterpIndustry;
                    this.enterpIntroduction = data.enterpIntroduction;
                    this.studentPhone = data.studentPhone;
                    this.studentAddress = data.studentAddress;
                })
            this.flag = true;
        },
        update: function () {
            let enterpId = this.enterpId;
            let enterpName = this.enterpName;
            let enterpAddress = this.enterpAddress;
            let enterpIndustry = this.enterpIndustry;
            let enterpIntroduction = this.enterpIntroduction;
            let studentPhone = this.studentPhone;
            let studentAddress = this.studentAddress;

            let data = {
                "enterpId": enterpId,
                "enterpName": enterpName,
                "enterpAddress": enterpAddress,
                "enterpIndustry": enterpIndustry,
                "enterpIntroduction": enterpIntroduction,
                "studentPhone": studentPhone,
                "studentAddress": studentAddress,
            }

            if (!(/\S/.test(enterpName))) {
                alert("企业名称不能为空");
            } else if (!(/\S/.test(enterpAddress))) {
                alert("企业地址不能为空");
            } else if (!(/\S/.test(enterpIndustry))) {
                alert("企业领域不能为空");
            } else if (!(/\S/.test(enterpIntroduction))) {
                alert("企业介绍不能为空");
            } else {
                axios.post("http://dontj.top/dbcd/Enterp/updateStuAPI", data).
                    then((result) => {
                        console.log(result);
                        if (result.data) {
                            alert('修改成功');
                            axios.get("http://dontj.top/dbcd/Enterp/EnterpListAllApi").
                                then(respons => {
                                    console.log(respons);
                                    for (var i = 0; i < respons.data.length; i++) {
                                        this.$set(this.entImfor, i, respons.data[i]);
                                        console.log(this.entImfor);
                                    }
                                })
                        } else {
                            alert('修改失败')
                        }
                    }).catch((err) => {
                        console.log(err);
                    });
            }

        },
        close: function () {
            this.flag = false;
        }
    },
    beforeCreate: function () {
        axios.get("http://dontj.top/dbcd/Enterp/EnterpListAllApi").
            then(respons => {
                for (var i = 0; i < respons.data.length; i++) {
                    this.$set(this.entImfor, i, respons.data[i]);
                }
            })
    }
})