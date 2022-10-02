import styles from '../../styles/project.module.css'

function Item(props) {
  const {name, description, icon, repo} = props

  return (
    <a
      href={repo}
      rel='noreferrer'
      target='_blank'
    >
      <div className={styles.item}>
        <span className={`iconfont ${styles.icon}`}>{icon}</span>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  )
}

export default Item
