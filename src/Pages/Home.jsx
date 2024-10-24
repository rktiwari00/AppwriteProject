import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full min-h-svh py-8 mt-4 text-center content-center">
        <Container>
          <h1 className="text-2xl font-bold text-gray-800">
            Login to read posts
          </h1>
          <p className="text-gray-600 mt-2">
            Please <Link className="underline" to={"/login"}>log in</Link> to access the latest posts.
          </p>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
