import useAuth from "hooks/useAuth";
import Link from "next/link"
import { useState } from "react";
import { BiBell } from "react-icons/bi"
import LoginModal from "./Login";
import SignUpModal from "./signupScreens/SignUpModal";
// import Logo from '/amico.png'
import Image from "next/image";

function Header() {
  const { loggedIn, user, loading } = useAuth()
  const [show, setShow] = useState(false);
  console.log(loading)
  return (
    <div className="container">
      {!loading ? (<><LoginModal show={show} setShow={setShow} />
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
          <Link href='/'>
            <Image src="/logo.png" alt="logo" width={150} height={50} />
          </Link>

          <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="me-3" role="search" style={{ width: '28rem' }}>
                <input type="search" className="form-control" placeholder="Search for anything" aria-label="Search" style={{ borderRadius: '20px' }} />
              </form>
            </div>
          </nav>

          <div className="col-md-3 text-end">
            <div className="dropdown text-end">
              {!!loggedIn ? (<div className="row">
                <div className="col-md-6">
                  <div>Resource Hub

                    <BiBell />
                  </div>
                </div>
                <div className="col-md-6">
                  <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                  </a>
                  <ul className="dropdown-menu text-small">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>) : <div>
                <button
                  type="button"
                  className="btn btn-outline-primary mx-4"
                  onClick={() => setShow(true)}
                >Log In</button>
                <button type="button" className="btn btn-primary">Sign Up</button>
              </div>
              }
            </div>
          </div>
        </header></>) : <h1>Loading</h1>} {/**Add the spinner */}
    </div>
  )
}

export default Header
