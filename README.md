# ntrf-gwent
来玩一局昆特牌吧  

### 目标
+ 首先单机操作双方出牌，完成游戏主体逻辑  
+ 构建简单的房间密码邀请私人对战，node后端  
+ 构建常见的游戏平台房间极致，支持多人在线游玩  
+ 封装为移动端App，桌面应用  
+ 自由模式(全卡片)，账号模式(集卡)  

### 相关知识点补充
+ vue+webpack，组件化单页  
+ 基于es6，babel结合webpack编译  
+ eslint校验  
+ nodeJs，mongodb  
+ 游戏平台，多人在线探究  
+ 移动端封装，PC端electron  

### 目录结构
+ /components - vue组件  
+ /dist - webpack打包  
+ /lib - vue、lodash等引入  
+ /style - 样式  
+ /resource - 图片等资源  
+ /resource/face - 卡片皮肤  
+ /script - 主要脚本  


### 问题笔记
+ **eslint 误报import为关键字，es6语法报错** 同时局部安装eslint和全局安装时冲突，删除全局安装的eslint，`npm uninstall -g eslint`。  


