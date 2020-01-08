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
