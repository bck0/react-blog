import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BlogDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <div className="blog-details">
      <h2>Blog details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
