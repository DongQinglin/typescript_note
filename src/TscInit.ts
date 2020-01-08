import * as fs from 'fs';
import * as path from 'path';

class TscInit {
    // 项目文件路径数组
    projectDirs: string[];
    // 项目配置文件数组
    configFile: string[];
    fs;
    path;
    private apptsPath: string;

    constructor(){
        this.init();
        this.makeProjectDirs();
        this.makeConfigFile();
        this.makeAppTs();

    }


    private init() {
        this.projectDirs = [
            // 'bulid',         //项目编译后的js代码,不需要,ts编译后会自动创建
            'src',              //项目原始ts代码
            'static',           //项目静态文件
            'static/scripts',
            'static/css',
            'static/assets',
            'views',            //项目html文件
        ];
        this.configFile = [
            'tsconfig.json',     //ts编译器配置文件
            'package.json'
        ];
        this.apptsPath = 'src/app.ts';
        this.fs = fs;
        this.path = path;
    }

    private makeProjectDirs() {
        for (const dirIndex in this.projectDirs) {
            const dir = this.projectDirs[dirIndex];
            this.fs.mkdirSync(dir);
            console.log(`mkdir ${dir} success.\n`);
        }
    }

    private makeConfigFile() {
        for (const fileDir of this.configFile) {
            let data: string;
            if(fileDir === 'tsconfig.json'){
                data = `
{
    "compilerOptions": {
        "module": "commonjs",   //指定生成哪个模块系统代码
        "target": "es6",        //目标代码类型
        "noImplicitAny": false, //在表达式和声明上有隐含的'any'类型时报错。
        "sourceMap": false,     //用于debug   
        "rootDir":"./src",      //仅用来控制输出的目录结构--outDir。
        "outDir":"./build",     //重定向输出目录。   
        "watch":true            //在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。
    },
    "include":[
        "./src/**/*"
    ],
    "exclude":[
        "views",
        "static"
    ]
}`;
            }else if(fileDir==='package.json'){
                data = `
{
  "name": "cn.pedro",
  "version": "1.0.0",
  "description": "Maked by Pedro.",
  "main": "app.js",
  "scripts": {
    "test": "npm test",
    "dev": "supervisor -w build ./build/server.js",
    "build": "tsc"
  },
  "author": "qinglin",
  "license": "ISC",
  "dependencies": {
    "@types/koa": "^2.0.50",
    "@types/koa-router": "^7.0.42",
    "@types/node": "^12.7.12",
    "koa": "^2.8.2",
    "koa-router": "^7.4.0",
    "nodemon": "^1.19.3",
    "ts-node": "^8.4.1",
    "typescript": "^3.6.4"
  },
  "devDependencies": {
    "@types/koa": "^2.0.50",
    "@types/koa-router": "^7.0.42",
    "nodemon": "^1.19.3",
    "ts-node": "^8.4.1",
    "typescript": "^3.6.4"
  }
}`
            }

            this.writeCommonFile(fileDir, data);


        }
    }

    private makeAppTs() {
        const fileDir = this.apptsPath;
        const data = `// this is app.js. Myprogram will start with here.

const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {

    ctx.body = 'Hello World';
});

app.listen(3000);`;
        this.writeCommonFile(fileDir, data);
    }

    writeCommonFile(fileDir: string, data: string) {
        // 同步追加和写入文件
        // 只用一次写入，不存在效率问题
        try {
            fs.writeFileSync(fileDir, data);
            console.log(`Write file ${fileDir} success.\n`);
        }catch (err) {
            console.log('Something in file system is wrong, please check at : ', err);
        }
    }
}

new TscInit();
