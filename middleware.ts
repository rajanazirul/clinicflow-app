import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';

const locales = ['en', 'my'];
const publicPages = ['/', '/login'];

const auth = authMiddleware({
  publicRoutes: ["/", "/about"],
});

const intl = createMiddleware({
  locales: ['en', 'my'],
  defaultLocale: 'my'
});

// export default compose([auth, intl]);
export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
 
  if (isPublicPage) {
    return intl(req);
  } else {
    return (auth as any)(req);
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
