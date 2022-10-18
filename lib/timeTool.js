import path from 'node:path'
import fsPromises from 'node:fs/promises'
import matter from "gray-matter"
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

async function getTimePost() {
  const filePath = path.join(process.cwd(), 'public', 'timeline', 'timeline.md')
  const file = await fsPromises.readFile(filePath, {
    encoding: 'utf-8'
  })

  const matterResult = matter(file)

  const fileContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(matterResult.content)
  const contentHtml = fileContent.value

  return {
    contentHtml,
    ...matterResult.data
  }
}

export {
  getTimePost
}

