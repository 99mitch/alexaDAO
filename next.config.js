/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["chainlist.org"],
    },
    transpilePackages: ['@uniswap/widgets', '@uniswap/conedison'], // Add this line to transpile the package
    experimental: {
        esmExternals: true, // Enable ESM support for external packages
    },
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false, // Ignore the 'fs' module in the browser
        };

        // Add a plugin to define `self` globally
        const webpack = require('webpack');
        config.plugins.push(
            new webpack.DefinePlugin({
                self: 'globalThis', // Define `self` as `globalThis` to fix the issue
            })
        );

        return config;
    },
};

module.exports = nextConfig;
