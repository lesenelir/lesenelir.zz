---
title: '我所理解的递归'
date: '2022-12-25'
duration: '10min'
---
今年当我开始专注于编码的时候，递归这种程序设计一直是我比较头疼的问题。一来若说它简单，代码层面来看确实很简单；但若说它很难，从思维层面模拟整个代码执行过程又是一件相对而言比较困难的事情。所以很多人包括我在内，也很难彻底的领悟递归这种程序设计。

今天写这篇博文不是说，我现在可以非常流畅的将递归运用到我的程序设计当中，而是分享一些我所理解的递归。

我将分四个部分来介绍递归：函数调用栈、递归调用栈、递归树、Leetcode递归问题。

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
  // do something...
  console.log('C End')
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
C End
B End
A End
```

要理解递归，首先得从函数调用栈开始说起。如上述代码块，当一个函数调用后，就会将函数压入函数调用栈中。

例如，main函数执行，则将main函数压入函数调用栈中；main函数执行函数A，则此时把A函数压入函数调用栈，并执行A函数的内容，即打印'A Start'并执行函数B；

此时把由于调用了新的函数B，需要把函数B压入函数调用栈中，并执行B函数的内容，即打印'B Start'并执行函数C；

此时由于调用了新的函数C，需要把函数C压入函数调用栈中，并执行函数C的内容，打印'C Start' 和 'C End'。截止至当前描述，控制台打印的内容依次为：“A Start、 B Start、C Start、C End”。

由此引出一个新的问题，接下去程序将如何执行？

在Javascript中，如果一个函数没有return语句，当整个函数执行完后，默认返回的是undefined，但返回哪里去呢？答案是：**哪里调用返回哪里去，并且当函数执行完后，函数调用栈执行pop操作，将该函数移除函数调用栈。**

>Q：对于`return 0` 和 `return` 有什么区别呢？
>
>A：`return 0`代表结束函数调用+函数的返回值是0，如果该函数调用语句是一个赋值语句，则变量值为0；`return`仅仅代表结束当前函数调用（函数的`return`相当于函数调用栈的pop操作）

---

### 递归调用栈

当我们弄清楚函数调用栈这个概念后，我们引出第二个概念：递归调用栈。首先我们提出：什么是递归？一个最常见也是最简单的概念是说，递归是函数自己调用自己的过程。

由此我们可以得到两个论点：

- 由函数调用栈可以得出：函数的每一次调用都会将函数存入函数调用栈；函数调用结束pop

- 由递归概念可以得出：函数自己调用自己的过程

由这两个论点我们可以推出一条推论：

>递归是把自身函数存入函数调用栈中，且当自身函数调用结束后，将自身的函数pop出函数调用栈。

由于递归的整个过程中，**函数调用栈都是存放的同一个但不同参数的函数，所以我们也把递归函数调用栈也称之为“递归调用栈”**。

下面我结合一个具体案例来解释递归。思考一个正向和逆向打印数组元素的案例：

```js
const arr = [0, 1, 2],
      len = arr.length

// 正向打印数组元素
for (let i = 0; i < len; i++) {
  console.log('arr[', i, '] = ', arr[i])	
}

// 逆向打印数组元素
for (let i = len - 1; i >= 0; i--) {
  console.log('arr[', i, '] = ', arr[i])
}
```

上面是一段极其简单的遍历数组元素的代码，但如果要用递归该如何做到呢？

递归代码如下：

```js
const arr = [0, 1, 2],
      len = arr.length

function traversal(arr, i) {
  // 递归出口
  if (i === len) {
    return
  }
  
  console.log('arr[', i, '] = ', arr[i])  // 正序打印
  traversal(arr, i + 1)
  console.log('arr[', i, '] = ', arr[i])  // 逆序打印
}

