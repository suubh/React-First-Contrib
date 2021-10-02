import './App.css'
import Data from "./data.json"

function App() {
  return (
    <div className="App">
      <div className="posts-wrapper">
        { Data.map(post => {
          return (
            <div key={post.id} className="post">
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
              <a href={post.Github}><button>Visit Profile</button> </a>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
