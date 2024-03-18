import React from "react";
import SidenavTop from "./SidenavTop";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SidenavBottom from "./SidenavBottom";

const SidebarNav = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div className="h-screen fixed w-64 p-6 border-r flex flex-col">
      <div className="flex-1">
        <SidenavTop user={user} />
      </div>
      <div>
        <SidenavBottom />
      </div>
    </div>
  );
};

export default SidebarNav;
