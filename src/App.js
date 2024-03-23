import { RouterProvider } from "react-router-dom";
import { router } from "routes/router";

import "index.css";

function App() {
  return (
    <div className="container">
      <h1>News App</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
