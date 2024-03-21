import "./App.css";
import { fetchNews } from "./api";

function App() {
  console.log(process.env.REACT_APP_GUARDIAN_API_KEY);
  fetchNews("news").then((a) => console.log(a));
  return <div className="App"></div>;
}

export default App;
