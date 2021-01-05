import { useEffect, useState } from "react";
import { orderBlogPostsByCreatedDate } from "../../util/blogpost";
import { BlogPost as BlogPostType } from "../../util/types";
import { initialBlogPosts } from "../../util/static";
import "./fonts.css";
import "./styles.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BlogPostList } from "../BlogPostList/BlogPostList";

function App() {
  const [orderedBlogPosts, setOrderedBlogPosts] = useState<BlogPostType[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(function orderBlogPosts() {
    const blogPostsAfterOrdering: BlogPostType[] = orderBlogPostsByCreatedDate(
      initialBlogPosts
    );

    setOrderedBlogPosts(blogPostsAfterOrdering);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <AppHeader isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <BlogPostList blogPosts={orderedBlogPosts} />
    </div>
  );
}

export default App;
