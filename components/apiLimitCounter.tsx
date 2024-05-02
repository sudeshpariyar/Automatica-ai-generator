"use-client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_REQUEST } from "@/constant";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/useProModal";

interface ApiLimitCounterProps {
  apiLimitCount: number;
}

const ApiLimitCounter = ({ apiLimitCount = 0 }: ApiLimitCounterProps) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6 mb-8 flex flex-col ">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount}/{MAX_FREE_REQUEST} remaining...
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_REQUEST) * 100}
            />
          </div>
          <Button
            onClick={proModal.onOpen}
            className="w-full text-white"
            variant="pro"
          >
            Upgrade to Pro <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiLimitCounter;