traversal(arr, 0)
// ------------------------------------
// 最终输出结果如下：
arr[ 0 ] =  0
arr[ 1 ] =  1
arr[ 2 ] =  2
arr[ 2 ] =  2 // 从这一步开始“归操作”
arr[ 1 ] =  1
arr[ 0 ] =  0
```

我将带你完整的讲述整个递归的过程：

首先Javascript进行预编译，变量声明和函数声明后，执行`traversal(arr, 0)`这条语句，进入traversal函数，并将该函数`traversal(arr, 0)`压入递归调用栈中；

进入函数此时`i === 0 && i !== len`跳过if语句块，打印出：arr[0] = 0，并执行`traversal(arr, 1)`语句，进入traversal函数，并将该函数`traversal(arr, 1)`压入递归调用栈中；

进入函数此时`i === 1 && i !== len`跳过if语句块，打印出：arr[1] = 1，并执行`traversal(arr, 2)`语句，进入traversal函数，并将该函数`traversal(arr, 2)`压入递归调用栈中；

进入函数此时`i === 2 && i !== len`跳过if语句块，打印出：arr[2] = 2，并执行`traversal(arr, 3)`语句，进入traversal函数，并将该函数`traversal(arr, 3)`压入递归调用栈中；

进入函数此时`i === 3 && i === len`，此时i的值和len的值相等进入if语句块，但此时if语句块中只有一句return，这是什么意思呢？答案已在“函数调用栈”中给出：

**return就是结束当前调用的函数，将当前函数pop出递归调用栈。**

具体来说此处将`traversal(arr, 3)`语句弹出递归调用栈，并返回至上一层函数`traversal(arr, 2)`调用位置处继续执行`traversal(arr, 2)`函数，打印出：arr[2] = 2；

此时函数`traversal(arr, 2)`全部执行完后将该函数从递归栈中弹出，并返回至上一层函数`traversal(arr, 1)`调用位置处继续执行`traversal(arr, 1)`函数，打印出：arr[1] = 1；

此时函数`traversal(arr, 1)`全部执行完后将该函数从递归栈中弹出，并返回至上一层函数`traversal(arr, 0)`调用位置处继续执行`traversal(arr, 0)`函数，打印出：arr[0] = 0；

至此整个递归函数全部执行完。

同时我们又引出一个新的问题，为什么正序打印元素是在递归语句之前，逆序打印元素是在递归语句之后？递归语句的前后语句又有什么意义？

对于这两个问题，我自己总结出一个准则：

- **递归语句之前是执行当前调用函数需要执行的语句，是一个“递”的过程**
- **递归语句之后是执行下一层调用函数执行完后需要执行的语句，是一个“归”的过程**

所以很多地方也可以看到对于递归的描述为：

>“递”过程是进入节点；“归”过程是离开节点（节点的概念将在递归树中讲解）

---

### 递归树

如果单纯用递归调用栈是否可以完全模拟整个递归过程呢？答案是可以的！但会出现一个问题：**当递归表达式调用自己两次及以上的时候，递归的整个过程难以被跟踪**。

举例来说，例如我们熟知的斐波那契数列代码如下:

```js
function fib(n) {
  if (n === 1 || n === 2) {
	  return 1
  }
	
  return fib(n-1) + fib(n-2)
}

fib(5)
```

当我们执行`fib(5)`时由于参数`n !== 1 || n !== 2`执行`return fib(n-1) + fib(n-2)`语句。但此时我们的递归调用栈到底是放fib(4)呢还是fib(3)呢，即先执行fib(4)还是fib(3)？

答案是：先执行fib(4)，先将fib(4)函数压入递归调用栈中；等fib(4)函数“归”回来后，执行fib(3)。

**所以当遇到递归函数调用自己两次及以上的的时候，单单用递归栈难以跟踪模拟整个过程，所以我们需要利用递归树来解决。**

上述斐波那契数列代码，利用递归树遍历过程如下：

![](https://raw.githubusercontent.com/lesenelir/lesenelir.me/master/public/images/resursion-1.png)

> 如上图所示:
>
> - 每一个节点代表一个函数，红色的箭头线代表函数执行的先后顺序
> - 叶子结点代表可以进入递归终止条件语句的函数
> - 向下的箭头代表“递”的过程，进入节点
> - 向上的箭头代表“归”的过程，离开节点

fib(5)函数执行首先去调用fib(4)函数，fib(4)执行调用fib(3)函数，fib(3)执行调用fib(2)函数，**fib(2)函数执行完毕后向上后退至上一层fib(3)函数调用的语句，去执行fib(1)函数，等fib(1)函数执行完毕返回至fib(3)函数，此时fib(3)节点才完全执行完毕。依次往复，直至最顶层结点fib(5)**

---

### Leetcode问题

至此，我们已经完成了递归所有基本概念的理解。

但我们还有一个问题，为什么要引入递归？答案是：

>递归的目的是将大问题拆解为小问题进行求解，再将小问题拆解为小小问题，直至不用继续递归分解为止。

对于Leetcode中常见的递归问题主要有两种类型的题目：二叉树、回溯。

#### 二叉树

对于二叉树递归的问题可以拆解为两种思维：

- 根据遍历整棵树进行求解（回溯思维）
- 利用递归将问题拆解为子问题进行求解（动态规划思维）

下面来看二叉树前序遍历代码:

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function preorderTraversal(root) {
  let res = []
  traversal(root)
  return res

  function traversal(node) {
    if (!node) return
		
    // 进入节点
    res.push(node.val)
    traversal(node.left)
    // 中序位置
    traversal(node.right)
    // 离开节点
  }
}
```

