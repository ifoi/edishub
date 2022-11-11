import Image from "next/image"
import Link from "next/link"
import AmicoImg from '../public/amico.png'
import styles from '../styles/Jumbotron.module.scss'

import { Overlay, ClickButton, PopupCard } from "styles/Popup";

// import {useState} from "react/useState" ;
import { MouseEvent } from "react";
import SignUpModal from "./SignUpModal";

interface Props { }

// type Popup = {
//   togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
// }

// const Popup = ({ togglePopup } : Popup) => (
//       <Overlay>
//       <PopupCard>
//         <ClickButton onClick={togglePopup}>Close</ClickButton>
//       </PopupCard>
//     </Overlay>
// );




function Jumbotron(props: Props) {
  const { } = props

  type Popup = {
    togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
  }

  const Popup = ({ togglePopup }: Popup) => (
    <Overlay>
      <PopupCard>
        <ClickButton onClick={togglePopup}>Close</ClickButton>
      </PopupCard>
    </Overlay>
  );

  return (
    <div className="p-5 mb-4 theme-bg">
      <div className="container d-flex justify-content-between">
        <div className="left-side" style={{ width: '50%' }}>
          <h1 className="display-5 fw-bold">Your <span className="special-text">Hub</span> to</h1>
          <h1 className="display-5 fw-bold">Tech Resources</h1>
          <p className="fs-4">The internet is an ocean full of resources. Let’s help you cast your net and find what’s right for you.</p>
          
          <h1> <span className="special-text">Want to be the first to know when we launch? </span>  </h1>
          <Link href="/contact">
            <a className="btn purple-btn btn-lg " type="button" rel="norefferer noopener"> Please click here, to fill out our contact form, so we can contact you</a>
          </Link>
          
          <Link href="/temp_resources">
            <a className="btn blue-btn btn-lg" type="button" rel="norefferer noopener">Explore Resources</a>
          </Link>
          {/* <Link href="/temp_resources">
            <a className="btn white-btn btn-lg mx-4" type="button" rel="norefferer noopener">View Dashboard</a>
          </Link> */}
          <button className="btn white-btn btn-lg mx-4" type="button" data-bs-toggle="modal" data-bs-target="#signupModal">View Dashboard</button>
          {/* <Popup togglePopup={function (event: MouseEvent<HTMLElement, MouseEvent>): void {
            throw new Error("Function not implemented.");
                  } } />
          */}
        </div>
        <div className={styles.imageFormat}>
          <Image src={AmicoImg} alt="amico" />
        </div>
      </div>
      <SignUpModal />
    </div>
  )
}

export default Jumbotron
