/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      }, {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      }, {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
      }
    ]
  },
  headers:
    process.env.NODE_ENV === 'development'
      ? () => [
        {
          source: '/_next/static/css/_app-client_src_app_globals_css.css',
          headers: [ { key: 'Vary', value: '*' } ],
        },
      ]
      : undefined,
  sassOptions: {
    includePaths: [ "./*" ],
  },
}

module.exports = nextConfig
