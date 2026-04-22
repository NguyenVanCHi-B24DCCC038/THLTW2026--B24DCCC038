export interface Post {
  id?: number;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  tags: string[];
  status: "draft" | "published";
  author: string;
  createdAt: string;
  views: number;
}