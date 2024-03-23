import { createBrowserRouter } from "react-router-dom";

import { ArticlesPage } from "pages/Articles";

export const router = createBrowserRouter([
  { path: "/", element: <ArticlesPage /> },
]);
