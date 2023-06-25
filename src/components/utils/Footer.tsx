function Footer() {
  return (
    <>
      <p className={'flex flex-row gap-2 mt-8 text-sm text-borderUnderline opacity-60'}>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          rel='noreferrer'
          target='_blank'
          className={'border-solid border-b-[1px] border-b-borderUnderline border-opacity-30 hover:border-opacity-60'}
        >
          CC BY-NC-SA 4.0
        </a>
        {' '} 2022-PRESENT © Lesenelir Zhou
      </p>
    </>
  )
}

export default Footer
