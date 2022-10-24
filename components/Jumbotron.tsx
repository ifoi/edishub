import Image from "next/image"
import Link from "next/link"
import AmicoImg from '../public/amico.png'
import styles from '../styles/Jumbotron.module.scss'

interface Props { }

function Jumbotron(props: Props) {
  const { } = props

  return (
    <div className="p-5 mb-4 theme-bg">
      <div className="container d-flex justify-content-between">
        <div className="left-side" style={{ width: '50%' }}>
          <h1 className="display-5 fw-bold">Your <span className="special-text">Hub</span> to</h1>
          <h1 className="display-5 fw-bold">Tech Resources</h1>
          <p className="fs-4">The internet is an ocean full of resources. Let’s help you cast your net and find what’s right for you.</p>
          <Link href="/temp_resources">
            <a className="btn blue-btn btn-lg" type="button" rel="norefferer noopener">Explore Resources</a>
          </Link>
          <Link href="/temp_resources">
            <a className="btn white-btn btn-lg mx-4" type="button" rel="norefferer noopener">View Dashboard</a>
          </Link>
        </div>
        <div className={styles.imageFormat}>
          <Image src={AmicoImg} alt="amico" />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
