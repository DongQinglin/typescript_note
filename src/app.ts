// this is app.js. Myprogram will start with here.
// 导入自定义模块

import {Student} from "./Student";

let pedro = new Student("董", "庆林");
const pedroFullname: string = pedro.fullName;
console.log(pedroFullname);
