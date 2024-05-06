import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const layout = async ({ children }: { children: ReactNode }) => {
  const apiLimit = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 bg-gray-900 ">
        <Sidebar isPro={isPro} apiLimitCount={apiLimit} />
      </div>
      <main className="md:pl-72">
        <Navbar isPro={isPro} apiLimitCount={apiLimit} />
        {children}
      </main>
    </div>
  );
};
export default layout;
