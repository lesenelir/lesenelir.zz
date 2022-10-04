---
title: 'Next.js Official'
date: '2022-09-28'
---

# Nextjs Learn By Website

>该文档教程来自于Nextjs英文文档

## Basic Knowledge

### 1. About Nextjs

**构建web application关心要素：**

- user interfaces（UI）用户界面接口：用户和app之间的交互
- 路由：用户在app之间的切换
- 数据获取：后台数据存储，以及前台如何获取
- 渲染：何时何地呈现静态或动态内容
- 第三方服务整合：CMS、auth、payments等，如何和第三方服务平台链接
- 基础设施：在哪部署app，例如Serverless、CDN、Edge
- 性能提升：为终端用户提供性能体验
- 稳定性：app随着用户、数据、流量增多的稳定性
- 开发体验

>对于以上出现的问题，需要开发者在开发应用时考虑是自己解决，还是交给框架解决

**React是什么：**

>Javascript Library 用于构建可交互的用户界面

- React有非常多的第三方生态，React只做视图层的渲染

**Next.js是什么：**

>React的全栈框架，允许开发者创建网络应用块

- 作为一个框架，Nextjs处理React视图层所需要的工具配置，为应用提供额外的功能和结构、优化方法
- Nextjs是在client 和 server 之间的一个框架
- UI由React绘制，其他的功能如：routing路由、data fetch数据获取、integrations集成开发环境由Nextjs来完成

---

### 2. From javascript to React

>浏览器会把HTML解析为DOM树，DOM树是HTML代码和用户界面的映射
>
>可以使用Javascript监听DOM元素，并对DOM元素进行操作

script标签可以对DOM进行增删修改

>HTML源文件代表初始内容文件，DOM代表更新后的page内容

