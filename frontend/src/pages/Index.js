import { Link } from "react-router-dom"

const Index = (props) => {
  
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