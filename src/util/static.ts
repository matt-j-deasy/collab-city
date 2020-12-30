import { BlogPost } from "./types";

export const post1: BlogPost = {
  id: 1,
  title: "I should be in the middle",
  author: "Matt Deasy",
  content: "This is a good blog post",
  createdDate: new Date(2020, 11, 1),
};

export const post2: BlogPost = {
  id: 2,
  title: "I should be  at the top of the page!",
  author: "Matt Deasy",
  content: "I'm getting better at this",
  createdDate: new Date(2020, 11, 20),
};

export const post3: BlogPost = {
  id: 3,
  title: "I'm old. Put me at the bottom!",
  author: "Mart Deasly",
  content:
    "This is a longer post that I wrote last year.  I'm feeling a little crazy here and I really want to share my thoughts. I'm curious if this kind of length message might break out styling. I guess the only way to find out is to type out some long message and hope for the best. So...this will be that message!",
  createdDate: new Date(2019, 11, 1),
};

export const initialBlogPosts: BlogPost[] = [post1, post2, post3];
