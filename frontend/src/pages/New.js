import { useState } from "react";

const New = (props) => {
  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    image: ""
  })

  const handleChange = (e) => {
    console.log(e.target)
    setNewForm((prev) => ({
      ...prev, 
      [e.target.title]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createBlogs(newForm)
    setNewForm({
      title: "",
      description: "",
      image: ""
    })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        /> 
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input type="submit" value="Create Blog" />
      </form>
    </section>
  )
}


export default New;