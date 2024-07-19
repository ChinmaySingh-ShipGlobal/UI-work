import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import AddPickUpAddress from "./pages/AddPickUpAddress";
import PickUpAddress from "./pages/PickUpAddress";
import { PasswordSet } from "./pages/PasswordSet";
import ProfilePopover from "./pages/ProfilePopover";
import RateCalculator from "./pages/RateCalculator";
import WalletHistory from "./pages/WalletHistory";
import OrderDetails from "./pages/OrderDetails";
import JSONtoCSV from "@/pages/JSONtoCSV.tsx";
import CSVtoJSON from "@/pages/CSVtoJSON.tsx";
import { NewCustomerDialog } from "./pages/NewCustomerDialog.tsx";

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
  { path: "/walletHistory", element: <WalletHistory /> },
  { path: "/orderDetails", element: <OrderDetails /> },
  // { path: "/test", element: <JSONtoCSV /> },
  // { path: "/test2", element: <CSVtoJSON /> },
  { path: "/addNewCustomer", element: <NewCustomerDialog /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
