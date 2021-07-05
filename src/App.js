import "./App.css";
import InstagramFeed from "./components/InstagramFeed";
import TwitterFeed from "./components/TwitterFeed";

function App() {
  return (
    <div className="App">
      <TwitterFeed />
      <InstagramFeed />
    </div>
  );
}

export default App;
