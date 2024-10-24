import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import service from "../appwrite/config";
import { Container, Button } from "../components";
import parse from "html-react-parser";

function Post() {
  const [post, setPost] = useState();
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    }
  }, [post]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  return post ? (
    <div className="py-8">
      <Container>
        {/* Featured Image Section */}
        <div className="relative w-full flex justify-center mb-6 border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <img
            src={service.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-2xl object-cover w-full h-96 transition-transform duration-300 ease-in-out hover:scale-105"
          />

          {/* Edit/Delete Button for Author */}
          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  bgColor="bg-green-500"
                  className="mr-3 hover:bg-green-600"
                >
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                className="hover:bg-red-600"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>

        {/* Title Section */}
        <div className="w-full mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            {post.title}
          </h1>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg text-gray-800 mx-auto max-w-full leading-relaxed">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
