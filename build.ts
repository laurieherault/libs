import dts from "bun-plugin-dts";
// import { readFileSync } from "node:fs";

// // Read package.json
// const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));

// // Get all dependencies and peerDependencies
// const dependencies = Object.keys(packageJson.dependencies || {});
// const peerDependencies = Object.keys(packageJson.peerDependencies || {});

// // Combine all external dependencies
// const externals = [...dependencies, ...peerDependencies];

// // Build configuration
// await Bun.build({
// 	entrypoints: ["./src/index.ts", "./src/test.ts"],
// 	outdir: "./dist",
// 	target: "bun",
// 	external: externals,
// 	plugins: [dts()],
// });

// console.log(`Build completed with ${externals.length} external dependencies`);

await Bun.build({
	entrypoints: ["./src/index.ts", "./src/test.ts"],
	outdir: "./dist",
	target: "bun",

	plugins: [dts()],
});
