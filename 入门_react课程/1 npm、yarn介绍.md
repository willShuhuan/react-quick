# 腾讯课堂react入门课程
#### [课程地址](https://www.bilibili.com/video/BV1hE411c7L1?p=2)
完整学习笔记：    
[完整代码戳git](https://github.com/willShuhuan/react-quick)    

[React第一篇 npm、yarn介绍](https://juejin.im/post/5ec02d546fb9a0436a7c76d5)     
[React第二篇 React语法](https://juejin.im/post/5ec02dbe5188256d545feb24)     
[React第三篇 单页应用开发](https://juejin.im/post/5ec02eb95188256da20e806d)     
[React第四篇 路由&Hooks](https://juejin.im/post/5ec02f1af265da7ba65f90fb)     
[React第五篇 综合应用（登录+列表）](https://juejin.im/post/5ec030666fb9a0433a190fd4)

## Node
Node.js 是一个基于Chrome V8引擎的javaScript运行环境，相当于一个看不见的黑盒子（没有界面）    
作用：
- 前端开发环境： webpack + npm插件 + Server
- 服务端动态编程语言： Java Web ，Php Web， Node Web

## NPM 
#### [NPM官网](https://www.npmjs.com/)
- 概念：NPM是包管理器
- 用法：
  - npm -v 
  - npm init 初始化配置信心  生成package.json
  - npm install | npm install -g  局部安装|全局安装
  
### npm创建react项目  
- cd mkdir frontWorkspace 创建前端项目工作空间
- cd frontWorkspace 进入工作空间
- npm init 初始化,package.json已经创建完成
- ls 列出目录下文件
- mkdir src 创建src目录
- cd src  进入src目录
- vi index.js 创建入口文件
- npm install react --save  安装react 并保存到package.json中，生成了node_modules文件夹
  - 这时package.json会自动生成依赖代码   
  ``"dependencies": {
        "react": "^16.13.1"
      }
  ``
  - 如果没有node_modules文件夹，而package.json中有react依赖，执行npm install（简写npm i）命令，
  react也会被同步进来
  
### npm插件发布
- cd [要发布插件的目录]
- npm adduser 登录
- npm publish 发布到npm平台
- npm config set registry https://registry.npmjs.org/
- npm config set registry https://registry.npmjs.taobao.org/
- npm unpublish[包名] -force

## Yarn
#### [Yarn中文官网](https://yarn.bootcss.com)
前端的包管理器    
yarn缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，
因此安装速度更快。


- 速度更快 更安全 更可靠
- npm install yarn -g  //全局安装
- npm install yarn@1.xx.x -g //安装指定版本
- npm upgrade yarn -g  //全局更新
- 语法
  - yarn -v 查看版本
  - yarn init
  - yarn install 
  - yarn add/remove 安装新插件/移除 （等效npm install xxx ）
  - yarn publish/login/logout  发布插件到npm平台
  - yarn run 运行脚本
    - 例:修改package.json下脚本，执行yarn run npm_version 脚本   
    ````
    "scripts": {
        "npm_version": "npm -v"
      }
    ````
    -

 