import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  return (
    <div>
      <h1>{ blog.title }</h1>
      <p>By {blog.author}</p>
      <div>{blog.content}</div>
    </div>
  );
}
