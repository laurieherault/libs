Bun.serve({
	routes: {
		"/users/:id": (req) => {
			req.method;
			return new Response(`Hello User ${req.params.id}!`);
		},
	},
});
