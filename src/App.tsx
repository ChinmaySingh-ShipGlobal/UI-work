import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import AddPickUpAddress from "./pages/AddPickUpAddress";
import PickUpAddress from "./pages/PickUpAddress";
import { PasswordSet } from "./pages/PasswordSet";
import ProfilePopover from "./pages/ProfilePopover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/addPickupAddress", element: <AddPickUpAddress /> },
  { path: "/pickupAddress", element: <PickUpAddress /> },
  { path: "/setPassword", element: <PasswordSet /> },
  { path: "/profilePopover", element: <ProfilePopover /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
