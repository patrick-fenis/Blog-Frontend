import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Show = (props) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const blogs = props.blogs
  const blog = blogs.find((b) => b._id === id)

  // const [editForm, setEditForm] = useState(blog)

  // const handleChange = (e) => {
  //   setEditForm(prev => ({
  //     ...prev,
  //     [e.target.title]: e.target.value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   props.updateBlogss(editForm, id)
  //   navigate("/")
  // }

  const handleDelete = () => {
    props.deleteBlogs(id)
    navigate("/")
  }

  return (
    <div className="blog">
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      {props.image ? 
      <img src={blog.image} alt={blog.title} />
      : <h1></h1>}
      <button id="delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default Show;