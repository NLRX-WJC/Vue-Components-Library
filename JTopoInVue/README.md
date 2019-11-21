#  1.前言

[jTopo（Javascript Topology library)]([http://www.jtopo.com](http://www.jtopo.com/)) 是一款完全基于HTML5 Canvas的关系、拓扑图形化界面开发工具包。其体积小，性能优异，由一群开发爱好者来维护。唯一感觉不足的是它是一个纯`js`库，没有像使用`ES6`语法，不能像模块化开发那样使用`import`导入，

由于博主的项目是使用vue-cli搭建的模块化开发项目，想要使用第三方库最好的方式是通过`npm install xxx`安装，然后在项目里`import xxx`来使用。但是在`JTopo`官网上并没有发现有该库的`npm`包，在`www.npmjs.com`上搜索`JTopo`，虽然找到了该库的`npm`包，但是这些包都是由一些个人开发者通过修改源码上传的，并且年限过久，博主担心直接使用的话可能会有一些诡异的`bug`，所以博主研究了一下，如何在`vue-cli`项目中直接导入第三方`js`库，幸运的是，很快就找到了办法，并且很容易哈，现将方法记录下来，并提供demo，供大家参考。

# 2.解决办法

我们知道，无论是什么项目，最终通过打包后跑在浏览器上的肯定是一个`html`文件，在`Vue`中就是根目录下的`index.html`,在该文件中会将`webpack`打包后的`build.js`文件通过`<script>`标签方式引入，既然如此，我们可以大胆想象一下，我们可以认为`jtopo.js`就是`webpack`打包输出的文件，我们也将其手动在`index.html`文件中通过`<script>`标签方式引入是不是就可以使用了呢。通过实验，果真如此。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JTopoInVue</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/lib/jtopo-0.4.8-min.js"></script>
    <script src="/dist/build.js"></script>
  </body>
</html>
```

这样引入之后，我们就可以在项目中按照`jtopo`官方文档那样使用了该库啦。

# 3.不足之处

`jtopo`官网还提供了工具栏，该工具栏功能是在`toolbar.js`中实现的，而该`js`文件内部依赖了`jQuery`，所以要想在项目中使用该工具栏，必须安装`jQuery`，而博主在项目中没有使用工具栏，所以就没有在继续研究，如果有这方面需求的小伙伴可自行研究使用。

# 4.运行demo

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

