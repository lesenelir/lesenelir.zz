import styles from '../../styles/footer.module.css'

function Footer():JSX.Element {
  return (
    <div className={styles.container}>
      <p>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          rel='noreferrer'
          target='_blank'
          className={styles.link}
        >
          CC BY-NC-SA 4.0
        </a>
        {' '} 2022-PRESENT © Lesenelir Zhou
      </p>
    </div>
  )
}

export default Footer
