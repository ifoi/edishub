import Link from "next/link"
import styled from "styled-components"

import {EdisHub,Group14, Categories, Group27, Rectangle16, SearchForAnything} from "./styles"


interface Props {}

function Header(props: Props) {
  const {} = props

  return (
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      {/* <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
           <h2>Edis Hub</h2>
        </Link>  */}
       
        <EdisHub>{"{EdisHub}"}</EdisHub>
      
     
      <Group14>
        <Categories>Categories</Categories>
      </Group14>
   
      <Group27>
        <Rectangle16 />
        <SearchForAnything>Search for Anything</SearchForAnything>
      </Group27>
      
      {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
      </ul> */}

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
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
