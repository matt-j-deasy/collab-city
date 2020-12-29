import { orderBlogPostsByCreatedDate } from "../util/blogpost";
import { post1, post2, post3 } from "../util/static";

test("Ordering does nothing to empty array", () => {
  expect(orderBlogPostsByCreatedDate([])).toEqual([]);
});

test("Ordering does nothing to array of 1 post", () => {
  expect(orderBlogPostsByCreatedDate([post1])).toEqual([post1]);
});

test("Ordering properly sorts posts of different dates", () => {
  expect(orderBlogPostsByCreatedDate([post1, post2, post3])).toEqual([
    post2,
    post1,
    post3,
  ]);
});
