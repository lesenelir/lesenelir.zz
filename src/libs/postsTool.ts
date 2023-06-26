import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import matter from "gray-matter"
import html from 'remark-html'
import {remark} from 'remark'
import {VFile} from "vfile"

import {IPost} from "./types"

async function getSortedPostsData() {
  const postsDirectory: string = path.join(process.cwd(), 'public', 'posts')
  // [ 'nextjs-official.md', 'pre-rendering.md', 'ssg-ssr.md' ]
  const fileNames: string[] = await fsPromises.readdir(postsDirectory)
  const allPostsData: IPost[] = fileNames.map(fileName => {
    // id => file name except .md
    const id: string = fileName.replace(/\.md$/, '')
    // read markdown file as string
    const fullPath: string = path.join(postsDirectory, fileName)
    // fileContents is the entire native markdown content
    const fileContents: string = fs.readFileSync(fullPath, 'utf-8')

    const matterResult: matter.GrayMatterFile<string> = matter(fileContents)

    return {
      id,
      ...(matterResult.data as {title: string, date: string, duration: string})
    }
  })

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
  const postsDirectory: string = path.join(process.cwd(), 'public', 'posts')
  // [ 'nextjs-official.md', 'pre-rendering.md', 'ssg-ssr.md' ]
  const fileNames: string[] = await fsPromises.readdir(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

async function getPostDataById(id: string) {
  const fullPath: string = path.join(process.cwd(), 'public', 'posts', `${id}.md`)
  const fileContents: string = await fsPromises.readFile(fullPath, {
    encoding: 'utf-8'
  })
  // Use gray-matter to parse the post metadata section
  const matterResult: matter.GrayMatterFile<string> = matter(fileContents) // .md metadata

  // Use remark to convert markdown into HTML string
  const fileContent:VFile = await remark().use(html).process(matterResult.content)
  const contentHtml: string = fileContent.toString()

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