对于二叉树的递归，要注重递归时机的问题，要分清楚进入节点（“递”过程）；中序位置；离开节点（“归”过程），不同位置的代码块代表执行的时机问题。

下面由一道简单题目介绍二叉树两种求解思维：

[104-二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

**解法1：利用遍历整棵树的思维：**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var maxDepth = function(root) {
  let depth = 0,
      maxDepth = 0

  traversal(root)
  return maxDepth

  // 遍历整棵树思想
  function traversal(node) {
    if (!node) return

    depth++
    maxDepth = depth > maxDepth ? depth : maxDepth
    traversal(node.left)
    traversal(node.right)
    depth--
  }
}
```

由上述代码我们可以看出我们利用“闭包”让内部函数可以访问外部函数的作用域中的变量。定义两个变量，一个变量代表当前遍历树的深度，一个变量代表当前遍历树的最大深度。我们定义一个遍历函数`traversal(node)`，参数代表当前遍历的节点。

很明显，递归终止的条件是如果当前遍历的节点不存在时就返回，即把当前递归函数pop出递归调用栈中，并且返回至上一层递归函数的调用语句。

那单层的逻辑该如何写呢？很明显，当我们进入节点的时候要把记录当前深度的变量`depth++`

，并且比较当前深度和最大深度之间的大小，`maxDepth`赋值为`maxDepth`和`depth`之间的最大值；离开节点，我们需要将当前深度`depth--`，这同时是一个回溯的操作，即“归”操作。

**解法二：利用拆解子问题的思维：**

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var maxDepth = function(root) {
  return getDepth(root)
	
	// 递归函数定义：找根节点的最大深度
  function getDepth(node) {
    if (!node) return 0

    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    return Math.max(leftDepth, rightDepth) + 1
  }
}
```

这种解法其实就是将求解整棵二叉树的问题拆解为求解二叉树左右子树的问题；根据这一个逻辑不停的拆解，直至最小子问题，即当前参数节点`node`不存在时。

对于上述代码，可以将递归终止条件的`return 0`改写成`return`吗？答案是显然不可以的！

原因在于：此代码需要拿到回溯“归”的结果，在单层逻辑中递归函数是有变量进行接收的，此时递归终止条件不仅仅是结束当前递归函数的执行，还把当前递归函数的返回值返回给上一层递归函数。

#### 回溯

> 对于回溯问题，在我看来其实就是“归”过程，回退至上一层递归调用处，**并且可以取消一些进入递归函数的操作**。

回溯问题的来源是由递归产生的，没有递归就没有回溯；有回溯就一定有递归。

下面来看一道经典题目：

[77-组合](https://leetcode.cn/problems/combinations/)

```js
var combine = function(n, k) {
  let res = [],
      path = []

  backTracking(1)
  return res

  function backTracking(startIndex) {
    if (path.length === k) {
      res.push([...path])
      return
    }

    for (let i = startIndex; i <= n; i++) {
      path.push(i)
      backTracking(i + 1)
      path.pop()
    }
  }
};
```

对于此题目也可以将题目抽象为递归树，将问题扩展为二叉树的问题。需要注意的是，组合问题和排列问题有一点的区别：对于组合问题(2, 1) 和 (1, 2)是属于同一个组合，但对于排列而言是分先后顺序的(2, 1) 和 (1, 2)属于两个不同的排列。

所以对于单层逻辑的遍历需要从当前节点的index开始，即从startIndex开始往树的深层开始遍历。

---

### Wrapping Up

至此我们从函数调用栈开始介绍了函数的每一次执行都要压入函数调用栈中，且当函数调用结束后需要执行pop操作；接着我们从函数调用栈出发引出了递归调用栈，递归调用栈相对于函数调用栈而言，没有本质的区别，区别仅在于递归调用栈是函数自己调用自己；当我们介绍完递归调用栈后，发现当递归表达式调用自己的函数两次及以上的时候，用递归栈很难跟踪整个递归过程，所以我们引出了递归树这一概念；最后实战了Leetcode上关于递归的问题。



[本文谢绝一切转载，谢谢]

Lesenelir
