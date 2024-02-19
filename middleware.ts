import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'my'],
  defaultLocale: 'en'
});
 
export default authMiddleware({
  beforeAuth(request) {
    return intlMiddleware(request);
  },
 
  // Ensure that locale-specific sign in pages are public
  publicRoutes: ['/:locale', '/:locale/sign-in'],
  // debug: true,
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
