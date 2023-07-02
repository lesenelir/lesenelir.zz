function Footer() {
  return (
    <>
      <p className={'mt-8 text-sm text-borderUnderline opacity-60'}>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          rel='noreferrer'
          target='_blank'
          className={
            'border-solid border-b-[1px] border-b-borderUnderline border-opacity-30 dark:border-opacity-60 ' +
            'transition-colors duration-300 ease-in ' +
            'hover:border-opacity-60 dark:hover:border-opacity-100'
        }>
          CC BY-NC-SA 4.0
        </a>
        {' '} 2022-PRESENT © Lesenelir Zhou
      </p>
    </>
  )
}

export default Footer
