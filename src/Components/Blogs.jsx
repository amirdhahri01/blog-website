import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, setBlogData } from "../Features/userSlice";

import "../Styles/blogs.css";

const Blogs = () => {
  const searchInput = useSelector(setSearchInput);

  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&lang=en&country=us&max=10&apikey=f9ea3008fa573b887c4b17b5e1a6c006`;

  const dispatch = useDispatch();

  const [blogs, setBlogs] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="blog-page">
      <h1 className="blog-page-header">Blogs</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" href={blog.url}>
            <img src={blog.image} />
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles === 0 && (
          <h1 className="no-blogs">
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
