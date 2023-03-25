import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import New from "../pages/New"
import Edit from "../pages/Edit"

const URL = "http://localhost:4000/blogs"
// const URL = "https://blog-99.herokuapp.com/blogs"

const Main = (props) => {
  const [blogs, setBlogs] = useState(null)

  const getBlogs = async () => {
    const response = await fetch (URL)
    const data = await response.json()
    setBlogs(data)
  }

  // Create New Blogs Function
  const createBlogs = async (blog) => {
    await fetch(`${URL}/new`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
    getBlogs()
  }

  // Update Blogs Function
  const updateBlogs = async (blog, id) => {
    await fetch(`${URL}/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    })
    getBlogs()
  }

  const deleteBlogs = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "delete"
    })
    getBlogs()
  }

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <main>
      <Routes>
        <Route path="/blogs" element={
          <Index blogs={blogs} />
        } />

        <Route path="/blogs/new" element={
          <New
            blogs={blogs}
            createBlogs={createBlogs} />
        } />
        <Route path="/blogs/:id" element={
          <Show 
              blogs={blogs}
              deleteBlogs={deleteBlogs} />
        } />

        <Route path="/blogs/:id/edit" element={
          <Edit
            blogs={blogs}
            updateBlogs={updateBlogs} />
        } />

      </Routes>
    </main>
  )
}

export default Main;