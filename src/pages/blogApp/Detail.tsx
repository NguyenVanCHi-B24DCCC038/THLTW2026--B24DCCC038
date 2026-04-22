import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost, updatePost } from "../../API/postApi";
import { Post } from "../../types/post";
import ReactMarkdown from "react-markdown";

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetch = async () => {
      if (!id) return;

      const res = await getPost(id);
      setPost(res.data);

      await updatePost(Number(id), {
        ...res.data,
        views: res.data.views + 1
      });
    };

    fetch();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.views} views</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}