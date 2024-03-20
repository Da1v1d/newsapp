import "./App.css";
import {
  fetchGuardianArticles,
  fetchNYTArticles,
  fetchNewsArticles,
} from "./api";

function App() {
  console.log(process.env.REACT_APP_GUARDIAN_API_KEY);
  fetchNewsArticles("?q=bitcoin").then((a) => console.log(a));
  return <div className="App"></div>;
}

export default App;
