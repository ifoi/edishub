import Image from "next/image"
import Link from "next/link"
import AmicoImg from '../public/amico.png'
import styles from '../styles/Jumbotron.module.scss'
import { useState } from "react";
import SignUpModal from "./signupScreens/SignUpModal";
import SignUpModalTwo from "./signupScreens/SignUpModalTwo";
import SignUpModalThree from "./signupScreens/SignUpModalThree";
import useAuth from '../hooks/useAuth'
import { useRouter } from "next/router";

export interface SignInfoType {
  email?: string
  username?: string
  password?: string
  firstName?: string
  lastName?: string
}

function Jumbotron() {
  const [show, setShow] = useState(false)
  const [showTwo, setShowTwo] = useState(false)
  const [showThree, setShowThree] = useState(false)

  const [signInfo, setSignInfo] = useState<SignInfoType>({
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const validator = (fields: string[]) => {
    fields.forEach((field: string) => {
      if (signInfo[field].length < 0) return false
    });
    return true
  }

  const router = useRouter()

  const { loggedIn } = useAuth()

  const handleClick = () => {
    if (loggedIn) {
      router.push('/dashboard')
    } else {
      setShow(true)
    }
  }

  return (
    <div className="p-5 mb-4 theme-bg">
      <div className="container d-flex justify-content-between">
        <div className="left-side" style={{ width: '50%' }}>
          <h1 className="display-5 fw-bold">Your <span className="special-text">Hub</span> to</h1>
          <h1 className="display-5 fw-bold">Tech Resources</h1>
          <p className="fs-4">The internet is an ocean full of resources. Let&rsquo;s help you cast your net and find what&rsquo;s right for you.</p>
          <Link href="/temp_resources">
            <a className="btn blue-btn btn-lg" type="button" rel="norefferer noopener">Explore Resources</a>
          </Link>
          <button className="btn white-btn btn-lg mx-4" type="button" onClick={handleClick}>View Dashboard</button>
        </div>
        <div className={styles.imageFormat}>
          <Image src={AmicoImg} alt="amico" />
        </div>
      </div>
      <SignUpModal
        show={show}
        setShow={setShow}
        singInfo={signInfo}
        setSignInfo={setSignInfo} validator={validator}
        showTwo={showTwo}
        setShowTwo={setShowTwo}
      />
      <SignUpModalTwo
        show={showTwo}
        setShow={setShowTwo}
        singInfo={signInfo}
        setSignInfo={setSignInfo}
        setShowThree={setShowThree}
      />
      <SignUpModalThree
        show={showThree}
        setShow={setShowThree}
        singInfo={signInfo}
        setSignInfo={setSignInfo}
      />
    </div>
  )
}

export default Jumbotron
