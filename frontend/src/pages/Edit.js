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
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={editForm.title} 
        name="title"
        placeholder="title"
        onChange={handleChange}
        />
      <input 
        type="text" 
        value={editForm.description} 
        name="description"
        placeholder="description"
        onChange={handleChange}
        />
      <input 
        type="text" 
        value={editForm.image} 
        name="image"
        placeholder="image"
        onChange={handleChange}
        />
        <input type="submit" value="Edit Blog" />
      
    </form>
  )
}

export default Edit;