import { BlogPost } from "./types";
// Utility functions related to blog posts

/*
 * Given a list of blog posts, sort them by their created date
 * Newest blog post should be in outputArray[0]
 */
export function orderBlogPostsByCreatedDate(posts: BlogPost[]): BlogPost[] {
  const sortedPosts: BlogPost[] = posts.sort((a: BlogPost, b: BlogPost) => {
    if (a.createdDate === b.createdDate) {
      return 0;
    } else if (a.createdDate < b.createdDate) {
      return 1;
    }
    return -1;
  });
  return sortedPosts;
}
