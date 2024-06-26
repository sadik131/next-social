// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// const isProtected = createRouteMatcher(["./pages/setting(.*)"])

// export default clerkMiddleware((auth,req)=>{
//     if(isProtected(req)) auth().protect()
// });
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: '/(.*)', // Apply the middleware to all routes
};