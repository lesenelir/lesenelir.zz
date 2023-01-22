import styles from '../../styles/loader.module.css'

function Loader(): JSX.Element {
  return (
    <div className={styles.spinner}>
      <div className={styles.bounce1}/>
      <div className={styles.bounce2}/>
      <div className={styles.bounce1}/>
    </div>
  )
}

export default Loader
