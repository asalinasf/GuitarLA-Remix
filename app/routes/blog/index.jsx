import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";

export async function loader() {
  const posts = await getPosts();

  return posts.data;
}

export function meta() {
  return {
    title: "GuitarLA - Nuestro Blog",
    description: "GuitarLA Blog, Blog de guitarra, aprende a tocar guitarra",
  };
}

const Blog = () => {
  const posts = useLoaderData();
  return <ListadoPosts posts={posts} />;
};

export default Blog;
