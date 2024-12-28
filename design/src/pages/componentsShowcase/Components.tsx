import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export default function Components() {
  return (
    <div className="flex ">
      <div className="fixed  ">
        <Sidebar />
      </div>

      <main className=" flex md:pl-64 pt-16 pb-20 ">
        <div className="mx-auto max-w-7xl px-4 ">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Welcome to my blog{" "}
            <span className="inline-block animate-pulse text-red-500">🔴 </span>
            I'm dev and here i post my latest tech explorations and some
            Experimental Motion Designs
          </h1>
        </div>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
