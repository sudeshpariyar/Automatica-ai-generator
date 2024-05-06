import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProctedRoute = createRouteMatcher([
  "/dashboard",
  "/conversation",
  "/image",
  "/video",
  "/music",
  "/code",
  "/setting",
]);

export default clerkMiddleware((auth, req) => {
  if (isProctedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
