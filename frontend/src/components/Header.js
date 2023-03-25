import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <nav className="header">
      <Link to="/blogs">
        <div>Blogs</div>
      </Link>
      <Link to="/blogs/new">
        <div>Create A Blog</div>
      </Link>

      
    </nav>
  )
}

export default Header;