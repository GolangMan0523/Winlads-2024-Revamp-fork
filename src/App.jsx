import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import DisOneRegister from "./pages/register-district-1/Register";
import Register from "./pages/register/Register";
import Authentication from "./pages/Authentication/Authentication";
import Loader from "./components/Loader/Loader";
import News from "./pages/News/News";
import Newslist from "./pages/News/Newslist";
import Subscription from "./pages/Subscription/Subscription";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome/Welcome";
import Raffles from "./pages/Raffles/Raffles";
import RafflesDashboard from "./pages/Raffles/RaffleDashbord";
import FaQ from "./pages/FaQ/FaQ";
import BusinessCard from "./pages/BusinessCard/BusinessCard";
import Transaction from "./pages/Transaction/Transaction";
import LiveRaffle from "./pages/LiveRaffle/LiveRaffle";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import GoogleAnalytics from "./utils/GoogleAnalytics";
import TermsCondition from "./pages/Terms&Condition/Terms&Condition";
import Layout from "./Layout";
import Privacy from "./pages/Privacy/Privacy";
import MyEntries from "./pages/MyEntries/MyEntries";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support/Support";
import Withdraw from "./pages/Withdraw/Withdraw";
import Affiliate from "./pages/Affiliate/Affiliate";
import Promo from "./pages/Promo/Promo";
import RefCount from "./pages/Affiliate/RefferalCount";
import Won from "./pages/Won/Won";
import ForgotPassword from "./pages/ForgotPW/ForgotPassword";
import RequestEntries from "./pages/RequestEntries/RequestEntries";
import TagManager from "react-gtm-module";
import SubDone from "./pages/SubDone";
import PastGiveaways from "./pages/PastGiveaways/PastGiveaways";
import OngoingGiveaways from "./pages/OngoingGiveaways/OngoingGiveaways";
import UpcomingGiveaways from "./pages/UpcomingGiveaways/UpcomingGiveaways";
import RegisterOld from "./pages/register/RegisterOld";
import AdminLogin from "./pages/Admin/Login";
import AdminRounds from "./pages/Admin/Giveaway";
import UnderDev from "./pages/UnderDev/UnderDev";
import Forum from "./pages/Forum/Forum";
import Register2 from "./pages/Register-WithoutPayment/Register"

import AgentChat from "./pages/Messages/AgentChat";
import NewMessage from "./pages/Messages/TestMSG";
import Partners from "./pages/Partners/Partners";
import { CwmDemo } from "./pages/Messages/Conversation";
import Groupchat from "./pages/Messages/NewMessage";
import GroupChat from "./pages/Messages/GroupChat";
import { RefreshProvider } from "./utils/RefreshContext";
import EmailVerify from "./pages/Profile/EmailVerify";
import NewMyEntries from "./pages/MyEntries/NewMyEntries";
import Succesful from "./pages/Login/Succesful";
import MobileVerify from "./pages/Profile/EmailVerify copy";
function App() {
  const tagManagerArgs = {
    gtmId: "GTM-P2DVFZVB",
  };

  TagManager.initialize(tagManagerArgs);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/newslist",
          element: <Newslist />,
        },
        {
          path: "/news/:id",
          element: <News />,
        },
        {
          path: "/subscription",
          element: <Subscription />,
        },
        // {
        //   path: "/giveaways",
        //   element: <RafflesDashboard />,
        // },
        {
          path: "/giveaway/:id",
          element: <Raffles />,
        },
        {
          path: "/faq",
          element: <FaQ />,
        },
        {
          path: "transaction/",
          element: <Transaction />,
        },
        {
          path: "/business-card",
          element: <BusinessCard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/live",
          element: <LiveRaffle />,
        },
        {
          path: "/messages",
          element: <NewMessage />,
        },
        // {
        //   path: "/agent",
        //   element: <AgentChat />,
        // },
        {
          path: "/forum",
          element: <Forum />,
        },
        // {
        //   path: "/subscription-done",
        //   element: <SubDone />,
        //   subscription-done?suc=0&fail=1&sub_id=ds Sample Done Route
        // },
        // {
        //   path: "/payment-done",
        //   element: <PaymentSuccess />,
        //   // payment-done?suc=1&round_id=sadc  Sample Success Route
        //   // payment-done?suc=0&fail=1&round_id=ds  Sample Fail Route
        // },
        // {
        //   path: "/register-district-1/:selectedPackage?",
        //   element: <DisOneRegister />,
        // },
        {
          path: "/myentriesOld",
          element: <MyEntries />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/loader",
          element: <Loader />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/promo",
          element: <Promo />,
        },
        {
          path: "/ref",
          element: <RefCount />,
        },
        {
          path: "/requestEntries",
          element: <RequestEntries />,
        },
        {
          path: "/pastGiveaways",
          element: <PastGiveaways />,
        },
        {
          path: "/ongoingGiveaways",
          element: <OngoingGiveaways />,
        },
        {
          path: "/upcomingGiveaways",
          element: <UpcomingGiveaways />,
        },
        {
          path: "/won/:id",
          element: <Won />,
        },
        {
          path: "/partners",
          element: <Partners />,
        },
        {
          path: "/groupchat",
          element: <GroupChat />,
        },
        {
          path: "/verifyEmail",
          element: <EmailVerify />,
        },
        {
          path: "/verifyMobile",
          element: <MobileVerify />,
        },
        {
          path: "/myentries",
          element: <NewMyEntries />,
        },
      ],
    },

    {
      path: "/:id?",
      element: <Navigate to="/login" replace />,
    },
    {
      path: "/conditions",
      element: <TermsCondition />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/succes",
      element: <Succesful />,
    },
    {
      path: "/registerQr",
      element: <RegisterOld />,
    },
    {
      path: "/register/:selectedPackage?",
      element: <Register />,
    },
    // {
    //   path: "register2",
    //   element: <Register2 />
    // },
    {
      path: "/register-district-1/:selectedPackage?",
      element: <DisOneRegister />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/subscription-done",
      element: <SubDone />,
    },
    {
      path: "/payment-done",
      element: <PaymentSuccess />,
      // payment-done?suc=1&round_id=sadc  Sample Success Route
      // payment-done?suc=0&fail=1&round_id=ds  Sample Fail Route
    },

    {
      path: "/payment-failed",
      element: <PaymentSuccess />,
    },

    {
      path: "/privacy",
      element: <Privacy />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admin-rounds",
      element: <AdminRounds />,
    },
    {
      path: "/under-dev",
      element: <UnderDev />,
    },
  ]);

  return (
    <>
      <GoogleAnalytics trackingCode="G-N927BPJE6K" />
      <RefreshProvider>
      <RouterProvider router={router} />
      </RefreshProvider>
      <ToastContainer />
    </>
  );
}

export default App;
