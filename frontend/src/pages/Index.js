import { useState } from "react";
import { Link } from "react-router-dom"

const Index = (props) => {
  // const [newForm, setNewForm] = useState({
  //   title: "",
  //   description: "",
  //   image: ""
  // })

  // const handleChange = (e) => {
  //   console.log(e.target)
  //   setNewForm((prev) => ({
  //     ...prev, 
  //     [e.target.title]: e.target.value
  //   }))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   props.createBlogs(newForm)
  //   setNewForm({
  //     title: "",
  //     description: "",
  //     image: ""
  //   })
  // }

  const Loaded = () => {
    return (
      props.blogs.map((blog) => (
        <div key={blog._id} className="blog">
          <Link to={`/blogs/${blog._id}`}>
            <h1>{blog.title}</h1>
          </Link>
          {props.image ? 
            <img src={blog.image} alt={blog.title} />
          : <h1>No Image</h1> }
          
          <h3>{blog.description}</h3>
        </div>
      ))
    )
  }

  const Loading = () => {
    return <h1>Loading...</h1>
  }

  // console.log(props.blogs)

  return (
    <section>
      {props.blogs ? <Loaded /> : <Loading />}
    </section>
  )
}

export default Index;