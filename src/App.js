import { RouterProvider } from "react-router-dom";

import "index.css";

import { router } from "routes/router";

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
