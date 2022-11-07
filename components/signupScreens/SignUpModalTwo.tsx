import Link from 'next/link'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button, Modal } from 'react-bootstrap'
import { SignInfoType } from 'components/Jumbotron'
interface Props {
  show: boolean
  singInfo: SignInfoType
  setShow: Dispatch<SetStateAction<boolean>>
  setShowThree: Dispatch<SetStateAction<boolean>>
  setSignInfo: Dispatch<SetStateAction<SignInfoType>>
  // validator: (value: string[]) => boolean
}

function SignUpModalTwo(props: Props) {
  const { show, setShow, singInfo, setSignInfo, setShowThree } = props

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setSignInfo({
      ...singInfo,
      [name]: value
    })
  }

  const handleNext = () => {
    console.log(singInfo)
    setShow(false)
    setShowThree(true)
  }

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton style={{ borderBottom: 'none' }}>
        </Modal.Header>
        <Modal.Body>
          <h3>Sign up to <span className='special-text'>build your hub</span></h3>
          <p style={{ fontSize: '0.7rem', marginBottom: '0px' }}>
            By continuing, you are setting up a EdisHub account
          </p>
          <p style={{ fontSize: '0.7rem' }}>and agree to our <span className='special-text'>User Agreement</span> and <span className='special-text'>Privacy Policy</span>.</p>

          <div className='text-center'>
            <div className='btn border'>
              <FcGoogle className='w-3' />
            </div>
            <div className='btn border mx-3'>
              <AiFillGithub />
            </div>
            <div className='btn border'>
              <AiFillLinkedin />
            </div>
          </div>

          <div className="separator mt-3">
            <svg width="420" height="15" viewBox="0 0 500 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M250.018 7.45455C250.018 8.83523 249.769 10.0284 249.271 11.0341C248.772 12.0398 248.088 12.8153 247.219 13.3608C246.349 13.9062 245.356 14.179 244.24 14.179C243.123 14.179 242.131 13.9062 241.261 13.3608C240.392 12.8153 239.708 12.0398 239.209 11.0341C238.711 10.0284 238.462 8.83523 238.462 7.45455C238.462 6.07386 238.711 4.88068 239.209 3.875C239.708 2.86932 240.392 2.09375 241.261 1.5483C242.131 1.00284 243.123 0.730113 244.24 0.730113C245.356 0.730113 246.349 1.00284 247.219 1.5483C248.088 2.09375 248.772 2.86932 249.271 3.875C249.769 4.88068 250.018 6.07386 250.018 7.45455ZM248.484 7.45455C248.484 6.32102 248.295 5.36435 247.915 4.58452C247.54 3.80469 247.031 3.21449 246.388 2.81392C245.748 2.41335 245.033 2.21307 244.24 2.21307C243.447 2.21307 242.729 2.41335 242.086 2.81392C241.447 3.21449 240.937 3.80469 240.558 4.58452C240.183 5.36435 239.996 6.32102 239.996 7.45455C239.996 8.58807 240.183 9.54474 240.558 10.3246C240.937 11.1044 241.447 11.6946 242.086 12.0952C242.729 12.4957 243.447 12.696 244.24 12.696C245.033 12.696 245.748 12.4957 246.388 12.0952C247.031 11.6946 247.54 11.1044 247.915 10.3246C248.295 9.54474 248.484 8.58807 248.484 7.45455ZM252.684 14V0.909091H257.107C258.13 0.909091 258.969 1.08381 259.626 1.43324C260.282 1.77841 260.768 2.25355 261.083 2.85866C261.398 3.46378 261.556 4.15199 261.556 4.9233C261.556 5.6946 261.398 6.37855 261.083 6.97514C260.768 7.57173 260.284 8.04048 259.632 8.38139C258.98 8.71804 258.147 8.88636 257.133 8.88636H253.553V7.45455H257.082C257.78 7.45455 258.343 7.35227 258.769 7.14773C259.199 6.94318 259.511 6.65341 259.702 6.27841C259.898 5.89915 259.996 5.44744 259.996 4.9233C259.996 4.39915 259.898 3.94105 259.702 3.54901C259.506 3.15696 259.193 2.8544 258.763 2.64134C258.332 2.42401 257.763 2.31534 257.056 2.31534H254.269V14H252.684ZM258.846 8.11932L262.067 14H260.226L257.056 8.11932H258.846Z" fill="black" fillOpacity="0.25" />
              <line y1="5.5" x2="227" y2="5.5" stroke="black" strokeOpacity="0.1" />
              <line x1="272" y1="5.5" x2="500" y2="5.5" stroke="black" strokeOpacity="0.1" />
            </svg>
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className='form-control'
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="button"
              value="Continue"
              className='form-control mt-4'
              style={{ background: '#385FB9', color: '#FFF' }}
              onClick={handleNext}
            />
          </div>

          <div className='mt-4'>
            <p>Already have an account? <Link href='/login'>
              <a data-bs-dismiss="modal" aria-label="Close">
                Log in
              </a>
            </Link>
            </p>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModalTwo
