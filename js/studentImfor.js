var vm = new Vue({
    el: "#stu",
    data: {
        stuImfor: [
        ],
        searchIm: "",
        studentId: "",
        studentBrith: "",
        studentSdept: "",
        studentName: "",
        studentGender: "",
        studentPhone: "",
        studentAddress: "",
        flag: false,
    },
    methods: {
        del: function (index) {
            let flag = confirm('确认删除？');
            if (flag) {
                axios.get("http://dontj.top/dbcd/Stu/delStuAPI?string=" + this.stuImfor[index].studentId).
                    then(respons => {
                        console.log(respons);
                    });
                this.stuImfor.splice(index, 1);
            }

        },
        search: function () {
            var searchIm = this.searchIm;
            axios.get("http://dontj.top/dbcd/Stu/QueryStuAPI?string=" + searchIm).
                then(respons => {
                    this.stuImfor = undefined;
                    this.stuImfor = new Array();
                    for (var i = 0; i < respons.data.length; i++) {
                        this.$set(this.stuImfor, i, respons.data[i]);
                    }
                    console.log(this.stuImfor);
                })

        },
        goUpdate: function (index) {
            var searchIm = this.stuImfor[index].studentId;
            axios.get("http://dontj.top/dbcd/Stu/QueryStuAPI?string=" + searchIm).
                then(respons => {
                    let data = respons.data[0];
                    this.studentId = data.studentId;
                    console.log(this.studentId);
                    this.studentBrith = data.studentBrith;
                    this.studentSdept = data.studentSdept;
                    this.studentName = data.studentName;
                    this.studentGender = data.studentGender;
                    this.studentPhone = data.studentPhone;
                    this.studentAddress = data.studentAddress;
                })
            this.flag = true;
        },
        update: function () {
            let studentId = this.studentId;
            let studentBrith = this.studentBrith;
            let studentSdept = this.studentSdept;
            let studentName = this.studentName;
            let studentGender = this.studentGender;
            let studentPhone = this.studentPhone;
            let studentAddress = this.studentAddress;

            let data = {
                "studentId": studentId,
                "studentBrith": studentBrith,
                "studentSdept": studentSdept,
                "studentName": studentName,
                "studentGender": studentGender,
                "studentPhone": studentPhone,
                "studentAddress": studentAddress,
            }

            if (!(/\d{12}/.test(studentId))) {
                alert("学号错误");
            } else if (!(/^[\u4e00-\u9fa5]{0,}$/).test(studentName)) {
                alert("姓名错误");
            } else if (!(/^男|女$/.test(studentGender))) {
                alert("性别错误")
            } else if (!(/\d{8}/.test(studentBrith))) {
                alert("出生日期错误");
            } else if (!(/\d{11}/.test(studentPhone))) {
                alert("电话号码错误");
            } else {
                axios.post("http://dontj.top/dbcd/Stu/updateStuAPI", data).
                    then((result) => {
                        console.log(result);
                        if (result.data) {
                            alert('修改成功');
                            this.reset();
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
        console.log(window.location.href);

        axios.get("http://dontj.top/dbcd/Stu/StuListAllApi").
            then(respons => {
                for (var i = 0; i < respons.data.length; i++) {
                    this.$set(this.stuImfor, i, respons.data[i]);
                }
            })
    }
})