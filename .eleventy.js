export default function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.setInputDirectory("pages");
	eleventyConfig.setDataDirectory("config");
	eleventyConfig.setOutputDirectory("output");
	eleventyConfig.addPassthroughCopy({"pages/config/members.json": "members.json"});
	eleventyConfig.addPassthroughCopy("static/");
}

export const config = {
	pathPrefix: "/wrongos/",
}
