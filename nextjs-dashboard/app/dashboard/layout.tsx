import React from "react";
import SideNav from "../ui/dashboard/sidenav";
export const experimental_ppr = true;
//this export experimental_ppr is experimental feature of nextjs14 which we have used by also mdifying the next config file by adding the - experimental property , you can use it or remove it there isnot much difference instead of a little performance improvement that too is not sure whether it happens or not 

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
