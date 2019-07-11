import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, b as attr, c as add_location, d as insert, f as append, n as noop, g as detach } from './chunk-dc6d30d4.js';

/* src/routes/Home.svelte generated by Svelte v3.6.7 */

const file = "src/routes/Home.svelte";

function create_fragment(ctx) {
	var t0, h1, t2, figure, img, t3, figcaption, t5, p, strong;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			h1.textContent = "Great success!";
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			figcaption.textContent = "HIGH FIVE!";
			t5 = space();
			p = element("p");
			strong = element("strong");
			strong.textContent = "Try editing this file (routes/index.html) to test hot module reloading.";
			document.title = "Sapper project template";
			attr(h1, "class", "svelte-1ehbjg6");
			add_location(h1, file, 4, 0, 70);
			attr(img, "alt", "Borat");
			attr(img, "src", "/great-success.png");
			attr(img, "class", "svelte-1ehbjg6");
			add_location(img, file, 7, 1, 105);
			add_location(figcaption, file, 8, 1, 149);
			attr(figure, "class", "svelte-1ehbjg6");
			add_location(figure, file, 6, 0, 95);
			add_location(strong, file, 11, 3, 199);
			attr(p, "class", "svelte-1ehbjg6");
			add_location(p, file, 11, 0, 196);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			insert(target, t2, anchor);
			insert(target, figure, anchor);
			append(figure, img);
			append(figure, t3);
			append(figure, figcaption);
			insert(target, t5, anchor);
			insert(target, p, anchor);
			append(p, strong);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(figure);
				detach(t5);
				detach(p);
			}
		}
	};
}

class Home extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Home;
//# sourceMappingURL=Home-7ae7b743.js.map