import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./../pages/Home";
import LogIn from "./../pages/LogIn";
import SignUp from "./../pages/SignUp";
import ResetPassword from "./../pages/ResetPassword";
import ResetVerification from "./../pages/ResetVerification";
import ChangePassword from "./../pages/ChangePassword";
import CompleteProfile from "./../pages/CompleteProfile";
import Subscription from "./../pages/Subscription";
import Layout from "./../Layout/Layout";
import Faq from "./../pages/Faq";
import Contact from "./../pages/Contact";
import AccountSettings from "./../pages/AccountSettings";
import AuthorChat from "./../components/AuthorChat/AuthorChat";
import Bookmark from "./../pages/Bookmark";
import ReadBook from "./../pages/ReadBook";
import HighLights from "./../pages/HighLights";
import MyNotes from "./../pages/MyNotes";
import Notification from "./../pages/Notification";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import EditProfile from "../pages/EditProfile";
import SubscriptionRoute from "./SubscriptionRoute";
import Investors from "../pages/Investors";
import SidebarLayout from "../Layout/SidebarLayout";
import UploadBooks from "../pages/UploadBooks";
import AudioUpload from "../pages/AudioUpload";
import Books from "../pages/Books";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <LoginRoute>
        <LogIn />
      </LoginRoute>
    ),
  },

  {
    path: "/signUp",
    element: (
      <LoginRoute>
        <SignUp />
      </LoginRoute>
    ),
  },

  {
    path: "/reset-password",
    element: (
      <LoginRoute>
        <ResetPassword />
      </LoginRoute>
    ),
  },

  {
    path: "/reset-verification",
    element: (
      <LoginRoute>
        <ResetVerification />
      </LoginRoute>
    ),
  },

  {
    path: "/change-password",
    element: (
      <LoginRoute>
        <ChangePassword />
      </LoginRoute>
    ),
  },

  {
    path: "/complete-profile",
    element: <CompleteProfile />,
  },

  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/subscription/:id",
    element: (
      <PrivateRoute>
        <Subscription />
      </PrivateRoute>
    ),
  },
  {
    path: "/ask-hard-copy",
    element: (
      <PrivateRoute>
        <Subscription />
      </PrivateRoute>
    ),
  },

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/admins",
        element: <SidebarLayout />,
        children: [
          {
            path: "/admins/upload-books",
            element: <UploadBooks />,
          },
          {
            path: "/admins/audios",
            element: <AudioUpload />,
          },
        ],
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/investors",
        element: <Investors />,
      },
      {
        path: "/contact",
        // element:    <PrivateRoute> <Contact /></PrivateRoute>
        element: (
          // <PrivateRoute>
          //   {" "}
          <Contact />
          // </PrivateRoute>
        ),
      },
      // {
      //   path: "/contact",
      //   element: (
      //     <ProtectedRoute>
      //       {/* <Contact /> */}
      //       <Contact />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/account-settings",
        element: (
          <PrivateRoute>
            <AccountSettings />
          </PrivateRoute>
        ),
      },

      {
        path: "/author-chat",
        element: (
          <PrivateRoute>
            <AuthorChat />
          </PrivateRoute>
        ),
      },

      {
        path: "/bookmark",
        element: (
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        ),
      },
      {
        path: "/read-book/:id",
        element: (
          // <SubscriptionRoute>
          <ReadBook />
          // </SubscriptionRoute>
        ),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoute>
            <Notification />
          </PrivateRoute>
        ),
      },
      {
        path: "/highlights",
        element: (
          <PrivateRoute>
            <HighLights />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-notes",
        element: (
          <PrivateRoute>
            <MyNotes />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
