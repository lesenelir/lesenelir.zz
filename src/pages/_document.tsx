import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={'text-textLight bg-bgLight dark:text-textDark dark:bg-bgDark dark:bg-opacity-50'}>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
