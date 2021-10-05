import './App.css'
import Card from './components/card/card'
import Data from "./data.json"
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="posts-wrapper">
        {Data.map(post => {
          return (
            <Card key={post.id} image={post.image} title={post.title} githubLink={post.Github} />
          )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
