"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
}
exports.Student = Student;
// 导出语句写法
// export { Student };
// export { Student as Stu };
