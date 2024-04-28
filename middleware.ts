import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProctedRoute = createRouteMatcher(["/dashboard"]);

export default clerkMiddleware((auth, req) => {
  if (isProctedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
