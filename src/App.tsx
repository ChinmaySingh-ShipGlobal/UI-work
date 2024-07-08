import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import PickUpAddress from "./pages/PickUpAddress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/pickupAddress", element: <PickUpAddress /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
