import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const Show = (props) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const blogs = props.blogs
  const blog = blogs.find((b) => b._id === id)

  const handleDelete = () => {
    props.deleteBlogs(id)
    navigate("/blogs")
  }

  return (
    <div id="blog-show">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      {props.image === "" ? <h1></h1>
      : <img src={blog.image} alt={blog.title} /> }
      <br />
      <button id="delete" onClick={handleDelete}>
        Delete
      </button>
      <Link to={`/blogs/${id}/edit`}>
        <button id="edit">Edit Blog</button>
      </Link>
      <h3>Comments:</h3>
    </div>
  )
}

export default Show;