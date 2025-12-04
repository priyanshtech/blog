import {blogs} from "../data/blogs.jsx"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-5xl mb-10 flex  justify-center">Blog List</h1>

      {blogs.map((blog) => (
        <div className="border border-gray-300 p-4 rounded-lg mb-9 shadow-sum bg-white"key={blog.id}>
          {blog.title}
          <p>author:{blog.author}</p>
          <p>{blog.content.slice(0, 40)}...</p>
          <Link to={`/blog/${blog.id}`}><button className="border-1">Read more</button></Link>

        </div>
      ))}
    </div>
  );
}
