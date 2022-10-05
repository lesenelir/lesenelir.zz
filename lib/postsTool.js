import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import path from 'node:path'
import matter from "gray-matter"


async function getSortedPostsData() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  // [ 'nextjs-official.md', 'pre-rendering.md', 'ssg-ssr.md' ]
  const fileNames = await fsPromises.readdir(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // id => file name except .md
    const id = fileName.replace(/\.md$/, '')
    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
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

export {
  getSortedPostsData
}
