import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import AddPickUpAddress from "./pages/AddPickUpAddress";
import PickUpAddress from "./pages/PickUpAddress";
import { PasswordSet } from "./pages/PasswordSet";
import ProfilePopover from "./pages/ProfilePopover";
import RateCalculator from "./pages/RateCalculator";
import { WalletRecharge } from "./pages/WalletRecharge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RateCalculator />,
  },
  { path: "/profile", element: <ProfileSettings /> },
  { path: "/addPickupAddress", element: <AddPickUpAddress /> },
  { path: "/pickupAddress", element: <PickUpAddress /> },
  { path: "/setPassword", element: <PasswordSet /> },
  { path: "/profilePopover", element: <ProfilePopover /> },
  { path: "/walletRecharge", element: <WalletRecharge /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
