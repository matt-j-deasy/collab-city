import React from "react";
import "C:/Users/Michael Oppenheimer/Documents/GitHub/collab-city/src/components/App/fonts.css"
import { BlogPost as BlogPostType } from "../../util/types";
import "./styles.css";

interface BlogPostProps {
  post: BlogPostType;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="blog-post-wrapper">
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <p>{post.content}</p>
    </div>
  );
};
