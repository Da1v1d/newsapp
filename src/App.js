import { useEffect } from "react";
import { Articles } from "./pages/Articles";
import { controller } from "./api/abortController";

function App() {
  useEffect(() => {
    // abort our fetch request when unmounted
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container">
      <h1>News App</h1>
      <Articles />
    </div>
  );
}

export default App;
