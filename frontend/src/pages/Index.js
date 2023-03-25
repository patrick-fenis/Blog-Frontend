import { Link } from "react-router-dom"

const Index = (props) => {
  // console.log(props.blogs)

  const convertTimestamps = (date) => {
    const format = { year: "numeric", month: "long", day: "numeric", 
                     hour: "2-digit", minute: "2-digit"}
    return new Date(date).toLocaleDateString(undefined, format)
  }

  const Loaded = () => {
    return (
      props.blogs.map((blog) => (
        <div key={blog._id} className="blog">
          {blog.createdAt === blog.updatedAt ?
          <p>Created: {convertTimestamps(blog.createdAt)}</p>
          : <p>Edited: {convertTimestamps(blog.updatedAt)}</p>}
          
          <Link to={`/blogs/${blog._id}`}>
            <h1>{blog.title}</h1>
          </Link>
          
        </div>
      ))
    )
  }

  const Loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section id="index">
      {props.blogs ? <Loaded /> : <Loading />}
    </section>
  )
}

export default Index;