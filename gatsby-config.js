module.exports = {
	siteMetadata: {
		title: 'BOPS | Garage pop music from Paris',
		author: 'Aman Mittal',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'BOPS NEW SONGS',
		keywords: `Bops Garage Pop Music Paris Rennes`,
		facebook: `https://www.facebook.com/bops03/`,
		instagram: `https://www.instagram.com/bopsmusic/`,
		youtube: `https://www.youtube.com/channel/UCDwjMtPjCjtZVA4t8UIWiRA`,
		siteUrl: `https://ridewithbops.com/`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Bops',
				short_name: 'Bops',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-154432313-1',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline',
	]
};
