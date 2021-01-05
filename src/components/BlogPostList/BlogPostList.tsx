import React from "react";
import { BlogPost as BlogPostType } from "../../util/types";
import { BlogPost } from "../BlogPost/BlogPost";

interface BlogPostListProps {
  blogPosts: BlogPostType[];
}

export const BlogPostList: React.FC<BlogPostListProps> = (props) => {
  return (
    <div id="blog-posts-wrapper">
      {props.blogPosts.map((blogPost) => {
        return <BlogPost post={blogPost} key={blogPost.id} />;
      })}
    </div>
  );
};
