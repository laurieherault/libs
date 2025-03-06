import type { Config } from "release-it";

export default {
	hooks: {
		"before:init": ["bun run test"],
		// "after:bump": ["git add ."],
	},
	git: {
		addUntrackedFiles: true,
		commit: true,
		tag: true,
		push: true,
		requireCleanWorkingDir: false,
	},
	npm: {
		publish: true,
	},
} satisfies Config;
