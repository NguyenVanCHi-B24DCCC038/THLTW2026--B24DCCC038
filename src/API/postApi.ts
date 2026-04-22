import axios from "axios";
import { Post } from "../types/post";

const API = "http://localhost:3000/posts";

export const getPosts = (params?: any) =>
  axios.get<Post[]>(API, { params });

export const getPost = (id: string) =>
  axios.get<Post>(`${API}/${id}`);

export const createPost = (data: Post) =>
  axios.post<Post>(API, data);

export const updatePost = (id: number, data: Post) =>
  axios.put<Post>(`${API}/${id}`, data);

export const deletePost = (id: number) =>
  axios.delete(`${API}/${id}`);