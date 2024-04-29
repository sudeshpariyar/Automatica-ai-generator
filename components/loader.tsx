import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="p-20 h-full flex flex-col gap-y-4 items-center justify-center bg-black/10 rounded-md">
      <div className="w-12 h-12">
        <Audio height="80" width="80" color="green" ariaLabel="loading" />
      </div>
      <p className="text-sm text-muted-foreground mt-3">
        Generating your output....
      </p>
    </div>
  );
};

export default Loader;
