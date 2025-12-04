import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  return (
    <div className="flex flex-col items-center border-5 text-3xl mt-5 mb-5 bg-gray-100 ">
      <h1 className=" mb-3">{ blog.title }</h1>
      <p className="mb-3">By {blog.author}</p>
      <div className=" mb-3">{blog.content}</div>
    </div>
  );
}
