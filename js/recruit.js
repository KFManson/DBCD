var vm = new Vue({
    el: "#stu",
    data: {
        recImfor: [
        ],
        flag: false,
        searchIm:""
    },
    methods: {
        del: function (index) {
            let flag = confirm('确认删除？');
            if (flag) {
                axios.get("http://dontj.top/dbcd/Enterp/delRecruitAPI?string=" + this.recImfor[index].recruitId).
                    then(respons => {
                    });
                this.recImfor.splice(index, 1);
            }

        },
        search: function () {
            var searchIm = this.searchIm;
            axios.get("http://dontj.top/dbcd/Enterp/QueryEnterpRecruit?string=" + searchIm).
                then(respons => {
                    this.recImfor = undefined;
                    this.recImfor = new Array();
                    for (var i = 0; i < respons.data.length; i++) {
                        this.$set(this.recImfor, i, respons.data[i]);
                    }
                })

        },
        goUpdate: function (index) {
            let data = this.recImfor[index];
            this.enterpId = data.enterpId;
            this.recruitId = data.recruitId;
            this.endTime = data.endTime;
            this.title = data.title;
            this.content = data.content;
            this.enterpName = data.enterpName;
            this.contact = data.contact;
            this.flag = true;
        },
        update: function () {
            let enterpId = this.enterpId;
            let enterpName = this.enterpName;
            let recruitId = this.recruitId;
            let endTime = this.endTime;
            let title = this.title;
            let content = this.content;
            let contact = this.contact;

            let data = {
                "enterpId": enterpId,
                "enterpName": enterpName,
                "recruitId": recruitId,
                "endTime": endTime,
                "title": title,
                "content": content,
                "contact":contact,
            }


            axios.post("http://dontj.top/dbcd/Enterp/updateRecruitAPI", data).
                then((result) => {
                    if (result.data) {
                        alert('修改成功');
                        axios.get("http://dontj.top/dbcd/Enterp/QueryAllRecruit").
                            then(respons => {
                                for (var i = 0; i < respons.data.length; i++) {
                                    this.$set(this.recImfor, i, respons.data[i]);
                                }
                            })
                    } else {
                        alert('修改失败')
                    }
                }).catch((err) => {
                });


        },
        close: function () {
            axios.get("http://dontj.top/dbcd/Enterp/QueryAllRecruit").
                then(respons => {
                    for (var i = 0; i < respons.data.length; i++) {
                        this.$set(this.recImfor, i, respons.data[i]);
                    }
                })
            this.flag = false;

        }
    },
    beforeCreate: function () {
        axios.get("http://dontj.top/dbcd/Enterp/QueryAllRecruit").
            then(respons => {
                for (var i = 0; i < respons.data.length; i++) {
                    this.$set(this.recImfor, i, respons.data[i]);
                }
            })
    }
})