import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const layout = async ({ children }: { children: ReactNode }) => {
  const apiLimit = await getApiLimitCount();
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900 ">
        <Sidebar apiLimitCount={apiLimit} />
      </div>
      <main className="md:pl-72">
        <Navbar apiLimitCount={apiLimit} />
        {children}
      </main>
    </div>
  );
};
export default layout;