```js
// 命令式编程
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const headerContent = document.createTextNode('Develop. Preview. Ship);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

- React框架是Declarative声明式编程， 原始用JS操作DOM是Imperative命令式编程
- Imperative命令式编程：告诉UI如何how更新，关心每一步的具体操作
- Declarative声明式编程：告诉UI最后想得到怎么样的UI页面，让React框架去做

**Getting Started with React：**

>react: React核心Librart ； react-dom: 给出具体的dom方法使得react可以与dom操作

**JSX:**

>JSX是一个javascript的语法扩展，允许使用类似的HTML语法来描述用户界面

- JSX要用babel script 进行转换`type=text/jsx`
  - `<script type="text/jsx"> Some React Code... </script>`
- babel的作用是把JSX转换为一个名为React.createElement()函数调用

**components：**

- 类似于乐高积木
- 组件的存在意义：进行代码的可重用性 + 拆分更小的块方便维护

**Component Trees：**

- 组件的嵌套会形成Component Tree组件树
- data flows数据是在组件树中从上到下依次渲染
- props 是一个对象， 可以使用对象解构的方式在子组件中解构出数据

**列表渲染**

- react需要用key来标识数组中的项目，key的作用是为了知道哪些元素要在DOM中更新
- 建议：在每一次列表渲染map中都要使用key

**State and event handlers：**

- React中有很多用户可以响应的事件：onChange onClick....
- Hooks 可以给组件添加额外的逻辑
- state是一个组件的内部状态，而props是一个组件的外部配置项
- state状态信息可以传入子组件中，但是修改更改state的逻辑应该写在原组件中

> React要单独把UI --> 有特定功能的应用，比较困难。但是Nextjs可以很好的做到这一点

**Nextjs优势：**

- 提供了更多的配置和额外的功能以便构建更好的React应用

---

### 3. From React to Next.js

>npm: node的包管理工具
>
>Nextjs 有让JSX转变为valid Javascript to let browsers can understand

package：react react-dom next

---

### 4. How Next.js Works

>React 不关心你是如何去构建你的app（声明式），Next.js提供了一个应用程序的框架

**关心的问题：**

- 代码在开发者模式 和 生产模式之间的区别
- 代码何时运行：构建时Build Time  &  运行时Runtime
- 何时渲染：客户端渲染 & 服务端渲染

**从开发模式到生产模式 From development to production:**

>环境：代码在哪个环境运行
>
>开发环境：本地环境
>
>生产环境：应用要部署在云服务器上

- 开发模式Nextjs优化了开发者的开发体验（TypeScript、ESLint、Fast Refresh）
- 生产模式Nextjs优化了用户的体验
- 代码从开发模式到生产模式需要：编译compiled、打包bundled、缩小体积minified、代码碎片code splitting

>Nextjs 底层有Rust写的编译器 和 SWC平台（用于编译、缩小体积、打包的平台）

**编译compiling:**

- 开发者写的JSX、Typescript、ES6+，这些代码需要编译为Javascript，从而让浏览器可以识别

```js
// 编译举例：
// JSX --> React.createElement('div', null, 'description content')
```

- 代码编译存在于开发阶段也存在于生产模式阶段

**缩小体积Minifying：**

- 将编译后的代码在不改变功能的前提下缩小体积，从而增强应用性能，如：删除注释、空格、缩进等
- Nextjs自动将js、css文件缩小体积以便用于生产模式

**打包Bundling：**

- bundle解决项目的依赖和合并问题
- 当用户请求页面时，减少文件的请求数量

**代码分割code splitting:**

>目的：只加载需要加载的代码，以提升加载速度。
>
>本质：只在“进入点”加载代码

- Nextjs 有内置的代码分割技术
- pages文件夹下的代码会自动的只在自己的要加载的时候懒加载
- 初始页面加载后，nextjs会预加载用户可能要浏览的页面代码

**构建时和运行时 Build Time and Runtime:**

- Build Time: nextjs 会把代码转换优化为专门为生产的代码

- Runtime（request time）：应用程序部署后，响应用户请求的时间段

**客户端和服务器client and server：**

- 客户端：浏览器、用户设备，发起请求等待服务器响应
- 服务器：数据中心，存储代码，接受请求，由后台进行计算返回数据

**渲染rendering：**

>渲染：将react代码转变为html页面，这个就是渲染（绘制页面，呈现内容过程）
>
>渲染可以发生在客户端、服务器；渲染也可以发生在build Time 和 runtime

- Nextjs可以提供三种渲染方式：服务端渲染Server-Side Rendering 、 静态网站生成 Static Site Generation 、 客户端渲染 Client-Side Rendering

- Pre-rendering 预渲染：
  - SSR 和 SSG 都是预渲染，在发送客户端之前就提前将react转html渲染好页面
- Client-Side rendering 客户端渲染 vs 预渲染
  - 客户端渲染：初始的渲染工作发生在客户端
  - 传统react应用，客户端从服务器得到一个id box的div标签，开始构建ui
  - 客户端渲染如果在进行中时，用户会看到空白的界面

>默认情况下，Nextjs预渲染pages文件夹下的所有页面
>
>但Nextjs 中也可以使用useEffect 或 useSWR 来实现特殊组件的客户端渲染

**预渲染 pre-rendering:**

>预渲染包含两种： SSR 和 SSG

- Server-Side Rendering：
  - HTML页面是每一个请求在服务端生成
  - 通过 `getServerSideProps`选择在服务端渲染页面
  - React18 和 Next12 推出了 服务端组件，组件的渲染在服务端

- Static Site Generation：
  - 静态网页生成的HTML生成在服务端，但服务器不在应用部署后runtime运行，服务器只在buildTime应用部署时运行
  - 通过`getStaticProps`选择在服务端渲染页面

>Nextjs 的魅力在于：可以根据开发者的使用情况，选择最合适的页面渲染方式（data fectch）
>可以在page文件夹下选择合适的渲染方式

**CDNs and the Edge:**

>应用部署上线后，应用程序代码可以分发到origin servers、CDNs、Edge

- 源服务器 Origin Servers
  - 服务器：存储运行应用程序的计算机
  - 用origin 来 区分 源服务器和 其他可以分发应用程序代码的地方（CDN、Edge）
- 内容分发网络 CDN
  - CDN一般放置HTML、image，CDN存在于 origin 和 client 之间
  - 减少了源服务器的负担，不用所有的计算都在源服务器上；给用户的响应更快

>Nextjs可以提前完成pre-render预渲染工作，所以CDN可以很好的存储预渲染后的页面

**The Edge：**

- CDN是Edge的一种，CDN是在网络边缘部署静态内容；Edge可以存储可以运行的代码
- 缓存和代码的执行都可以在Edge侧完成
- 通过`Middleware`来完成在边缘服务器上运行代码

---

## Create a Next.js App

Nextjs具备的功能：

- 基于文件页面的路由系统
- 在每一个page文件下都支持预渲染（SSR 和 SSG）
- 自动的代码分割技术，从而使得页面加载更快
- 客户端路由
- 开发环境的Fast Refresh
- 内置CSS和Sass和 CSS-in-JS
- API路由

创建nextjs项目: `npx create-next-app xxx`

### 1. Navigate Between Pages

>学习目标： file-routing + 利用link组件来实现页面之间的导航 + 内置的代码分割和预取

- File-Routing：
  - 根据文件夹的结构来管理路由
  - pages是根据文件名和路由系统相关联的
  - 只要在pages文件夹下创建一个js文件 就是URL

```
pages/index.js   ---> URL:  /
pages/posts/first-post.js  --> URL:  /posts/first-post
```

- Link Component：
  - 在网站上link 不同的page用<a>标签
  - link组件可以进行客户端导航的功能
  - Link组件类似于a标签，也是用href属性来进行页面的切换

- 客户端导航Client-Side Navigation:

  - >客户端导航是利用js来实现页面切换，这比浏览器所做的默认导航要快

  - 客户端导航会重新刷新页面

- 代码分割和prefetching（in production）

  - nextjs会自动进行代码分割技术，每个页面只加载该页面需要加载的内容
  - 主页面被渲染时，其他页面的代码不会被渲染，从而加快页面加载速度
  - 当link组件出现在浏览器页面时，nextjs会在后台自动解析link组件对应的page页面，当点击后，就可以立刻的显示出link组件后要访问的页面

>Nextjs 通过 代码分割、客户端导航、生产环境下的prefetching 来优化性能的提升

---

### 2. Assets Metadata and CSS

>Nextjs 拥有内置的CSS 和 Sass。
>
>problem： nextjs如何处理静态资源（图片、metadata）

目标：

- 如何新增静态文件 static files（images）
- 如何给每一个page页面下新增自定义head标签的内容
- 如何利用CSS Modules创建一个可重用的React component
- 如何创建global CSS in `pages/_app.js`

**资源 Assets：**

>静态资源都写在`public`文件夹下，该文件夹内的文件可以在应用程序的根部引用， 类似于`pages`

Nextjs提供了一个Image组件来解决诸如：图片的响应式、优化图片等问题

- Image组件 和 Image优化

>Image组件是在传统HTML <img> 标签基础上新增功能，以适用现代web
>
>默认提供Image Optimization（优化图片的尺寸）
>
>nextjs不是让图片在build time 时进行优化，而是在images需要时进行优化（图片默认懒加载）

Imgae组件提供 Resizing 和 optimizing images 功能

**元数据Metadata：**

>如何在Nextjs中修改head标签内的标签内容？

`<Head>`标签是Nextjs提供的类似于<head>标签，允许提供修改head标签内的内容

**第三方的js-Third-Party Javascript:**

>使用`Script`组件额外执行和获取脚本来进行优化 （指定第三方脚本）

```jsx
// strategy: 第三方js脚本何时加载
// onLoad: js脚本加载完毕后执行的js代码
<Script
 	src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() => console.log(`script loaded correctly`)}
