import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import CreateCSBIVOrder from "./pages/CreateCSBIVOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/", element: <Home /> },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/createcsbIV", element: <CreateCSBIVOrder /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
