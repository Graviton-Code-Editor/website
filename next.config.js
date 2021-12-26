const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
	[optimizedImages,{
		handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
		optimizeImagesInDev: true
	}]
],{
	target: 'serverless',
	webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config
    },
	async redirects() {
		return [
			{
				source: '/blog/graviton2_changes/graviton2_changes',
				destination: '/blog/2_graviton2_changes',
				permanent: true,
			},
			{
				source: '/blog/blog/graviton_remake/remake/',
				destination: '/blog/1_graviton_remake',
				permanent: true,
			},
			{
				source: '/blog/blog/website_revamp/website_revamp/',
				destination: '/blog/0_website_revamp',
				permanent: true,
			},
			{
				source: '/docs',
				destination: '/book/index.html',
				permanent: true,
			}
		]
	},
})