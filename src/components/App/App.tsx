import { initialBlogPosts } from "../../util/static";
import "./fonts.css";
import { BlogPost } from "../BlogPost/BlogPost";
import "./styles.css";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome Matt</h1>
        <h4>Come On In</h4>
      </header>
      <div id="blog-posts-wrapper">
        {initialBlogPosts.map((blogPost) => {
          return <BlogPost post={blogPost} />;
        })}
      </div>
    </div>
  );
}

export default App;
