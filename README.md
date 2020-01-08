# typescript学习笔记

## 开始前准备
1. github 托管
命令行方式

        git init
        git add .
        git commit -s "First commit with init."
        git remote -v
        git remote set-url origin URL
        git remote add origin ...git
        git stash// 藏
        git pull --rebase origin master// 重新指定
        git push -u origin master
        touch .gitignore
        .idea
        *.iml
        git rm -r -n
        
2. typescript 编译器
命令行方式

        npm config set registry https://registry.npm.taobao.org
        npm config set registry https://registry.npmjs.org
        npm install -g cnpm --registry=https://registry.npm.taobao.org 
        cnpm install -g typescript//安装tsc编译命令
        tsc -v
        
3. typescript 编译器代码自动化配置

    TscInit.ts 命令行编译执行
        
        tsc TscInit
        node TscInit

4. 实时编译和测试
命令行方式

        npm run build
        npm run app
        
## 启动类
代码编写
        
       - Student.ts
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
       
       - app.ts
       // this is app.js. Myprogram will start with here.
       // 导入自定义模块
       
       import {Student} from "./Student";
       
       let pedro = new Student("董", "庆林");
       const pedroFullname: string = pedro.fullName;
       console.log(pedroFullname);
       
## 变量类型
代码编写测试

        // 一、基础变量类型
        // 1、布尔类型
        let isDone: boolean = false;
        // 2、数值类型// decimal
        let decimal: number = 6;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;
        // 3、字符串，字符串格式化
        let name: string = "pedro";
        name = "林青冬";
        let sentence: string = `I am ${name}.`;
        
        // 二、集合类型
        // 4、数组
        let numberList: number[] = [1, 2, 3];
        let otherNumberList: Array<number> = [1, 2, 3];
        // 5、元组
        let mapTuple: [string, number];
        // Initialize it
        mapTuple = ['hello', 10]; // OK
        console.log(mapTuple);
        // 6、枚举
        enum Color {Red, Green, Blue}
        let green: Color = Color.Green;
        console.log(green);
        
        // 特殊类型
        // 7、any
        let anyList: any[] = [1, true, "free"];
        anyList[1] = 100;
        // 8、void
        function warnUser(): void {
            console.log("This is my warning message");
        }
        // 9、null和undefined
        // 10、never类型表示的是那些永不存在的值的类型。
        // 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
        // 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
        // never类型是任何类型的子类型，也可以赋值给任何类型；
        // 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
        // 即使 any也不可以赋值给never。
        // 返回never的函数必须存在无法达到的终点
        function error(message: string): never {
            throw new Error(message);
        }
        
        // 推断的返回值类型为never
        function fail() {
            return error("Something failed");
        }
        
        // 返回never的函数必须存在无法达到的终点
        function infiniteLoop(): never {
            while (true) {
            }
        }
        
        // 11、object
        // object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
        // 使用object类型，就可以更好的表示像Object.create这样的API。例如：
        function create(o: object | null): void{
        };
        create({ prop: 0 }); // OK
        create(null); // OK
        create(undefined); // OK
        // create(42); // Error
        // create("string"); // Error
        // create(false); // Error
        
        // 三、类型断言
        let someValue: any = "this is a string";
        // let strLength: number = (<string>someValue).length;
        let strLength: number = (someValue as string).length;
        
## 变量声明
let和const是JavaScript里相对较新的变量声明方式。
像我们之前提到过的，let在很多方面与var是相似的，
但是可以帮助大家避免在JavaScript里常见一些问题。
const是对let的一个增强，它能阻止对一个变量再次赋值。

即const定义常量，根据java编程规范，可以使用大写加下划线方式命名。

        const JAVA_HOME: string = "D:/jdk/bin";

let定义变量，而且请你尽管忽略javascript var变量提升的稀奇古怪的脑洞，
只用考虑块级作用域，即以大括号为界限的变量声明周期。
        
        let tom = "我是tom";
        {
            let tom = "是我tom";//新声明的tom变量
            //tom = "是我tom"//没有重新声明，使用的是第大括号外的tom
            console.log(tom);// 是我tom
        }
        console.log(tom);//我是tom
