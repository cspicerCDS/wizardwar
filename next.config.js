/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/ww' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ww' : '',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

module.exports = nextConfig