import fs from 'fs'; 

export default function (eleventyConfig) {
	eleventyConfig.setQuietMode(true);
	eleventyConfig.setInputDirectory("pages");
	eleventyConfig.setDataDirectory("config");
	eleventyConfig.setOutputDirectory("output");
	eleventyConfig.addPassthroughCopy({"pages/config/members.json": "members.json"});
	eleventyConfig.addPassthroughCopy("static/");
}