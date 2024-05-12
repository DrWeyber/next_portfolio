import createMiddleware from 'next-intl/middleware';
import { localePrefix } from './navigation';

export default createMiddleware({
  locales: ['en'],
  defaultLocale: 'en',
  localePrefix
});

export const config = {
  matcher: ['/', '/(en)/:path*']
};
