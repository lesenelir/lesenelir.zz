import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import matter from "gray-matter"
import { remark } from 'remark'
import html from 'remark-html'
// import {unified} from 'unified'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeSanitize from 'rehype-sanitize'
// import rehypeStringify from 'rehype-stringify'


async function getSortedPostsData() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  // [ 'nextjs-official.md', 'pre-rendering.md', 'ssg-ssr.md' ]
  const fileNames = await fsPromises.readdir(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // id => file name except .md
    const id = fileName.replace(/\.md$/, '')
    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    // fileContents is the entire native markdown content
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult: matter.GrayMatterFile<string> = matter(fileContents)

    return {
      id,
      ...(matterResult.data as {title: string, date: string, duration: string} )
    }
  })
  // allPostsData
  // [
  //   {
  //     id: 'nextjs-official',
  //     title: 'Next.js Official',
  //     date: '2022-09-28'
  //   },
  //   {
  //     id: 'pre-rendering',
  //     title: 'Two Forms of Pre-rendering',
  //     date: '2020-01-01'
  //   },
  //   {
  //     id: 'ssg-ssr',
  //     title: 'When to Use Static Generation v.s. Server-side Rendering',
  //     date: '2020-01-02'
  //   }
  // ]

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else if (a.date > b.date) {
      return -1
    } else {
      return 0
    }
  })
}


async function getAllPostIds() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  // [ 'nextjs-official.md', 'pre-rendering.md', 'ssg-ssr.md' ]
  const fileNames = await fsPromises.readdir(postsDirectory)
  // [
  //   { params: { id: 'nextjs-official' } },
  //   { params: { id: 'pre-rendering' } },
  //   { params: { id: 'ssg-ssr' } }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

async function getPostDataById(id: string) {
  const fullPath = path.join(process.cwd(), 'public', 'posts', `${id}.md`)
  const fileContents = await fsPromises.readFile(fullPath, {
    encoding: 'utf-8'
  })
  // Use gray-matter to parse the post metadata section
  const matterResult: matter.GrayMatterFile<string> = matter(fileContents) // .md metadata

  // Use remark to convert markdown into HTML string
  // const fileContent = await unified()
  //   .use(remarkParse)
  //   .use(remarkRehype)
  //   .use(rehypeSanitize)
  //   .use(rehypeStringify)
  //   .process(matterResult.content)
  // const contentHtml = fileContent.value
  const fileContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = fileContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}


export {
  getSortedPostsData,
  getAllPostIds,
  getPostDataById
}
