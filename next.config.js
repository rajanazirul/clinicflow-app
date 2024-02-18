const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin(`./app/i18n.ts`)

/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images:{
        unoptimized: true,
        domains:['media.graphassets.com']
    }
}

module.exports = withNextIntl(nextConfig)
