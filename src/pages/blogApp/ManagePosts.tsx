import { useEffect, useState } from "react";
import { getPosts, deletePost, createPost } from "../../API/postApi";
import { Post } from "../../types/post";

export default function ManagePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async () => {
    const newPost: Post = {
      title,
      slug: title.toLowerCase().replace(/\s/g, "-"),
      content: "## Nội dung",
      thumbnail: "https://picsum.photos/200",
      tags: ["js"],
      status: "published",
      author: "Chi",
      createdAt: new Date().toISOString(),
      views: 0
    };

    await createPost(newPost);
    setTitle("");
    load();
  };

  return (
    <div>
      <h1>Manage Posts</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Thêm</button>

      {posts.map((p) => (
        <div key={p.id}>
          {p.title}
          <button onClick={() => deletePost(p.id!)}>Xóa</button>
        </div>
      ))}
    </div>
  );
}