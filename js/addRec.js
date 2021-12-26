var vm = new Vue({
    el: "#add",
    data() {
        return {
            recruitId: "",
            enterpId: "",
            endTime: "",
            title: "",
            content: "",
        }
    },
    methods: {
        reset: function () {
            this.recruitId = "";
            this.enterpId = "";
            this.endTime = "";
            this.title = "";
            this.content = ""
        },

        add: function () {
            let recruitId = this.recruitId;
            let enterpId = this.enterpId;
            let endTime = this.endTime;
            let title = this.title;
            let content = this.content;

            let data = {
                "recruitId": recruitId,
                "enterpId": enterpId,
                "endTime": endTime,
                "title": title,
                "content": content,
            }

            console.log(data);
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
    },
})
