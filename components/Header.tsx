import Image from "next/image"
import Link from "next/link"
import { BiBell } from "react-icons/bi"


interface Props { }

function Header(props: Props) {
  const { } = props

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <Link href='/'>
          <a className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">&#123; EdisHub &#125;</a>
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
            <form className=" me-3" role="search">
              <input type="search" className="form-control" placeholder="Search for anything" aria-label="Search" />
            </form>
          </div>
        </nav>

        <div className="col-md-3 text-end">
          <div className="dropdown text-end">
            <div className="row">
              <div className="col-md-6">
                <div>Resource Hub

                  <BiBell />
                </div>
              </div>
              <div className="col-md-6">
                <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <Image src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}


// const EdisHub = styled.span`
// 	color: rgb(56, 95, 185);
// 	text-overflow: ellipsis;
// 	font-size: 32px;
// 	font-family: "Nova Oval", sans-serif;
// 	font-weight: 400;
// 	text-align: left;
// 	width: 151px;
// 	min-height: 129px;
// 	position: absolute;
// 	left: 219px;
// 	top: 0px;
//	height: 129px;
//`;

export default Header