/>
```

**CSS Styling:**

>CSS.Modules 允许在组件级别上自动创建唯一的类名，从而在局部范围上对组件进行划分

`import styles from './layout.module.css'`

`styles.container`

css module 的独特之处：

- CSS默认是全局加载，使用cssmodule可以实现css的局部加载

- css module 会为标签生成一个唯一的类名，只要用css module 就不需要考虑类名重复的问题
- 代码分割技术也同样适用于css module，使得page页面的css是最少的
- css module 构建时提取.css文件

**布局组件Layout Component:**

>不是页面的组件，在top-level目录下创建components文件夹，该文件夹存储pages需要的组件

- 常见用一个Wrapper做一个封装

**全局样式Global Styles：**

>css module 适用于 每一个单独的组件式样式；global css 适用于所有页面的样式

- 全局样式基本上都重新创建一个styles文件夹，将样式写在该文件夹内
- 在pages/_app.js 组件内引入全局样式，因为该js文件是全局样式组件

---

### 3. Pre-rendering and Data Fetching

>如何在我们这个app中获取data，将data存储在file system or elsewhere（database、Headless CMS）

目标：

- Nextjs pre-rendering功能
- 两种 预渲染pre-rendering模式：SSG 静态网站生成、SSR 服务端渲染
- Static Generation with data 和 without data
- 使用`getStaticProps`将外部数据导入相关page页面
- 使用`getStaticProps`的有用信息

**预渲染 pre-rendering：**

>Nextjs默认是预渲染所有pages，==> Nextjs提前生成HTML页面，而不是在客户端去生成HTML页面
>
>预渲染的好处： 有利于提升页面加载的速度、性能  + 有利于SEO

Nextjs提前生成好HTML静态页面，允许用户不跑javascript代码就可以查看网站的UI

React 是 遵循客户端渲染的模式

**两种预渲染模式Two Forms of Pre-rendering：**

>Nextjs有两种预渲染模式：Static Generation & Server-side Rendering
>
>两种预渲染模式的区别在于：何时进行HTML页面的生成
>
>可以为不同的pages选择不同的pre-rendering模式，可以为**大部分页面使用static Greneration，为少部分pages 使用 Server-side rendering**

- Static Generation：生产模式下：在build Time 时生成HTML页面，生成的HTML页面在每一次请求都复用（只在构建时提前生成好HTML页面，每一次请求都复用同一个页面）
- Server-side Rendering：生产模式下：在每一次请求时才会去生成最新的HTML页面（根据请求的不同，同一页每次都重新解析生成最新的HTML页面）

problem：何时使用static Generation，何时使用 SSR？

>Nextjs 建议 使用 Static Generation (with or without data)，因为页面构建只发生一次，并由CDN提供服务。
>
>如果可以“**用户请求前预先渲染这个页面**”，就可以使用 Static Generation，如果页面的渲染会根据每次请求都更新数据，则不适用Static Generation
>
>SSR 会根据每次用户请求的数据不同在服务端预先渲染好页面

**预渲染和数据获取Pre-rendering and Data Fetching:**

>Static Generation with data ,or without data。
>
>有些时候页面的渲染需要额外的数据，访问file system，or 查询database在build time

当 static Generation **需要数据**才能渲染时（应用for production）：首先先会向数据库请求额外的数据，再根据请求回来的数据，进行渲染HTML页面

>当SSG需要数据再渲染时，可以通过getStaticProps异步请求数据，并将数据作为组件的props返回给组件

- 通过`getStaticProps`方法来请求data数据
- `getStaticProps`有该方法，则说明组件有数据依赖，在预渲染之前需要先获取数据

```js
export default function Home(props) { ... }

