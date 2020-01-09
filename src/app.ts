// this is app.js. Myprogram will start with here.
// 导入自定义模块

import {Student} from "./Student";
import {variableTest} from "./variableTest";
import {interfaceTest} from "./interfaceTest";
import {classTest} from "./classTest";


let pedro = new Student("董", "庆林");
const pedroFullname: string = pedro.fullName;
console.log(pedroFullname);

// variableTest();
// interfaceTest();
classTest();
