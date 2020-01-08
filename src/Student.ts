interface Person {
    firstName: string;
    lastName: string;
}

export class Student implements Person{
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string){
        this.fullName = firstName + " " + lastName;
    }
    // 不稳定的新特性不予使用 使用public相当于创建于成员变量相同的方法变量
    // constructor(public firstName: string, public lastName: string) {
    //     this.fullName = firstName + " " + lastName;
    // }
}
// 导出语句写法
// export { Student };
// export { Student as Stu };