// 该方法运行在生产环境 runs at build time in production
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  // passed to the `Home` component
  // 获取数据后，可以将数据作为props传递给要渲染的相应page
  return {
    props: {
      ...
    }
  }
}
```

**Blog data - 使用getStaticProps:**

- `npm install gray-matter` 安装gray-matter，可以解析md文件的元数据
- 在lib文件夹下创建功能函数utility function，读取数据文件系统的数据
- 获取blog数据 ，在index的page下添加 `getStaticProps`方法，以便让页面渲染之前去获得data数据

**getStaticProps 使用细节：**

>getStaticProps 中的代码只运行在服务端，不会运行在客户端，不会为浏览器打包成js的bundle。

- getStaticProps 可以使用请求数据的方法如fetch、axios 来获取数据
- getStaticProps 也可以直接进行数据库的查询
- 开发模式：getStaticProps 为每一次请求都会运行
- 生产模式：getStaticProps只运行在Build Time构建时。getStaticProps只在构建时才运行一次，所以getStaticProps不可以接受http请求头传递的数据、query parameters等。getServerSideProps可以拿到这些参数数据，因为getServerSideProps 只每次请求都会运行
- getStaticProps 智能在page页面下导出

**在请求时获取数据 Fetching data at request time：**

>在请求时获取数据，并将数据传递给组件，在预渲染时根据数据构建HTML页面，则需要Server-Side Rendering
>
>如果要使用Server-Side Rendering，则需要导入`getServerSideProps`方法

- getServerSideProps(**context**)在每次用户请求都会调用这个方法，该函数的参数context 包含用户请求的参数
- getServerSideProps 的渲染方式 要比 getStaticProps的渲染方式慢

**客户端渲染：Client-side Rendering：**

>客户端渲染的场景：私人的、用户个人的page页面、仪表盘，无需考虑SEO时，可以利用客户端渲染 client-side rendering
>
>页面加载，客户端利用JavaScript通过fetch获得数据，从而填充要渲染的区域

**SWR：**

一个获取数据的hook，useSWR。

客户端渲染强烈推荐使用useSWR

```jsx
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
```

---

### 4. Dynamic Routes

目标：

- 如何使用getStaticPaths静态地生成具有动态路由的页面
- 如何编写getStaticProps来获取每篇博客文章的数据
- 如何利用`remark` 来重新render markdown （markdown转html）
- 如何利用动态路由来link 一个 page

**页面路径取决于外部数据 page path depends on external data:**

>有时候不仅页面内容page content 需要外部数据 external data；同时页面路径 page path 还需要依赖外部数据。
>
>Nextjs允许根据外部数据静态生成带有路径的页面

目标：根据外部数据生成动态路由的页面

动态路由[xxx].js

getStaticPaths() ===> 需要返回动态路由xxx可能的值

getStaticProps({params}) ===> 接收xxx作为参数

需要根据xxx来渲染动态路由相对应的页面

**总结：Statical Generate pages with dynamic routes: **

- 创建/pages/posts/[id].js
- 一个React组件包含渲染这个页面
- getStaticPaths：**return 一个数组**，数组元素是id所有的可能value值
- getStaticProps：渲染页面前拿到数据，根据id来指定要获得的data数据

**动态路由使用细节Dynamic Routes Details：**

 [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation), [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation) 可以从别的数据源额外获得数据

- 开发模式，getStaticPaths会在每一次请求都运行；生产模式，getStaticPaths只在构建时运行一次
- `pages/posts/[...id].js` 可以匹配matches `/posts/a`, but also `/posts/a/b`, `/posts/a/b/c` and so on.

**动态路由渲染流程：**

- getStaticPaths 获取所有id可能的值，以数组的形式返回给getStaticProps
- getStaticProps根据特定id的值去请求该id对应页面特定的值
- 把getStaticProps请求后的值传递给React组件，进行特定页面的渲染

---

### 5. API Routes

>API路由允许在Nextjs应用程序中创建一个API端点

目标：

- 如何创建API路由
- 一些有用的API路由

```js
// req = HTTP incoming message, res = HTTP server response
// 在/pages/api文件夹
// 可以作为无服务器功能部署
export default function handler(req, res) {
  // ...
}

