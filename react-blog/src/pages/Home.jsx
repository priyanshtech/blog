import {blogs} from "../data/blogs.jsx"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Blog List</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          {blog.title}
          <p>{blog.author}</p>
          <p>{blog.content.slice(0, 40)}...</p>
          <Link to={`/blog/${blog.id}`}>Read More</Link>

        </div>
      ))}
    </div>
  );
}
