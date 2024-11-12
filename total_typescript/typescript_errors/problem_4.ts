/**
 * Fixing "Types Of Property Are Incompatible"
 * https://www.totaltypescript.com/tutorials/solving-typescript-errors/errors/fixing-types-of-property-are-incompatible
 */

type RoutingConfig = {
	routes: {
		path: string;
		component: string;
	}[];
};


const routingConfig = {
	routes: [
		{
			path: "home",
			component: "HomeComponent",
		},
		{
			path: "about",
			component: "AboutComponent",
		},
		{
			path: "contact",
			component: "ContactComponent",
		},
	],
} satisfies RoutingConfig;

const createRoutes = (config: RoutingConfig) => {};

createRoutes(routingConfig); // red squiggly line under routingConfig