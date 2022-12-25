---
title: '我所理解的递归'
date: '2022-12-25'
---

在我今年开始专注于编码的时候，递归这种思维一直是我比较头疼的问题。一来说她简单，代码层面来看确实很简单；但若说她很难，从思维层面模拟整个代码执行过程又是一件相对而言比较困难的事情。所以之前很多人包括我在内，也很难彻底的领悟递归这种程序设计。

今天写这篇博文不是说，我现在可以非常流畅的将递归运用到我的程序设计当中，而是分享一些我所了解的递归。

我将分为五个部分来介绍递归：函数调用栈、递归调用栈、递归树、Leetcode递归问题、前端递归问题

### 函数调用栈

首先阅读以下代码块：

```js
function A() {
  console.log('A Start')
  B()
  console.log('A End')
}

function B() {
  console.log('B Start')
  C()
  console.log('B End')
}
function C() {
  console.log('C Start')
  D()
  console.log('C End')
}

function D() {
  console.log('D Start')
  // do something...
  console.log('D End')
}


function main() {
  A()
}

main()

// ------------------------------------
// 最终输出结果如下：
A Start
B Start
C Start
D Start
D End
C End
B End
A End
```




