import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProfileSettings from "./pages/ProfileSettings";
import AddPickUpAddress from "./pages/AddPickUpAddress";
import PickUpAddress from "./pages/PickUpAddress";
import { PasswordSet } from "./pages/PasswordSet";
import ProfilePopover from "./pages/ProfilePopover";
import RateCalculator from "./pages/RateCalculator";
import WalletHistory from "./pages/WalletHistory";
import OrderDetails from "./pages/OrderDetails";
import { NewCustomerDialog } from "./pages/NewCustomerDialog.tsx";
import CreateCSBIVOrder from "./pages/CreateCSBIVOrder.tsx";
import FranchiseKYCSettings from "./pages/FranchiseKYCSettings.tsx";
import CentreOneColumnSmall, { CentreOneColumnLarge, CentreOneColumnMedium } from "./Layouts/CenterOneColumn.tsx";
import TwoColumn from "./Layouts/TwoColumn.tsx";
import ThreeColumn from "./Layouts/ThreeColumn.tsx";
import FourColumn from "./Layouts/FourColumn.tsx";
import TwoThreeFour from "./Layouts/TwoThreeFour.tsx";

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
  { path: "/franchisekycsettings", element: <FranchiseKYCSettings /> },
  { path: "/addNewCustomer", element: <NewCustomerDialog /> },
  { path: "/createcsbIV", element: <CreateCSBIVOrder /> },
  { path: "/twocolumns", element: <TwoColumn /> },
  { path: "/threecolumns", element: <ThreeColumn /> },
  { path: "/fourcolumns", element: <FourColumn /> },
  { path: "/centeronecolumnsmall", element: <CentreOneColumnSmall /> },
  { path: "/centeronecolumnmedium", element: <CentreOneColumnMedium /> },
  { path: "/centeronecolumnlarge", element: <CentreOneColumnLarge /> },
  { path: "/mixcolumns", element: <TwoThreeFour /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
