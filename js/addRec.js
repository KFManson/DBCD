var vm = new Vue({
    el: "#add",
    data() {
        return {
            recruitId: "",
            enterpId: "",
            endTime: "",
            title: "",
            content: "",
            contact: "",
        }
    },
    methods: {
        reset: function () {
            this.recruitId = "";
            this.enterpId = "";
            this.endTime = "";
            this.title = "";
            this.content = "";
            this.contact = "";
        },

        add: function () {
            let recruitId = this.recruitId;
            let enterpId = this.enterpId;
            let endTime = this.endTime;
            let title = this.title;
            let content = this.content;
            let contact = this.contact;

            let data = {
                "recruitId": recruitId,
                "enterpId": enterpId,
                "endTime": endTime,
                "title": title,
                "content": content,
                "contact":contact,
            }

            console.log(data);
            if (!(/\d{8}/.test(enterpId))) {
                alert("企业ID应为8位");
            } else if (!(/\d{4}/.test(recruitId))) {
                alert("招聘ID应为4位");
            } else if (!(/\S/.test(endTime))) {
                alert("截止时间不能为空");
            } else if (!(/\S/.test(title))) {
                alert("标题不能为空");
            } else if (!(/\S/.test(content))) {
                alert("内容不能为空");
            }  else if (!(/\d{11}/.test(contact))){
                alert("联系方式为11位");
            } else {
                axios.post("http://dontj.top/dbcd/Enterp/AddOneRecruit", data).
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
