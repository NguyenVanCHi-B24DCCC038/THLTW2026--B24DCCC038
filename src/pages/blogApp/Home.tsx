import { useEffect, useState } from "react";
import { getPosts } from "../../API/postApi";
import { Post } from "../../types/post";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [q, setQ] = useState("");

  const fetchPosts = async () => {
    const res = await getPosts({ q, _limit: 9 });
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [q]);

  const handleSearch = debounce((value: string) => {
    setQ(value);
  }, 300);

  return (
    <div>
      <h1>Blog</h1>

      <input onChange={(e) => handleSearch(e.target.value)} />

      {posts.map((p) => (
        <div key={p.id}>
          <img src={p.thumbnail} width={200} />
          <h3>{p.title}</h3>
          <Link to={`/post/${p.id}`}>Xem</Link>
        </div>
      ))}
    </div>
  );
}