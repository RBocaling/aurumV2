import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Contact,
  ForgotPassword,
  SignIn,
  SignUp,
  TernAndCondition,
} from "../pages/public";
import {
  BankVerification,
  Dashboard,
  Ges,
  GesInfo,
  HoldingInverntory,
  Kyc,
  Nominee,
  Profile,
  Stacking,
  Sts,
  Termination,
  TerminationSummary,
  Transaction,
  TransactionDetails,
  Swap,
  Swap2,
} from "../pages/private";
import PublicLayout from "../layouts/PublicLayout";
import PrivateLayout from "../layouts/PrivateLayout";

//  public routes
const publicRoutes = [
  { path: "/contact", element: <Contact /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/swap", element: <Swap /> },
  { path: "/terms-and-conditions", element: <TernAndCondition /> },
];

//  private routes
const privateRoutes = [
  { path: "/", element: <Swap /> },
  { path: "/swap2", element: <Swap2 /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/bank-verification", element: <BankVerification /> },
  { path: "/ges", element: <Ges /> },
  { path: "/ges-info", element: <GesInfo /> },
  { path: "/holding-inventory", element: <HoldingInverntory /> },
  { path: "/kyc", element: <Kyc /> },
  { path: "/nominee", element: <Nominee /> },
  { path: "/profile", element: <Profile /> },
  { path: "/statking", element: <Stacking /> },
  { path: "/statking", element: <Stacking /> },
  { path: "/stc", element: <Sts /> },
  { path: "/termination", element: <Termination /> },
  { path: "/terminationSummary", element: <TerminationSummary /> },
  { path: "/transaction", element: <Transaction /> },
  { path: "/transactionDetails", element: <TransactionDetails /> },
];

const router = createBrowserRouter([
  // Public Layout
  ...publicRoutes.map((route) => ({
    path: route.path,
    element: <PublicLayout>{route.element}</PublicLayout>,
  })),

  // Private Layout
  ...privateRoutes.map((route) => ({
    path: route.path,
    element: (
      <PrivateLayout>
        <PrivateLayout>{route.element}</PrivateLayout>
      </PrivateLayout>
    ),
  })),
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
