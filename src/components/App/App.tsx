import { useEffect, useState } from "react";
import { orderBlogPostsByCreatedDate } from "../../util/blogpost";
import { BlogPost as BlogPostType } from "../../util/types";
import { initialBlogPosts } from "../../util/static";
import { BlogPost } from "../BlogPost/BlogPost";
import "./fonts.css";
import "./styles.css";

function App() {
  // Save a list of blog posts in app state. The list will be an empty array
  // until we have ordered the posts and called the "setter" for this state variable
  const [orderedBlogPosts, setOrderedBlogPosts] = useState<BlogPostType[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // A useEffect is a function that React runs when a certain condition is met.
  // The function always runs whenever the component mounts or unmounts.  It
  // Also runs whenever variables in the dependency array change.
  // This function will run once when the app starts, once when the app shuts down
  // and ANYTIME the variable: initialBlogPosts change. Thats what we want because
  // we want to ensure things are ordered anytime our list changes.
  useEffect(
    function orderBlogPosts() {
      // Step 1: Order the blog posts by calling our utility function
      const blogPostsAfterOrdering: BlogPostType[] = orderBlogPostsByCreatedDate(
        initialBlogPosts
      );

      // Step 2: Set our application state variable to equal this ordered list
      setOrderedBlogPosts(blogPostsAfterOrdering);
    },
    // This is the dependency array. React looks here to determine when to run this function
    []
  );

  // Function to set a state variable in app component. This state variable should be a string equal to
  // "white" or "black". When this button is pressed, set the state to be the other option.

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => {
      return !prevState});
    };

  return (
    <div
      className="App"
      style={{backgroundColor: isDarkMode ? "black" : "white"}}
    >
      <header>
        <h1>Welcome Matt</h1>
        <h4>Come On In</h4>
      </header>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div id="blog-posts-wrapper">
        {orderedBlogPosts.map((blogPost) => {
          return <BlogPost post={blogPost} key={blogPost.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