// 举例：
// page: /pages/api/hello.js 
// url: /api/hello
// 输出： json
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```

- API路由中的req是http.IncomingMessage的一个实例
- API路由中的res是http.ServerResponse的一个实例

**API Routes 细节：**

>API Routes 不会作为客户端的bundle
>
>使用场景：将输入数据保存在数据库中、与第三方API进行通信、从CMS预览草稿的内容

- 不要从`getStaticProps`和`getStaticPaths`获取API Routes 中的内容

`getStaticProps`和`getStaticPaths`只在服务端运行，并不在客户端运行，即这两个函数不作为bundle保存在js中，可以直接进行数据库的查询

- API Routes使用较多的场景：处理Form Input

在page页上创建一个form表单，发送一个POST请求给API Route，并将数据保存在数据库中

---

### 6. Deploying your next.js App

目标：

- 如何部署Nextjs至Vercel
- DPS的工作流：Develop、Preview、Ship
- 如何部署Nextjs至自己的主机供应商

---

## Note

总结：

- 预渲染可以携带data，也可以不携带data
- 如果预渲染需要携带数据，则可以在服务端编写`getStaticProps`或`getServerSideProps`

- 客户端渲染的场景：
  - high frequency （stock data） 高频变化的数据
  - highly user-specific data （last orders in an online shop）特定用户定制的数据
  - partial data 仪表盘（后台管理系统），数据高度个人化，作预渲染数据会发生变化，没意义
- 预渲染和客户端渲染可以结合，首先先进行预渲染，然后通过fetch等api进行从客户端获取最新数据
