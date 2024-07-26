import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import { PasswordSet } from "./pages/PasswordSet";
import ProfilePopover from "./pages/ProfilePopover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/", element: <Home /> },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/setPassword", element: <PasswordSet /> },
  { path: "/profilePopover", element: <ProfilePopover /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
