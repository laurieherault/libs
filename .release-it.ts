import type { Config } from "release-it";

export default {
	hooks: {
		"before:init": ["bun test", "bun build"],
	},
	git: {
		commit: true,
		tag: true,
		push: true,
	},
	npm: {
		publish: true,
	},
} satisfies Config;
