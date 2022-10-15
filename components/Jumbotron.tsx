import Link from "next/link"

interface Props {}

function Jumbotron(props: Props) {
  const {} = props

  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Your <span>Hub</span> to Tech Resources</h1>
        <p className="col-md-8 fs-4">Catchy phrase placeholder</p>
        <Link href="/posts">
          <a className="btn btn-primary btn-lg" type="button" rel="norefferer noopener">Explore Resources</a>
        </Link>
      </div>
    </div>
  )
}

export default Jumbotron
