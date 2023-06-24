import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={'text-textLight dark:text-textDark'}>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
