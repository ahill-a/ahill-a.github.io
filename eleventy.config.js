export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/images');
	eleventyConfig.addPassthroughCopy('src/css');
	
	eleventyConfig.addCollection('art', (collection) => {
		return [...collection.getFilteredByGlob('src/art/*.md')].reverse();
	});
	eleventyConfig.addCollection('games', (collection) => {
		return [...collection.getFilteredByGlob('src/games/*.md')].reverse();
	});

	eleventyConfig.addCollection('devlog', (collection) => {
		return [...collection.getFilteredByGlob('src/devlogs/*.md')].reverse();
	});

	eleventyConfig.addFilter("limit", function (arr, limit) {
	return arr.slice(0, limit);

	});
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};

/**
 * Takes a collection and returns it back in display order
 *
 * @param {Array} collection The 11ty collection
 * @returns {Array} the sorted collection
 */
function sortByDisplayOrder(collection) {
	return collection.sort((a, b) =>
		Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1,
	);
}