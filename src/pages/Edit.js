import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Edit = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const blogs = props.blogs
  const blog = blogs.find((b) => b._id === id)

  const [editForm, setEditForm] = useState(blog)

  const handleChange = (e) => {
    setEditForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateBlogs(editForm, id)
    navigate(`/blogs/${id}`)
  }

  return (
    <section id="edit-page">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
      <label for="title">Title: </label>
      <input 
        type="text" 
        value={editForm.title} 
        name="title"
        placeholder="title"
        onChange={handleChange}
        /> <br />
      <label for="description">Description: </label>
      <input 
        type="text" 
        value={editForm.description} 
        name="description"
        placeholder="description"
        onChange={handleChange}
        /> <br />
      <label for="image">Image: </label>
      <input 
        type="text" 
        value={editForm.image} 
        name="image"
        placeholder="image"
        onChange={handleChange}
        /> <br />
        <input type="submit" value="Edit Blog" />
      </form> 
    </section>
    
  )
}

export default Edit;