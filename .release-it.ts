import type { Config } from "release-it";

export default {
	hooks: {
		"before:init": ["bun run test", "bun run build"],
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
