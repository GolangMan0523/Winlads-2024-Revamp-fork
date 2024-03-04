import React from "react";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import MyEntriesButton from "./components/MyEntries/MyEntriesButton";
import { RefreshProvider, useRefresh } from "./utils/RefreshContext";
import Logout from "./components/logout/Logout";

const Layout = () => {
  const { showMenu } = useRefresh()
  return (
    <div className="flex flex-row w-full relative">
      {/* <RefreshProvider> */}
      <SideNav />
      <div className={`w-full ${!showMenu ? 'h-screen overflow-hidden' : ''}`}>
        <Outlet />

      </div>
      {/* <MyEntriesButton /> */}
      {/* <Logout/> */}
      {/* </RefreshProvider> */}

    </div>
  );
};

export default Layout;
