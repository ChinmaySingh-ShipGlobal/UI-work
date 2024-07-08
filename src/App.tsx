import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import AddPickUpAddress from "./pages/AddPickUpAddress";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/addPickupAddress", element: <AddPickUpAddress /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
