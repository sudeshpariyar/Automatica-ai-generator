import Heading from "@/components/Heading";
import SubscriptionButton from "@/components/subscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Settings } from "lucide-react";
import React from "react";

const SettingPage = async () => {
  const checkPro = await checkSubscription();
  console.log("CheckPro", checkPro);

  return (
    <>
      <Heading
        title="Settings "
        description="Custumize your settings."
        icon={Settings}
        iconColor="text-purple-500"
        bgColor="bg-emerald-300/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="divtext-muted-foreground text-sm">
          {checkPro ? "You are currentley in a Pro Plan." : "Upgrade to Pro"}
        </div>
        <SubscriptionButton isPro={checkPro} />
      </div>
    </>
  );
};

export default SettingPage;
