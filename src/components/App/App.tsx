import { initialBlogPosts } from "../../util/static";
import { BlogPost } from "../BlogPost/BlogPost";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header>This is a blog website</header>
      <div id="blog-posts-wrapper">
        {initialBlogPosts.map((blogPost) => {
          return <BlogPost post={blogPost} />;
        })}
      </div>
    </div>
  );
}

export default App;
