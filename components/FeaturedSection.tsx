import Link from "next/link"
import ResourceCard from "./ResourceCard"
import styles from '../styles/FeaturedSection.module.scss'

function FeaturedSection() {

  return (
    <div className={styles.section}>
      <div className="container">
        <div className="top-section">
          <h2>Featured <span className="special-text">Weekly</span> Resources</h2>
          <Link href="#">View All</Link>
        </div>
        <div className="d-flex justify-content-between">
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection
