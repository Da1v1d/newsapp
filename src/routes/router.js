import { createBrowserRouter } from "react-router-dom";

import { ArticlesPage } from "pages/Articles";

// ! no need for react-router for this project, but it will be needed after scaling app
export const router = createBrowserRouter([
  { path: "/", element: <ArticlesPage /> },
]);
