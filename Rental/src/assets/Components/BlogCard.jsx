import { Link } from "react-router-dom"
import "../pages/pages.css"

export function BlogCard({post}){
  let date = new Date(post.dateCreated)
  let stringDate = date.toString()
    return(
    <Link to={`/readblog/${post._id}`}  className="Container_blogs">
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
            <p>{stringDate.slice(4,15)}</p>
    </Link>
    )
    
}