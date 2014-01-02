process.env.NODE_ENV = "testing";

module.exports["node"] = {
	rootPath: ".",
	environment: "node",
	tests: [
		"test/**/*.test.js"
	],
	testHelpers: ["test/_.js"]
};
