import styles from '../styles/EdisMantra.module.scss';

function EdisMantra() {
  return (
    <div className={styles.container}>
      <h2>We find <span className="special-tex">top-rated</span> courses from <span className="special-text">credible</span></h2>
      <h2><span className="special-text">sources</span> so that you don’t have to</h2>
      <p>Skip the hours of searching and choose from our</p>
      <p>curated list of resources updated every single day</p>
    </div>
  )
}

export default EdisMantra
