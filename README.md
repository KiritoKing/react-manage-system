

# 基于 React+Koa.js 的全栈人员管理应用

本应用使用Webpack+NPM构造脚本架，前后端均在一个项目内运行。

前端以React+Typescript+AntD为核心构建。

后端采用Koa.js+Node.js环境实现。

更多Commit记录请访问：[KiritoKing/student-management: 基于 React+Koa.js 的全栈人员管理应用 (github.com)](https://github.com/KiritoKing/student-management)

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />



## 目录

- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [版本控制](#版本控制)
- [作者](#作者)

### 上手指南

###### 开发前的配置要求

本应用尚未在Mac电脑测试过，产生意料之外的错误，请注意全局脚本命令和 `nodemodules` 路径是否出错

**注意：需要本地全局环境安装Webpack和Node**

###### **安装步骤**

1. 克隆Git仓库

```sh
git clone https://github.com/KiritoKing/student-management.git
```

2. 安装全部依赖

```shell
npm install
```



### 文件目录说明

```
final
├── README.md
├── /fe/
├── /server/
├── /node_modules/
├── /webpack/
└── /packages.json
```



### 部署

**注意两种模式访问的端口不同**

###### 开发模式（Dev）

1. 运行后端服务器 `npn run server`
2. 运行前端开发服务器 `npm run dev`
3. 访问 http://localhost:9000

###### 生产模式（Prod）

1. 打包页面 `npm run build`
2. 运行后端服务器 `npm run server`
3. 访问 http://localhost:9001



### 使用到的框架

- [React](https://github.com/facebook/react)
- [Ant Degsign](https://github.com/ant-design/ant-design)
- [Koa.js](https://github.com/koajs/koa)




### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。



### 作者

ChlorineC@HUST, 2022

邮箱: kiritoclzh@gmail.com



---



### 开发札记

##### 前端部分

- 项目可视化部分分为Page和Component两个部分组成
  - Page主要用于构成路由页面，管理高层状态
  - Component将页面用到的组件全部解耦合
    - 利用CSS Module实现了选择器类名的简化
    - 使部分插件能在不同页面之间复用，如`Modal`、`BreadBar`、`Layout`等
- 客户端路由使用 `React-Router` 实现，使用 `HashRouter` 作为硬实现，避免服务端的额外适配
  - 使用`Chlidren`和`Outlet`特性实现`Layout`
- 逻辑层上使用`Redux`管理全局状态树，并在部分高复用功能下使用自定义Hook
  - 创建了三个切片分别管理**学生列表信息、登陆状态信息和历史记录信息**
  - 使用两个自定义Hook
    - `useLogin` 用于获取并保持用户登陆状态（使之不会随刷新产生的状态消失而重新登陆）
    - `useHistory` 用于解析当前Path刷新历史信息树Redux，供面包屑部件使用

##### 后端部分

- 因为是初次接触后端开发，所以没有太多技术细节
- 将不同的功能拆分成单个文件，放在`/server/utils/` 目录中，使中间件表达更加简洁
- 将数据存储在json中以实现数据持久化
- 关于端口对接
  - 在Dev中使用代理实现，即对Dev-Server实现9000端口的/api到9001端口的转发
  - 在Prod中使用koa-static实现，直接在9001端口下渲染/fe/build/，即不用跨域

##### 其他部分

- 脚手架完全自己通过Webpack搭建~~（虽然考虑过next但是它的优化项不太熟反而造成了麻烦）~~，实现了**前端和后端在一个项目中构建**
- 脚手架中完整具有ESLint，Prettier和CSS Module支持



<!-- links -->

[your-project-path]: KiritoKing/student-management
[contributors-shield]: https://img.shields.io/github/contributors/KiritoKing/student-management.svg?style=flat-square
[contributors-url]: https://github.com/KiritoKing/student-management/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/KiritoKing/student-management.svg?style=flat-square
[forks-url]: https://github.com/KiritoKing/student-management/network/members
[stars-shield]: https://img.shields.io/github/stars/KiritoKing/student-management.svg?style=flat-square
[stars-url]: https://github.com/KiritoKing/student-management/stargazers
[issues-shield]: https://img.shields.io/github/issues/KiritoKing/student-management.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/KiritoKing/student-management.svg
[license-shield]: https://img.shields.io/github/license/KiritoKing/student-management.svg?style=flat-square
[license-url]: https://github.com/KiritoKing/student-management/blob/master/LICENSE.txt

