import { Articles } from "pages/Articles";
import { useEffect } from "react";

import { controller } from "api/abortController";

import "./index.css";

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
