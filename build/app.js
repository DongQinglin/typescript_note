"use strict";
// this is app.js. Myprogram will start with here.
//
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
let pedro = new Student_1.Student("董", "庆林");
const pedroFullname = pedro.fullName;
console.log(pedroFullname);
