import "./App.css";
import Card from "./components/card/card";
import Data from "./data.json";

function App() {
  return (
    <div className="App">
      <div className="posts-wrapper">
        {Data.map((post) => {
          return (
            <Card
              key={post.id}
              image={post.image}
              title={post.title}
              githubLink={post.Github}
              linkedinLink={post.LinkedinLink}
              twitterLink={post.TwitterLink}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
