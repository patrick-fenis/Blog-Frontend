import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const URL = "http://localhost:4000/blogs"

const Main = (props) => {
  const [blogs, setBlogs] = useState(null)

  const getBlogs = async () => {
    const response = await fetch (URL)
    const data = await response.json()
    setBlogs(data)
  }

  // new blogs method
  const createBlogs = async (blog) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
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
        <Route path="/" element={
          <Index 
            blogs={blogs} 
            createBlogs={createBlogs} />
        } />

        <Route path="/blogs/:id" element={
          <Show 
              blogs={blogs}
              deleteBlogs={deleteBlogs}
           />
        } />

      </Routes>
    </main>
  )
}

export default Main;