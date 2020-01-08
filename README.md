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

