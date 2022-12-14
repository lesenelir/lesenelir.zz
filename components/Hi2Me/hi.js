
import styles from '../../styles/hi.module.css'

function Hi() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.header}>
          ☃️ Leave me a message
        </div>

        <div className={styles.bio}>
          <p>
            Connect your Ethereum wallet and leave me a message!
          </p>
          <p>
            All message data will be stored in the {' '}
            <a
              href="https://goerli.etherscan.io"
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              goerli test network,{' '}
            </a>
            which is a clone of {"Ethereum mainnet"}.
          </p>
        </div>

        Message:
        <textarea name="message" className={styles.area} onChange={null} />

        <button className={styles.waveButton} onClick={null}>
          Leave a message
        </button>

        <button className={styles.waveButton} onClick={null}>
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Hi
