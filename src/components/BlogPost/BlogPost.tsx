import React from "react";
import { getDisplayDate } from "../../util/date";
import "../App/fonts.css";
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
      <h2>{getDisplayDate(post.createdDate)}</h2>
      <p>{post.content}</p>
    </div>
  );
};
