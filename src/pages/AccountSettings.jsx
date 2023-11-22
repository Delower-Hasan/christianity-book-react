import React, { useContext } from "react";
import AccountSetting from "../components/AccountSettings/AccountSetting";
import ProfileSetting from "../components/AccountSettings/ProfileSetting";
import Subscription from "../components/AccountSettings/Subscription";
import Notification from "../components/AccountSettings/Notification";
import ActivityGraph from "../components/AccountSettings/ActivityGraph";
import PageHeading from "../components/Utils/PageHeading";
import { AuthContext } from "../contexts/AuthProvider";

const AccountSettings = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <div className="container">
        <PageHeading path="/account-settings"> Account Settings</PageHeading>
        <div className="account">
          <AccountSetting user={user?.data} setUser={setUser} />
          <ProfileSetting />
          <Subscription />
          <Notification />
        </div>
        <ActivityGraph />
      </div>
    </>
  );
};

export default AccountSettings;
