/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        FEATURES: "https://headless-commerce.free.beeceptor.com",
    },
    images: {
        remotePatterns: [{
            hostname: 'dummyimage.com'
        }],
    }
}

module.exports = nextConfig
