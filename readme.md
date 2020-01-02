## next js 默认支持了webpack的HMR，热更新

## 页面跳转，不要使用a标签在应用程序内，除非你需要链接到第三方网站。
## 安装next的link插件，由next做路由管理

## link 并没有代理所有a标签的属性，他只是代理了一层路由， link很强大，之后回来继续学习

## 创建一个common header，使它可以被多个页面共享

## next特殊目录只有 pages和public

## 创建一个Layout组件
1. 通过props.children来传递需要包装的组件
2. 通过高阶组件，直接传递需要修饰的组件作为参数
3. 通过其他属性值传递需要修饰的组件，例如可以在组件的属性中传入content的，最后在修饰这个content

## import useRouter from next/router, 使用useRouter返回一个路由对象
We import and use the useRouter function from next/router which will return the Next.js router object.
In this case, we are using the router's query object, which has the query string params.
Therefore, we get the title with router.query.title.
it's a React Hook, and it works with functional components.


## clean url with dynamic routing
add subfolder "post"
简单的创建一个p文件夹，记得不要和p现有page起同名，然后在新建的文件夹下面创建[id].js
在导航页面，href到之前指定的那个路径，例如 <Link href="/p/[id]" as={`/p/${props.id}`}></Link>.指定as属性，路由会对应匹配这个动态结果


## fetching data for pages
getInitialProps can only be added to the default component exported by a page, adding it to any other component won't work.
言下之意就是这个异步函数只能在页面组件级别，不在模块组件级别

context包含的是路由信息

## styling components
https://github.com/zeit/styled-jsx#one-off-global-selectors

## 路由在开发模式是忽略路径大小写的，在生产环境是严格区分大小写。
