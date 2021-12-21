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

            axios.post("http://localhost:8080/Stu/addStuAPI", data).
                then((result) => {
                    console.log(result);
                }).catch((err) => {
                    console.log(err);
                });
        }
    },
})
