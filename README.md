fast-cli是一个能快速生成移动端，管理后台和大屏项目模版的脚手架工具。其目的是节省搭建新项目时间，统一项目目录结构，
减少复制粘贴带来的未知问题，统一成熟的依赖使用和最大限度统一最大代码规范等以便提高编码效率。

## 安装
1. 下载 `git@github.com:hanrongliao/cli.git`
2. 进入本项目并安装依赖 `npm i`
3. 安装 unicom-cli
    - `npm i -g ./` (通用，linux和mac os 下可能需要加`sudo`命令)
    - windows 平台下亦可 `npm run add`
    - mac os & linux平台下亦可 `npm run sadd`
    
## 使用
1. 进入新项目目录
2. 生成项目模版
    - 管理后台模版 `ft create admin`
    - 移动端模版 ` ft create mobile`
    - 大屏项目模版 `ft create screen`

## 模版
为了增强可拓展性，脚手架项目和模版分离，模版地址：[https://github.com/templates](https://github.com/templates)

## 问题
如有问题建议，欢迎提[issue](https://github.com/cli/issues)

## 代码贡献
本项目希望所有有兴趣的同事贡献代码，以便项目可以持续适应项目开发使用。
[贡献记录Commits](https://github.com/hanrongliao/cli/issues)


