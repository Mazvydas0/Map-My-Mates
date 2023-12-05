export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/event-details/:path*",
    "/friend-details/:path*",
    "/mutual-friend/:path*",
  ],
};
