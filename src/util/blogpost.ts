import { BlogPost } from "./types";
// Utility functions related to blog posts

/*
 * Given a list of blog posts, sort them by their created date
 * Newest blog post should be in outputArray[0]
 */
export function orderBlogPostsByCreatedDate(posts: BlogPost[]): BlogPost[] {
  // TODO: Implement this function
  posts.sort(function (a, b) {
    if (a.createdDate > b.createdDate){
      return -1;
    } else if (a.createdDate < b.createdDate){
      return 1;
    }
    return 0;
  });
  return posts;
}

