var vm = new Vue({
    el: "#add",
    data() {
        return {
            studentId: "",
            studentBrith: "",
            studentSdept: "",
            studentName: "",
            studentGender: "",
            studentPhone: "",
            studentAddress: ""
        }
    },
    methods: {
        reset: function () {
            this.studentId = "";
            this.studentBrith = "";
            this.studentSdept = "";
            this.studentName = "";
            this.studentGender = "";
            this.studentPhone = "";
            this.studentAddress = "";
        },

        add: function () {
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
            } else if (!(/\S/.test(studentSdept))) {
                alert("系别不能为空");
            } else if (!(/\S/.test(studentAddress))) {
                alert("地址不能为空");
            } else if (!(/\d{11}/.test(studentPhone))) {
                alert("电话号码错误");
            } else {
                axios.post("http://dontj.top/dbcd/Stu/addStuAPI", data).
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
