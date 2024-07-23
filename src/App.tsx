import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import FranchiseKYCSettings from "./pages/FranchiseKYCSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/", element: <Home /> },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/franchisekycsettings", element: <FranchiseKYCSettings /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
