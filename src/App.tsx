import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/", element: <Home /> },
  { path: "/profile", element: <ProfileSettings /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
