import { useState } from "react";
import { useNavigate } from "react-router-dom"

const New = (props) => {
  const navigate = useNavigate()

  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    image: ""
  })

  const handleChange = (e) => {
    // console.log(e.target)
    setNewForm((prev) => ({
      ...prev, 
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createBlogs(newForm)
    console.log(newForm)
    setNewForm({
      title: "",
      description: "",
      image: ""
    })
    navigate("/blogs")
  }



  return (
    <section id="new-page">
      <h1>Create A New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label for="title">Title: </label>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        /> <br/>
        <label for="description">Description: </label>
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        /> <br/>
        <label for="image">Image: </label>
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        /> <br/>
        <input id="create-button" type="submit" value="Create Blog" />
      </form>
    </section>
  )
}


export default New;