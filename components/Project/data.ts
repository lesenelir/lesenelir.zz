import Item from "./item";

interface IProject {
  name: string;
  description: string;
  icon: string;
  repo: string;
}

export const frontEndList: IProject[] = [
  {
    name: 'React Admin System',
    description: 'A full-stack project built with react and koa2',
    icon: '&#xe60a;',
    repo: 'https://github.com/lesenelir/meta-react-admin'
  },
  {
    name: 'Portfolio',
    description: 'My portfolio blog website built by next.js',
    icon: '&#xe624;',
    repo: 'https://github.com/lesenelir/lesenelir.me'
  },
  {
    name: 'Flex Baidu',
    description: 'Imitation of Baidu home static page by react',
    icon: '&#xe63f;',
    repo: 'https://github.com/lesenelir/meta-baidu'
  },
  {
    name: 'Mini React',
    description: 'Build mini react by building your own react',
    icon: '&#xe64b;',
    repo: 'https://github.com/lesenelir/mini-react'
  }
]

export const web3List: IProject[] = [
  {
    name: 'LearnWeb3',
    description: 'Some example practices from LearnWeb3 DAO',
    icon: '&#xe6fd;',
    repo: 'https://github.com/lesenelir/meta-learnweb3-dao-projects'
  }
]

export const deepLearningList: IProject[] = [
  {
    name: 'Cats Classifier',
    description: 'The classification of four cat-kinds with CNN and Django',
    icon: '&#xe62c;',
    repo: 'https://github.com/lesenelir/Django-Cats-Classifier'
  }
]

export const othersList: IProject[] = [
  {
    name: 'LeetCode',
    description: 'JavaScript solutions for Personal Leetcode problems',
    icon: '&#xebf2;',
    repo: 'https://github.com/lesenelir/meta-leetcode-js'
  },
  {
    name: 'Javascript Unit Test',
    description: 'Just learn how to write unit test in javascript',
    icon: '&#xe606;',
    repo: 'https://github.com/lesenelir/javascript-unit-test'
  }
]


